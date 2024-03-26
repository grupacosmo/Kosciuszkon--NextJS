import { ReactElement } from 'react';
import styles from './TopicPlaceholder.module.scss';

export function TopicPlaceholder(): ReactElement {
  return (
    <div className={styles.container}>
      <h2>Szczegóły tematu zostaną udostępnione na wydarzeniu</h2>
      <picture className={styles.picture}>
        <source media='(max-width:629px)' srcSet='/p2024/topic/topic-sm.JPG' />
        <source media='(max-width:950px)' srcSet='/p2024/topic/topic-md.JPG' />
        <source media='(min-width:951px)' srcSet='/p2024/topic/topic-lg.JPG' />
        <img src='/p2024/topic/topic-lg.JPG' alt='' />
      </picture>
    </div>
  );
}
