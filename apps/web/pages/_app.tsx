import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import './globals.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Writebot - Write with ease</title>
        <meta content="width=device-width, initial-scale=1" name="viewport"/>
        <meta name="description" content="A text editor that help you write."/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>


        <Component {...pageProps} />
    </>
  );
}
