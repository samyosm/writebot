import { LexicalEditor, LexicalNode } from 'lexical';
import { $createSamyBlock } from '@/components/editor/extensions/SamyBlock';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React from 'react';
import { createKeybindingsHandler } from 'tinykeys';
import { $createTableNode } from '@lexical/table';

import { INSERT_BLOCK_COMMAND } from '@/components/editor/commands/InsertBlockCommand';
import { NodeMaker } from '@/types/lexical';


type BlockPresentationProps = {
  name: string,
  description: string,
  node: NodeMaker,
  onClick: (node: NodeMaker) => void
};


const BlockPresentation = ({ name, description, onClick, node }: BlockPresentationProps) => {
  const handleClick = () => {
    onClick(node);
  };
  return (
    <div className="w-full hover:bg-slate-200 rounded-md cursor-pointer p-2" onClick={handleClick}>
      <p>{name}</p>
      <p className="line-clamp-1">{description}</p>
    </div>
  );
};

const InsertPopup = ({ editor, close }: { editor: LexicalEditor, close: () => void }) => {
  const handleClick = (node: NodeMaker) => {
    editor.dispatchCommand(INSERT_BLOCK_COMMAND, node);
    close();
  };
  return (
    <div className="absolute-center bg-white rounded-md p-5 max-w-sm w-full not-prose h-full max-h-96 overflow-y-scroll">
      <p className="font-bold text-lg text-center p-5">Insert a popup</p>
      <div className="flex flex-col gap-5">
        <BlockPresentation node={$createSamyBlock} onClick={handleClick} name="Samy Test" description="This block is a test block for what I'm doing"/>
        <BlockPresentation node={$createTableNode}  onClick={handleClick} name="Header 1" description="This block is a test block for what I'm doing"/>
        <BlockPresentation node={$createSamyBlock}  onClick={handleClick} name="Samy Test" description="This block is a test block for what I'm doing"/>
        <BlockPresentation node={$createSamyBlock}  onClick={handleClick} name="Samy Test" description="This block is a test block for what I'm doing"/>
        <BlockPresentation node={$createSamyBlock}  onClick={handleClick} name="Samy Test" description="This block is a test block for what I'm doing"/>
        <BlockPresentation node={$createSamyBlock}  onClick={handleClick} name="Samy Test" description="This block is a test block for what I'm doing"/>
      </div>
    </div>
  );
};


export const InsertPopupPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [ open, setOpen ] = React.useState(false);

  React.useEffect(() => {
    const handler = createKeybindingsHandler({
      '$mod+g': () => {
        setOpen((prev) => !prev);
      }
    });

    /* Handle globally */
    const rootElement = document.querySelector('body');
    rootElement?.addEventListener('keydown', handler);

    /* Handle in editor */
    editor.registerRootListener((rootElement) => {

      rootElement?.addEventListener('keydown', (e) => {
        e.stopPropagation();
        handler(e);
      });

    });
  }, [editor]);

  return (
    <div style={{
      display: !open ? 'none' : 'inherit'
    }}>
      <InsertPopup editor={editor} close={() => setOpen(false)}/>
    </div>
  );
};
