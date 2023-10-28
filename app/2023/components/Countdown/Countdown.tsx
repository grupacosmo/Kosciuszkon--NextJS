'use client';

import { type ReactElement, useEffect, useState } from 'react';
import dynamic from 'next/dynamic';
import styles from './Countdown.module.scss';
import { calcEndTime, calcStartTime } from './utils';

const Timer = dynamic(() => import('./Timer'), { ssr: false });

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
    }, 975);

    return () => clearInterval(interval);
  });

  if (startTime < 0 && endTime < 0) {
    return (
      <article className={styles.countdown}>
        <h3>Wydarzenie zakończone</h3>
        <Timer time={null} />
      </article>
    );
  }

  if (startTime < 0 && endTime > 0) {
    return (
      <article className={styles.countdown}>
        <h3>Koniec wydarzenia za</h3>
        <Timer time={endTime} />
      </article>
    );
  }

  return (
    <article className={styles.countdown}>
      <h3>Start wydarzenia</h3>
      <Timer time={startTime} />
    </article>
  );
}
