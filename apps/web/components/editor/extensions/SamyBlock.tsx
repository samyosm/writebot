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

const Component = ({ title, preview, value, nodeKey }: { title: string, preview: string, value: string, nodeKey: NodeKey }) => {
  const [editor] = useLexicalComposerContext();
  const setValue = (t: string) => {
    editor.update(() => {
      const block = $getNodeByKey(nodeKey) satisfies SamyBlock | null;
      console.log(block?.__value);
      block?.setValue(t);
    });
  };

  const handleKeypress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();

      editor.update(() => {
        const block = $getNodeByKey(nodeKey) satisfies SamyBlock | null;
        console.log(block);
        const node = $createTextNode(block?.__value);
        const parents = block?.getParentOrThrow().clear();
        parents?.selectStart().insertNodes([node]);
      });
    }
  };

  return (
    <div className="mb-5 p-5 bg-slate-300 rounded-md not-prose">
      <h2 className="text-xl font-bold my-2">{title}</h2>
      <p className="my-1">{preview}</p>
      <input onKeyDown={handleKeypress} autoFocus value={value} onChange={(e) => setValue(e.target.value)} className="bg-white w-full p-2" type="text"/>
    </div>
  );
};

export class SamyBlock extends DecoratorNode<React.ReactNode> {
  __value: string;

  constructor(_value: string, key?: string,) {
    super(key);
    this.__value = _value;
  }

  setValue = (t: string) => {
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
        <Component nodeKey={this.__key} value={this.__value} title="This is my title" preview="The text you are currently reading right now will be the preview I use for this component."/>
      </Suspense>
    );
  }
}

export const $createSamyBlock = (): SamyBlock => {
  return new SamyBlock('test');
};

export const $isSamyBlock = (node ?: LexicalNode) => {
  return node instanceof SamyBlock;
};
