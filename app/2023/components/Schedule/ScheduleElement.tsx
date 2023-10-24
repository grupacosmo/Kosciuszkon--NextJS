import { type ReactElement } from 'react';
import styles from './ScheduleElement.module.scss';

type ScheduleProps = {
  title: string;
  time: string;
  description: string;
};

export function ScheduleElement({
  title,
  time,
  description,
}: ScheduleProps): ReactElement {
  return (
    <div className={styles.element}>
      <div>{title}</div>
      <div>{time}</div>
      {description && (
        <div className={styles.elementDescription}>{description}</div>
      )}
    </div>
  );
}
