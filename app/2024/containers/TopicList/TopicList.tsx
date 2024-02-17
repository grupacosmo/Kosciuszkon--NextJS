'use client';

import { ReactElement } from 'react';

import { TopicPlaceholder } from './components/TopicPlaceholder';

import styles from './TopicList.module.scss';

export function TopicList(): ReactElement {
  return (
    <section id='topic-list' className={styles.section}>
      <TopicPlaceholder />
    </section>
  );
}
