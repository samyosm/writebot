import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import styles from './index.module.css';

function HomepageHeader() {
<<<<<<< HEAD
  const { siteConfig } = useDocusaurusContext();
=======
  const {siteConfig} = useDocusaurusContext();
>>>>>>> 878cc89 (initialized Docusaurus)
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
<<<<<<< HEAD
            Writebot Tutorial - 5min ⏱️
=======
            Docusaurus Tutorial - 5min ⏱️
>>>>>>> 878cc89 (initialized Docusaurus)
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
<<<<<<< HEAD
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={'Writebot | Openai OpenAI text generation abstraction.'}
      description="Writebot text generation abstraction">
=======
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
>>>>>>> 878cc89 (initialized Docusaurus)
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
