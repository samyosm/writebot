'use client';


import { Editor } from '@/components/Editor';

export default function Home() {
  return (
    <main className="min-h-screen w-full h-full flex justify-center bg-white p-5 text-black">
      <Editor />
    </main>
  );
}
