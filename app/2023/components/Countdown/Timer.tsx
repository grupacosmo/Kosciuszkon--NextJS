import { type ReactElement } from 'react';
import Image from 'next/image';
import styles from './Timer.module.scss';

import hex from '../../assets/svg/hex-timer.svg';
import { padZero } from './utils';

const DAY_IN_SECONDS = 86400;
const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;


type TimerProps = {
  time: number | null;
};

export default function Timer({ time }: TimerProps): ReactElement {
  if (!time) {
    return (
      <div className={styles.container}>
        <div className={styles.timer} >
          <span>00</span>
          <span>:</span>
          <span>00</span>
          <span>:</span>
          <span>00</span>
          <span>:</span>
          <span>00</span>
        </div>
        <Image
          className={styles.background}
          src={hex}
          alt='Czrny sześcian z zielonym obramowaniem.'
        />
      </div>
    );
  }

  const days = Math.trunc(time / DAY_IN_SECONDS);
  const hours = Math.trunc(time / HOUR_IN_SECONDS) % 24;
  const minutes = Math.trunc(time / MINUTE_IN_SECONDS) % 60;
  const seconds = Math.trunc(time) % 60;

  return (
    <div className={styles.container}>
      <div className={styles.timer} suppressHydrationWarning>
        <span>{padZero(days)}</span>
        <span>:</span>
        <span>{padZero(hours)}</span>
        <span>:</span>
        <span>{padZero(minutes)}</span>
        <span>:</span>
        <span>{padZero(seconds)}</span>
      </div>
      <Image
        className={styles.background}
        src={hex}
        alt='Czrny sześcian z zielonym obramowaniem.'
      />
    </div>
  );
}
