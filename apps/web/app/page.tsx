'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

const Editor = () => {
  const editor = useEditor({
    extensions: [
      StarterKit
    ],
    content: `
    <h1>Lorem impsum</h1>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Eu volutpat odio facilisis mauris sit amet. Tristique et egestas quis ipsum suspendisse ultrices. Id neque aliquam vestibulum morbi blandit cursus. Feugiat nisl pretium fusce id. Elit at imperdiet dui accumsan sit amet nulla facilisi. Eleifend donec pretium vulputate sapien nec. Risus feugiat in ante metus dictum at tempor. Ac odio tempor orci dapibus ultrices in. Ligula ullamcorper malesuada proin libero nunc consequat interdum. At risus viverra adipiscing at. In ante metus dictum at tempor commodo ullamcorper a lacus. Mi eget mauris pharetra et ultrices neque ornare aenean euismod. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Massa placerat duis ultricies lacus sed turpis. Ut tellus elementum sagittis vitae et leo. Quam quisque id diam vel quam elementum pulvinar etiam non. Quis varius quam quisque id diam vel quam. Vel turpis nunc eget lorem dolor sed viverra.</p>

<p>Semper quis lectus nulla at. Convallis a cras semper auctor. Iaculis eu non diam phasellus vestibulum lorem. Quis imperdiet massa tincidunt nunc pulvinar sapien. Ut tortor pretium viverra suspendisse potenti nullam. Gravida arcu ac tortor dignissim convallis aenean et. Lacinia at quis risus sed vulputate odio ut. Lacus sed viverra tellus in. Egestas fringilla phasellus faucibus scelerisque eleifend. Pellentesque massa placerat duis ultricies lacus sed.</p>

<p>Ligula ullamcorper malesuada proin libero nunc. Scelerisque felis imperdiet proin fermentum leo vel orci. Dignissim convallis aenean et tortor at risus. Cum sociis natoque penatibus et magnis. Laoreet suspendisse interdum consectetur libero id faucibus. Laoreet id donec ultrices tincidunt arcu non. Feugiat in fermentum posuere urna. Sed sed risus pretium quam vulputate. Montes nascetur ridiculus mus mauris vitae ultricies leo integer. At augue eget arcu dictum varius duis. Lacus sed turpis tincidunt id aliquet risus. Augue ut lectus arcu bibendum at varius vel pharetra vel. Nibh ipsum consequat nisl vel pretium lectus quam. Nunc scelerisque viverra mauris in aliquam sem fringilla ut morbi. Volutpat maecenas volutpat blandit aliquam etiam erat. Purus gravida quis blandit turpis cursus in hac. Interdum consectetur libero id faucibus nisl tincidunt. Lectus arcu bibendum at varius vel pharetra vel.</p>
`,
    editorProps: {
      attributes: {
        class: 'prose prose-sm lg:prose-lg prose-indigo w-full h-full p-5 focus:outline-none mx-auto'
      }
    }
  });

  return (
    <EditorContent className="w-full h-full" editor={editor} />
  );
};

export default function Home() {
  return (
    <main className="min-h-screen w-full h-full flex justify-center bg-white">
      <Editor />
    </main>
  );
}
