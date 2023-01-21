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
      tone: v.tone || value.tone,
      description: v.description || value.description
    });
  };

  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    $setPresetContent(editor, nodeKey, GetTweet);
  };

  return (
    <div className="mb-5 p-5 bg-slate-300 rounded-md not-prose">
      <h2 className="text-xl font-bold my-2">Add a tweet</h2>
      <input value={value.description} autoFocus onChange={(e) => setValue({ description: e.target.value })} className="bg-white w-full p-2" type="text"/>
      <input value={value.tone} onChange={(e) => setValue({ tone: e.target.value })} className="bg-white w-full p-2" type="text"/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

type TweetPresetValue = { tone: string, description: string };


export class TweetPreset extends PresetNode<TweetPresetValue> {

  static getType(): string {
    return 'tweet-preset';
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
