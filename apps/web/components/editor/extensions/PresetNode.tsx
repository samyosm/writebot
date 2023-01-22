import {
  $createTextNode,
  $getNodeByKey,
  DecoratorNode,
  DOMExportOutput,
  LexicalEditor,
  NodeKey,
  SerializedLexicalNode,
  Spread
} from 'lexical';
import React, { Suspense } from 'react';

export type SerializedPresetNode<T> = Spread<
  {
    value: T,
    type: string;
    version: 1;
  },
  SerializedLexicalNode
>;

export class PresetNode<T> extends DecoratorNode<React.ReactNode> {
  __value: T;

  constructor(__value: T, key?: string,) {
    super(key);
    this.__value = __value;
  }

  setValue = (value: T) => {
    const self = this.getWritable();
    self.__value = value;
  };

  static getType(): string {
    return 'preset';
  }

  exportJSON(): SerializedPresetNode<T> {
    return {
      value: this.__value,
      type: this.getType(),
      version: 1
    };
  }

  exportDOM(): DOMExportOutput {
    const element = document.createElement('span');
    element.classList.add('w-full');
    return { element };
  }

  createDOM(): HTMLElement {
    const elem = document.createElement('span');
    elem.className = elem.className.concat(' w-full');

    return elem;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return (
      <Suspense fallback={null}>
        <p>Preset</p>
      </Suspense>
    );
  }
}

export const $createPresetNode = <T, >(value: T): PresetNode<T> => {
  return new PresetNode<T>(value);
};


export const $setPresetValue = <T, >(editor: LexicalEditor, nodeKey: NodeKey, value: T) => {
  editor.update(() => {
    const block = $getNodeByKey(nodeKey) satisfies PresetNode<T> | null;
    block?.setValue(value);
  });
};

export const $setPresetContent = <T, >(editor: LexicalEditor, nodeKey: NodeKey, content: string) => {

  editor.update(() => {
    const block = $getNodeByKey(nodeKey) satisfies PresetNode<T> | null;

    if (block) {
      const node = $createTextNode(content);
      const parents = block?.getParentOrThrow().clear();
      parents?.selectStart().insertNodes([node]);
    }
  });
};
