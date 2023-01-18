import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: '<p>Hello World! 🌎️</p>'
  });

  return (
    <EditorContent editor={editor} />
  );
};
