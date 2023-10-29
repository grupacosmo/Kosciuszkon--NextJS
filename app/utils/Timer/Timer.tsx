import { type ReactElement } from 'react';
import clsx from 'clsx';
import styles from './Timer.module.scss';

const DAY_IN_SECONDS = 86400;
const HOUR_IN_SECONDS = 3600;
const MINUTE_IN_SECONDS = 60;

type TimerProps = {
  time: number | null;
  className?: string;
};

export default function Timer({ time, className }: TimerProps): ReactElement {
  let timeInSec: number;

  if (!time) {
    timeInSec = 0;
  } else {
    timeInSec = time;
  }

  const days = Math.trunc(timeInSec / DAY_IN_SECONDS);
  const hours = Math.trunc(timeInSec / HOUR_IN_SECONDS) % 24;
  const minutes = Math.trunc(timeInSec / MINUTE_IN_SECONDS) % 60;
  const seconds = Math.trunc(timeInSec) % 60;

  return (
    <p className={clsx(styles.timer, className)}>
      <span>{padZero(days, 2)}</span>
      <span>:</span>
      <span>{padZero(hours, 2)}</span>
      <span>:</span>
      <span>{padZero(minutes, 2)}</span>
      <span>:</span>
      <span>{padZero(seconds, 2)}</span>
    </p>
  );
}

function padZero(number: number, pad: number): string {
  return number.toString().padStart(pad, '0');
}
