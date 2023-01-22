import { LexicalEditor, LexicalNode } from 'lexical';
import { $createEmptyTweetPreset, $createTweetPreset } from '@/components/editor/extensions/TweetPreset';
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
    <div className="w-full hover:bg-slate-200 rounded-md cursor-pointer p-4" onClick={handleClick}>
      <p className="font-bold">{name}</p>
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
    <div className="absolute-center bg-white rounded-md p-2 max-w-sm w-full not-prose h-full max-h-96 overflow-y-auto shadow-2xl border border-slate-400">
      <p className="font-bold text-lg text-center p-3">Insert a popup</p>
      <div className="flex flex-col gap-5">
        <BlockPresentation node={$createEmptyTweetPreset} onClick={handleClick} name="Tweet" description="Create a simple tweet"/>
      </div>
    </div>
  );
};


export const InsertPopupPlugin = () => {
  const [editor] = useLexicalComposerContext();
  const [ open, setOpen ] = React.useState(false);

  React.useEffect(() => {
    const handler = createKeybindingsHandler({
      '$mod+m': () => {
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
