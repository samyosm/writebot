import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import {
  $createParagraphNode, $createTextNode,
  $getRoot, $getSelection,
  EditorState, LexicalEditor, RootNode, TextNode
} from 'lexical';
import { HeadingNode, QuoteNode } from '@lexical/rich-text';
import { TableCellNode, TableNode, TableRowNode } from '@lexical/table';
import { ListItemNode, ListNode } from '@lexical/list';
import { CodeHighlightNode, CodeNode } from '@lexical/code';
import { AutoLinkNode, LinkNode } from '@lexical/link';
import { MarkdownShortcutPlugin } from '@lexical/react/LexicalMarkdownShortcutPlugin';
import { TRANSFORMERS } from '@lexical/markdown';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { AutoFocusPlugin } from '@lexical/react/LexicalAutoFocusPlugin';
import { EditorPlaceholder } from '@/components/editor/EditorPlaceholder';
import { NodeEventPlugin } from '@lexical/react/LexicalNodeEventPlugin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import React from 'react';
import isHotkey from 'is-hotkey';
import { createKeybindingsHandler } from 'tinykeys';
import { $createSamyBlock, SamyBlock } from '@/components/editor/extensions/SamyBlock';

const onError = (error: unknown) => {
  console.error(error);
};

const onChange = (editorState: EditorState) => {
  editorState.read(() => {
    // Read the contents of the EditorState here.
/*    const root = $getRoot();
    console.log(root.getTextContent().replace(/\n/g, ' '));
    const selection = $getSelection();
    console.log(selection?.getTextContent());*/

  });
};


const MyPlugin = () => {
  const [editor] = useLexicalComposerContext();
  React.useEffect(() => {
    const removeRootListener = editor.registerRootListener((rootElement, prevRootElement) => {

      const handler = createKeybindingsHandler({
        '$mod+g': () => {
          editor.update(() => {

            // Get the selection from the EditorState
            const selection = $getSelection();
            selection?.insertNodes([
              $createSamyBlock()
            ]);

          });
        }
      });


      rootElement?.addEventListener('keydown',  handler);
    });
    console.log('twice or not');
  }, [editor]);

  return null;
};

export const Editor = () => {

  const initialConfig = {
    namespace: 'MyEditor',
    onError,
    nodes: [
      HeadingNode,
      ListNode,
      ListItemNode,
      QuoteNode,
      CodeNode,
      CodeHighlightNode,
      TableNode,
      TableCellNode,
      TableRowNode,
      AutoLinkNode,
      LinkNode,
      SamyBlock
    ]
  } satisfies InitialConfigType;

  return (
    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-content"/>}
          placeholder={<EditorPlaceholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange} />
        <HistoryPlugin />
        <AutoFocusPlugin/>
        <MarkdownShortcutPlugin transformers={TRANSFORMERS} />
        <MyPlugin/>
      </div>
    </LexicalComposer>
  );
};
