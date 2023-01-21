import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import {
  $createParagraphNode,
  $getRoot, $insertNodes, $isRootOrShadowRoot, COMMAND_PRIORITY_EDITOR,
  EditorState
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
import React, { useEffect, useState } from 'react';
import { INSERT_BLOCK_COMMAND, InsertBlockCommand } from '@/components/editor/commands/InsertBlockCommand';
import { InsertPopupPlugin } from '@/components/editor/plugins/InsertPopupPlugin';
import { TweetPreset } from '@/components/editor/extensions/TweetPreset';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import DraggableBlockPlugin from '@/components/editor/plugins/DraggableBlockPluggin';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';
import { $wrapNodeInElement, mergeRegister } from '@lexical/utils';
import { NodeMaker } from '@/types/lexical';

const onError = (error: unknown) => {
  console.error(error);
};

const onChange = (editorState: EditorState) => {
  editorState.read(() => {

    localStorage.setItem('editorState', JSON.stringify(editorState));

  });
};


export const LocalStorageSavePlugin = () => {
  const [editor] = useLexicalComposerContext();

  React.useEffect(() => {
    const localEditorState = localStorage.getItem('editorState');
    if (localEditorState) {
      const parsedEditorState = editor.parseEditorState(JSON.parse(localEditorState));

      console.log(parsedEditorState);
      editor.setEditorState(parsedEditorState);
    }
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
      TweetPreset,
      HorizontalRuleNode
    ]
  } satisfies InitialConfigType;

  const [ floatingAnchorElem, setFloatingAnchorElem ] =
    useState<HTMLDivElement | null>(null);

  const onRef = (_floatingAnchorElem: HTMLDivElement) => {
    if (_floatingAnchorElem !== null) {
      setFloatingAnchorElem(_floatingAnchorElem);
    }
  };

  return (

    <LexicalComposer initialConfig={initialConfig}>
      <div className="editor-container">
        <RichTextPlugin
          contentEditable={
          <div ref={onRef} className="w-full h-full">
            <ContentEditable className="editor-content"/>
          </div>
          }
          placeholder={<EditorPlaceholder/>}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <OnChangePlugin onChange={onChange}/>
        <HistoryPlugin/>
        <AutoFocusPlugin/>
        <MarkdownShortcutPlugin transformers={TRANSFORMERS}/>
        <InsertPopupPlugin/>
        <InsertBlockCommand/>
        <LocalStorageSavePlugin/>
        {
          floatingAnchorElem && <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
        }
      </div>
    </LexicalComposer>

  );
};
