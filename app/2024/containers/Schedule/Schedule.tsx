'use client';

import { type ReactElement, useState } from 'react';

import { SchedulePlaceholder } from './components/SchedulePlaceholder.';

import styles from './Schedule.module.scss';

export function Schedule(): ReactElement {
  const [isHackathon, setIsHackathon] = useState<boolean>(true);

  return (
    <section className={styles.schedule}>
      <SchedulePlaceholder />
    </section>
  );
}
