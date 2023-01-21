import { InitialConfigType, LexicalComposer } from '@lexical/react/LexicalComposer';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import {
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
import React, { useState } from 'react';
import { InsertBlockCommand } from '@/components/editor/commands/InsertBlockCommand';
import { InsertPopupPlugin } from '@/components/editor/plugins/InsertPopupPlugin';
import { SamyBlock } from '@/components/editor/extensions/SamyBlock';
import { HorizontalRuleNode } from '@lexical/react/LexicalHorizontalRuleNode';
import { PlainTextPlugin } from '@lexical/react/LexicalPlainTextPlugin';
import DraggableBlockPlugin from '@/components/editor/plugins/DraggableBlockPluggin';

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
      SamyBlock,
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
        {
          floatingAnchorElem && <DraggableBlockPlugin anchorElem={floatingAnchorElem} />
        }
      </div>
    </LexicalComposer>

  );
};
