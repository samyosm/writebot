// @flow
import * as React from 'react';
import {
  $createParagraphNode,
  $getSelection,
  $insertNodes, $isParagraphNode,
  $isRootOrShadowRoot, $setSelection,
  COMMAND_PRIORITY_EDITOR,
  createCommand,
  LexicalCommand, ParagraphNode
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
        const selection = $getSelection();
        const selectionNodes = selection?.getNodes();
        if (selectionNodes && selectionNodes.length === 1 && $isParagraphNode(selectionNodes.at(0))) {
          const selectedNode = selectionNodes[0] as ParagraphNode;

          $insertNodes([node], true);

          selectedNode.remove();
        }
        else if (selectionNodes) {
          selectionNodes.at(selectionNodes.length-1)?.getParentOrThrow().insertAfter(node);
        } else {
          $insertNodes([node], true);
          if($isRootOrShadowRoot(node.getParentOrThrow())){
            $wrapNodeInElement(node, $createParagraphNode).selectEnd();
          }
        }

        if (!node.getNextSibling()) {
          const toInsert = $createParagraphNode();
          node.insertAfter(toInsert, true);
          $setSelection(toInsert.selectStart());
        }

        return true;
      },
      COMMAND_PRIORITY_EDITOR,
    ));
  }, [editor]);
  return null;
};
