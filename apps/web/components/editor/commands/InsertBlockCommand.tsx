// @flow
import * as React from 'react';
import {
  $createParagraphNode,
  $getSelection,
  $insertNodes,
  $isRootOrShadowRoot,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand
} from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodeInElement, mergeRegister, $insertNodeToNearestRoot } from '@lexical/utils';
import { NodeMaker } from '@/types/lexical';
import { $shouldInsertTextAfterOrBeforeTextNode } from 'lexical/LexicalUtils';

export const INSERT_BLOCK_COMMAND: LexicalCommand<NodeMaker> = createCommand();

export const InsertBlockCommand = () => {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    return mergeRegister(editor.registerCommand<NodeMaker>(
      INSERT_BLOCK_COMMAND,
      (payload) => {
        const node = payload();
        $insertNodes([node], true);
        if($isRootOrShadowRoot(node.getParentOrThrow())){
          $wrapNodeInElement(node, $createParagraphNode).selectEnd();
        }
        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    ));
  }, [editor]);
  return null;
};
