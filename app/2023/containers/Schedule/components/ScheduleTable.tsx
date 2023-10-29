import { type ReactElement } from 'react';
import { motion } from 'framer-motion';
import { ScheduleElement } from './ScheduleElement';
import styles from './ScheduleTable.module.scss';

const MOTION_CONFIG = {
  initial: { opacity: 0 },
  animate: { opacity:1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

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
    <motion.div {...MOTION_CONFIG} className={styles.container}>
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
    </motion.div>
  );
}
