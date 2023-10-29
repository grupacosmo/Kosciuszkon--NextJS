'use client';

import { ReactElement } from 'react';
import { Slider } from '@/app/utils';
import { SlideContent } from './components/SlideContent';
import { sliderContent } from './data';
import styles from './TopicList.module.scss';

export function TopicList(): ReactElement {
  return (
    <section id='topic-list' className={styles.section}>
      <Slider
        render={SlideContent}
        slides={sliderContent}
        containerClassName={styles.sliderContainer}
        nextButtonClassName={styles.nextSlideButton}
        prevButtonClassName={styles.prevSlideButton}
      />
    </section>
  );
}
