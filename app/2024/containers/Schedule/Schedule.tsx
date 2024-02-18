'use client';

import { type ReactElement, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import clsx from 'clsx';

import { ScheduleTable } from './components/ScheduleTable';
import { scheduleData } from './data';

import styles from './Schedule.module.scss';
import { SchedulePlaceholder } from './components/SchedulePlaceholder.';

export function Schedule(): ReactElement {
  const [isHackathon, setIsHackathon] = useState<boolean>(true);

  return (
    <section className={styles.schedule}>
      <SchedulePlaceholder />
    </section>
  );
}
