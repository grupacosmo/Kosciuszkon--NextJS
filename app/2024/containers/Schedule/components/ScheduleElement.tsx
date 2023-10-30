import { type ReactElement } from 'react';
import styles from './ScheduleElement.module.scss';

type ScheduleElementProps = {
  title: string;
  time: string;
};

export function ScheduleElement({
  title,
  time,
}: ScheduleElementProps): ReactElement {
  return (
    <div className={styles.element}>
      <div>{title}</div>
      <div>{time}</div>
    </div>
  );
}
