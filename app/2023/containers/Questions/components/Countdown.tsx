'use client';

import { type ReactElement, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './Countdown.module.scss';

import hex from '../../../assets/svg/hex-timer.svg';

const Timer = dynamic(() => import('@/app/utils/Timer/Timer'), { ssr: false });

type CountdownProps = {
  startDate: string;
  endDate: string;
};

export function Countdown({
  startDate,
  endDate,
}: CountdownProps): ReactElement {
  const [startTime, setStartTime] = useState<number>(calcStartTime(startDate));
  const [endTime, setEndTime] = useState<number>(calcEndTime(endDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setStartTime((state) => state - 1);
      setEndTime((state) => state - 1);
    }, 985);

    return () => clearInterval(interval);
  }, []);

  const { time, header } = calcProps(startTime, endTime);

  return (
    <article className={styles.container}>
      <h3>{header}</h3>
      <div className={styles.countdown}>
        <Timer time={time} className={styles.timer} />
        <Image
          className={styles.timerBackground}
          src={hex}
          alt='Czarny sześcian z zielonym obramowaniem.'
        />
      </div>
    </article>
  );
}

function calcStartTime(startDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const startTimeInSec = new Date(startDate).getTime() / 1000;
  return startTimeInSec - nowInSec;
}

function calcEndTime(endDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const endTimeInSec = new Date(endDate).getTime() / 1000;
  return endTimeInSec - nowInSec;
}

function calcProps(startTime: number, endTime: number) {
  let time: null | number = null;
  let header = 'Wydarzenie zakończone';

  if (startTime > 0) {
    return { time: startTime, header: 'Start wydarzenia' };
  }

  if (startTime < 0 && endTime > 0) {
    return { time: endTime, header: 'Koniec wydarzenia za' };
  }

  return { time, header };
}
