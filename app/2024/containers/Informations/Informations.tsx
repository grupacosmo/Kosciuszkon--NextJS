'use client';

import { ReactElement } from 'react';
import { Slider } from '@/app/utils/';
import { SlideContent } from './components/SlideContent';
import { sliderContent } from './data';
import styles from './Informations.module.scss';

export function Informations(): ReactElement {
  return (
    <section className={styles.section}>
      <Slider
        render={SlideContent}
        slides={sliderContent}
        hasGrayscale
        containerClassName={styles.container}
        nextButtonClassName={styles.nextSlideButton}
        prevButtonClassName={styles.prevSlideButton}
        dotsClassName={styles.sliderDots}
      />
    </section>
  );
}
