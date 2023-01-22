import { $getNodeByKey, LexicalNode, NodeKey } from 'lexical';
import React, { Suspense, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import {
  $setPresetContent,
  $setPresetValue,
  PresetNode,
  SerializedPresetNode
} from '@/components/editor/extensions/PresetNode';

const GetTweet = async ({ description, tone }: TweetPresetValue) => {
  const response = await fetch('/api/tweet', {
    method: 'POST',
    body: JSON.stringify({
      description,
      tone
    })
  });
  const json = await response.json();
  return json.text;
};


const Component = ({ value, nodeKey, generated }: { value: TweetPresetValue, nodeKey: NodeKey, generated?: string }) => {
  const [editor] = useLexicalComposerContext();

  const setValue = (v: { tone?: string, description?: string }) => {
    $setPresetValue(editor, nodeKey, {
      tone: 'tone' in v ? v.tone : value.tone,
      description: 'description' in v ? v.description : value.description
    });
  };

  const handleGenerate = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    editor.getEditorState().read(() => {
      const preset = $getNodeByKey(nodeKey) satisfies TweetPreset | null;
      if (preset) {
        const value = preset.__value;
        GetTweet(value)
          .then((tweet) => {
            editor.update(() => {
              preset.setGenerated(tweet.trim());
            });
          });
      }
    });
  };

  const handleInsert = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    $setPresetContent(editor, nodeKey, generated!);
  };

  return (
    <div className="mb-5 p-5 bg-slate-200 border border-slate-300 rounded-md not-prose w-full flex flex-col gap-3 focus:outline focus:outline-slate-500">
      <h2 className="text-lg font-bold my-2">Add a tweet</h2>
      <div className="flex w-full gap-2">
        <TextInput example="A tweet about AIs" label="Tweet description" value={value.description} setValue={(e) => setValue({ description: e })}/>
        <TextInput example="Afraid" label="Tweet tone" value={value.tone} setValue={(e) => setValue({ tone: e })}/>
      </div>
      {
        generated &&
        (
          <div className="flex flex-col gap-1">
            <p>Result</p>
            <div className="prose bg-white p-5 rounded-md">
              {generated}
            </div>
          </div>
        )
      }
      <div className="w-full flex justify-end gap-2">
        { generated && <button className="bg-emerald-500 rounded-md p-2 px-4 hover:bg-blue-600 text-white" onClick={handleInsert}>{'Insert'}</button>}
        <button className="bg-blue-500 rounded-md p-2 px-4 hover:bg-blue-600 text-white" onClick={handleGenerate}>{generated ? 'Regenerate' : 'Generate'}</button>
      </div>
    </div>
  );
};

const TextInput = ({ value, setValue, label, example }: { example: string, label: string, value: string, setValue: (t: string) => void }) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <p className="">{label}</p>
      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="bg-white w-full p-2 outline-none rounded-md"
        type="text"
        placeholder={example}/>
    </div>
  );
};

type TweetPresetValue = { tone: string, description: string };


export class TweetPreset extends PresetNode<TweetPresetValue> {
  __generated: string | undefined;


  constructor(_value: TweetPresetValue, generated?: string, key?: string) {
    super(_value, key);
    this.__generated = generated;
  }

  setGenerated(generated: string) {
    const self = this.getWritable();
    self.__generated = generated;
  }

  static getType(): string {
    return 'tweet-preset';
  }

  static clone(node: TweetPreset): TweetPreset {
    return $createTweetPreset(node.__value, node.__generated);
  }

  exportJSON(): SerializedPresetNode<TweetPresetValue> {
    return super.exportJSON();
  }

  static importJSON(serializedNode: SerializedPresetNode<TweetPresetValue>): TweetPreset {
    return $createTweetPreset(serializedNode.value);
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <Component generated={this.__generated} nodeKey={this.__key} value={this.__value}/>
      </Suspense>
    );
  }
}

export const $createTweetPreset = ({ tone, description } : TweetPresetValue, generated?: string): TweetPreset => {
  return new TweetPreset({ tone, description }, generated);
};

export const $createEmptyTweetPreset = (): TweetPreset => {
  return new TweetPreset({ tone: '', description: '' });
};

export const $isSamyBlock = (node ?: LexicalNode) => {
  return node instanceof TweetPreset;
};
