import { type ReactElement } from 'react';
import {ScheduleElement} from './ScheduleElement';
import styles from './ScheduleTable.module.scss';

type Schedule = {
  id: string;
  title: string;
  time: string;
  description: string;
};

type ScheduleTableProps = {
  firstTitle: string;
  firstArray: Schedule[];
  secondTitle: string;
  secondArray: Schedule[];
};

export function ScheduleTable({
  firstTitle,
  firstArray,
  secondTitle,
  secondArray,
}: ScheduleTableProps): ReactElement {
  return (
    <div className={styles.container}>
      <article>
        <h3>{firstTitle}</h3>
        <div>
          {firstArray.map(({ id, ...restProps }) => (
            <ScheduleElement key={id} {...restProps} />
          ))}
        </div>
      </article>
      <article>
        <h3>{secondTitle}</h3>
        <div>
          {secondArray.map(({ id, ...restProps }) => (
            <ScheduleElement key={id} {...restProps} />
          ))}
        </div>
      </article>
    </div>
  );
}
