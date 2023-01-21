import {
  $createParagraphNode, $createTextNode,
  $getNodeByKey, $getSelection, $insertNodes, $isRootOrShadowRoot, $setSelection,
  DecoratorNode,
  DOMExportOutput,
  EditorConfig,
  LexicalEditor,
  LexicalNode, NodeKey, ParagraphNode,
  TextNode
} from 'lexical';
import { DecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';
import React, { Suspense, useState } from 'react';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $insertNodeToNearestRoot, $wrapNodeInElement } from '@lexical/utils';
import { Writebot } from 'writebot';
import TweetGen from 'tweet-gen';
import { Infer } from 'superstruct';

const GetTweet = async (description: string, tone: string) => {
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

const Component = ({ value, nodeKey }: { value: { tone: string, description: string }, nodeKey: NodeKey }) => {
  const [editor] = useLexicalComposerContext();
  const setValue = (t: { tone?: string, description?: string }) => {
    editor.update(() => {
      const block = $getNodeByKey(nodeKey) satisfies SamyBlock | null;
      console.log(t);
      block?.setValue({
        tone: t.tone || value.tone,
        description: t.description || value.description
      });
    });
  };

  const handleSubmit = (e:  React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    editor.getEditorState().read(() => {
      const block = $getNodeByKey(nodeKey) satisfies SamyBlock | null;

      if(block) {
        GetTweet(block.__value.description, block.__value.tone)
          .then((response: string) => {
            editor.update(() => {
              const node = $createTextNode(response.trim());
              const parents = block?.getParentOrThrow().clear();
              parents?.selectStart().insertNodes([node]);
            });
          });
      }

    });





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

export class SamyBlock extends DecoratorNode<React.ReactNode> {
  __value: { tone: string, description: string };

  constructor(__value: { tone?: string, description?: string }, key?: string,) {
    super(key);
    this.__value = {
      tone: __value.tone || '',
      description: __value.description || ''
    };
  }

  setValue = (t: { tone: string, description: string }) => {
    const self = this.getWritable();
    self.__value = t;
  };

  static getType(): string {
    return 'samy';
  }
  static clone(node: SamyBlock): SamyBlock {
    return new SamyBlock(node.__value, node.__key);
  }
  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    return { element };
  }

  createDOM(): HTMLElement {
    const elem = document.createElement('span');
    elem.style.display = 'inline-block';
    return elem;
  }

  updateDOM(): false {
    return false;
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    return (
      <Suspense fallback={null}>
        <Component nodeKey={this.__key} value={this.__value}/>
      </Suspense>
    );
  }
}

export const $createSamyBlock = (): SamyBlock => {
  return new SamyBlock({});
};

export const $isSamyBlock = (node ?: LexicalNode) => {
  return node instanceof SamyBlock;
};
