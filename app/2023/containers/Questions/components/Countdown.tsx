'use client';

import { type ReactElement, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import styles from './Countdown.module.scss';

import hex from '../../../assets/svg/hex-timer.svg';
import clsx from 'clsx';
import { calcEndTime, calcProps, calcStartTime } from './utils';

const Timer = dynamic(() => import('@/app/utils/Timer/Timer'), { ssr: false });

type CountdownProps = {
  startDate: string;
  endDate: string;
  disabled?: boolean;
};

export function Countdown({
  startDate,
  endDate,
  disabled = false,
}: CountdownProps): ReactElement {
  const [startTime, setStartTime] = useState<number>(calcStartTime(startDate));
  const [endTime, setEndTime] = useState<number>(calcEndTime(endDate));

  useEffect(() => {
    if (!disabled) {
      const interval = setInterval(() => {
        setStartTime((state) => state - 1);
        setEndTime((state) => state - 1);
      }, 990);

      return () => clearInterval(interval);
    }

    return () => {};
  }, [disabled]);

  const { time, header } = calcProps(startTime, endTime);

  return (
    <article
      className={clsx(styles.container, { [styles.disabled]: disabled })}
    >
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

