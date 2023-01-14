import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
<<<<<<< HEAD
<<<<<<< HEAD
    Svg: require('@site/static/img/undraw_mindfulness_49je.svg').default,
    description: (
      <>
        Writebot was designed from the ground up to be easily installed and
        used.
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Writebot lets you abstract the complexity of making and sending request to OpenAI API.
      </>
    )
  },
  {
    title: 'Prevents type errors',
    Svg: require('@site/static/img/undraw_bug_fixing_oc-7-a.svg').default,
    description: (
      <>
        You can define the structure of your parameters to ensure you always get what you want.
      </>
    )
  }
];

function Feature({ title, Svg, description }: FeatureItem) {
=======
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
=======
    Svg: require('@site/static/img/undraw_mindfulness_49je.svg').default,
>>>>>>> 82b2c6f (Added docs)
    description: (
      <>
        Writebot was designed from the ground up to be easily installed and
        used.
      </>
    )
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_dev_focus_re_6iwt.svg').default,
    description: (
      <>
        Writebot lets you abstract the complexity of making and sending request to OpenAI API.
      </>
    )
  },
  {
    title: 'Prevents type errors',
    Svg: require('@site/static/img/undraw_bug_fixing_oc-7-a.svg').default,
    description: (
      <>
        You can define the structure of your parameters to ensure you always get what you want.
      </>
    )
  }
];

<<<<<<< HEAD
function Feature({title, Svg, description}: FeatureItem) {
>>>>>>> 878cc89 (initialized Docusaurus)
=======
function Feature({ title, Svg, description }: FeatureItem) {
>>>>>>> 82b2c6f (Added docs)
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
