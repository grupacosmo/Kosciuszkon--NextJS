'use client';

import { type ReactElement, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { ScheduleTable } from './components/ScheduleTable';
import { scheduleData } from './data';

import styles from './Schedule.module.scss';

export function Schedule(): ReactElement {
  const [isHackathon, setIsHackathon] = useState<boolean>(true);

  return (
    <section className={styles.schedule}>
      <div className={styles.controls}>
        <button
          onClick={() => setIsHackathon(true)}
          className={clsx(styles.button, styles.buttonRight, {
            [styles.isActive]: isHackathon,
          })}
        >
          Hackathon
        </button>
        <button
          onClick={() => setIsHackathon(false)}
          className={clsx(styles.button, styles.buttonLeft, {
            [styles.isActive]: !isHackathon,
          })}
        >
          Warsztaty
        </button>
      </div>

      {isHackathon && (
        <AnimatePresence>
          <ScheduleTable
            firstTitle='Niedziela'
            firstArray={scheduleData.hackathon.sunday}
            secondTitle='Poniedziałek'
            secondArray={scheduleData.hackathon.monday}
          />
        </AnimatePresence>
      )}
      {!isHackathon && (
        <AnimatePresence>
          <ScheduleTable
            firstTitle='Niedziela'
            firstArray={scheduleData.workshop.sunday}
            secondTitle='Poniedziałek'
            secondArray={scheduleData.workshop.monday}
          />
        </AnimatePresence>
      )}
    </section>
  );
}
