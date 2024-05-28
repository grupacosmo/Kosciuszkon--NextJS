'use client';

import type { ReactElement } from 'react';
import { AnimatePresence } from 'framer-motion';

import { ScheduleTable } from './components/ScheduleTable';
import { scheduleData } from './data';

import styles from './Schedule.module.scss';

export function Schedule(): ReactElement {
  return (
    <section className={styles.schedule}>
      <div className={styles.controls}>
        <h3>Hackathon</h3>
      </div>
      <AnimatePresence>
        <ScheduleTable
          firstTitle='Niedziela'
          firstArray={scheduleData.hackathon.sunday}
          secondTitle='Poniedziałek'
          secondArray={scheduleData.hackathon.monday}
        />
      </AnimatePresence>
    </section>
  );
}
