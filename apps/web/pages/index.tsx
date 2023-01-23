import { Editor } from '@/components/editor/Editor';
import React from 'react';

export default function Home() {

  return (
      <main className="min-h-screen w-full h-full flex justify-center bg-white p-5 text-black bg-slate-200">
        <Editor />
      </main>
  );
}
