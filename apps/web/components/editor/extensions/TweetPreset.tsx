import { LexicalNode, NodeKey } from 'lexical';
import React, { Suspense } from 'react';
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


const Component = ({ value, nodeKey }: { value: TweetPresetValue, nodeKey: NodeKey }) => {
  const [editor] = useLexicalComposerContext();

  const setValue = (v: { tone?: string, description?: string }) => {
    $setPresetValue(editor, nodeKey, {
      tone: 'tone' in v ? v.tone : value.tone,
      description: 'description' in v ? v.description : value.description
    });
  };

  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    $setPresetContent(editor, nodeKey, GetTweet);
  };

  return (
    <div className="mb-5 p-5 bg-slate-200 outline outline-slate-300 rounded-md not-prose w-full flex flex-col gap-3">
      <h2 className="text-lg font-bold my-2">Add a tweet</h2>
      <div className="flex w-full gap-2">
        <TextInput example="A tweet about AIs" label="Tweet description" value={value.description} setValue={(e) => setValue({ description: e })}/>
        <TextInput example="Afraid" label="Tweet tone" value={value.tone} setValue={(e) => setValue({ tone: e })}/>
      </div>
      <div className="w-full flex justify-end">
        <button className="bg-blue-500 rounded-md p-2 px-4 hover:bg-blue-600 text-white" onClick={handleSubmit}>Insert</button>
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

  static getType(): string {
    return 'tweet-preset';
  }

  static clone(node: TweetPreset): TweetPreset {
    return $createTweetPreset(node.__value);
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
        <Component nodeKey={this.__key} value={this.__value}/>
      </Suspense>
    );
  }
}

export const $createTweetPreset = ({ tone, description } : TweetPresetValue): TweetPreset => {
  return new TweetPreset({ tone, description });
};

export const $createEmptyTweetPreset = (): TweetPreset => {
  return new TweetPreset({ tone: '', description: '' });
};

export const $isSamyBlock = (node ?: LexicalNode) => {
  return node instanceof TweetPreset;
};
