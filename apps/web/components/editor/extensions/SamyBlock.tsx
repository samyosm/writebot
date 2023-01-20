import { EditorConfig, LexicalEditor, LexicalNode, TextNode } from 'lexical';
import { DecoratorBlockNode } from '@lexical/react/LexicalDecoratorBlockNode';

const Component = ({ title, preview }: { title: string, preview: string }) => (
  <div className="mb-5 p-5 bg-slate-300 rounded-md not-prose">
    <h2 className="text-xl font-bold my-2">{title}</h2>
    <p className="my-1">{preview}</p>
    <input className="bg-white w-full p-2" type="text"/>
  </div>
);

export class SamyBlock extends DecoratorBlockNode {
  static getType(): string {
    return 'samy-block';
  }
  static clone(node: DecoratorBlockNode): DecoratorBlockNode {
    return new SamyBlock('', node.__key);
  }

  createDOM(): HTMLElement {
    return document.createElement('div');
  }

  updateDOM(): false {
    return false;
  }

  decorate(editor: LexicalEditor, config: EditorConfig): JSX.Element {
    return <Component title="This is my title" preview="The text you are currently reading right now will be the preview I use for this component."/>;
  }
}

export const $createSamyBlock = (): SamyBlock => {
  return new SamyBlock();
};

export const $isSamyBlock = (node ?: LexicalNode) => {
  return node instanceof SamyBlock;
};
