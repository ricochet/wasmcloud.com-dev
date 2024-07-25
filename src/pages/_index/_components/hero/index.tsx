import React from 'react';
import styles from './styles.module.css';
import ImgArrow from './images/arrow.svg';
import ImgFlare from './images/flare.svg';
import ImgSparkles from './images/sparkles.svg';
import ImgUnderline from './images/underline.svg';

type Props = {};

const HEADING = [
  // h1
  'Wasm-native',
  'Orchestration',
] as const;
const CONTENT = [
  // p
  'Deploy and manage Wasm applications',
  'on any device, server or cloud',
  'even your own!',
] as const;
const BUTTON = [
  // [text, href]
  'Get Started',
  '/docs/tour/hello-world',
] as const;

function Hero({}: Props) {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>
          <span>
            {HEADING[0]}
            <ImgSparkles className={[styles.img, styles.sparkles].join(' ')} title="" />
          </span>
          <br />
          <span>
            {HEADING[1]}
            <ImgFlare className={[styles.img, styles.flare].join(' ')} title="" />
          </span>
        </h1>
        <p>
          {CONTENT[0]}
          <br />
          {CONTENT[1]}
          <ImgArrow className={[styles.img, styles.arrow].join(' ')} title="" />
          <span className={styles.callout}>{CONTENT[2]}</span>
          <ImgUnderline className={[styles.img, styles.underline].join(' ')} title="" />
        </p>
        <a href={BUTTON[1]} className="button button--lg">
          {BUTTON[0]}
        </a>
      </div>
    </div>
  );
}

export { Hero };