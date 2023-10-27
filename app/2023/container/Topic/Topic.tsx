'use client';

import { ReactElement } from 'react';
import Image from 'next/image';
import { Slider } from '@/app/utils/';
import { SlideContent } from './components/SlideContent';
import { sliderContent } from './data';
import styles from './Topic.module.scss';

import pentagon from '../../assets/svg/pentagon.svg';

export function Topic(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.info}>
        <Image
          className={styles.infoBcg}
          src={pentagon}
          alt='Tło z zielonego czarnego pięciokątu.'
        />
        <article className={styles.infoText}>
          <h2>Hackathon</h2>
          <p>
            Zapraszamy do wzięcia udziału w pierwszej edycji kościuszkonu
            organizowanego przez WRSS WIiT oraz Fundację Samorządu Studentów
            Politechniki we współpracy z KN COSMO PK. Na wydarzeniu
            przewidzieliśmy wiele atrakcji, gdzie główną z nich jest prawie
            całodniowy Hackathon a oprócz tego prelekcje i wykłady prowadzone
            przez przedstawicieli firm oraz naszej uczelni, targi pracy z
            przedstawicielami firm IT i pokrewnych a także mini konkursy i
            pokazy.
          </p>
        </article>
      </div>

      <Slider
        render={SlideContent}
        items={sliderContent}
        hasGrayscale
        nextButtonClassName={styles.nextSlideButton}
        prevButtonClassName={styles.prevSlideButton}
        dotsClassName={styles.sliderDots}
      />
    </section>
  );
}
