import { type ReactElement } from 'react';
import styles from './SchedulePlaceholder.module.scss';

export function SchedulePlaceholder(): ReactElement {
  return (
    <div className={styles.container}>
      <h2>Szczegółowy harmonogram już wkrótce</h2>
      <picture className={styles.picture}>
        <source
          media='(max-width:629px)'
          srcSet='/2024/schedule/schedule-sm.JPG'
        />
        <source
          media='(max-width:950px)'
          srcSet='/2024/schedule/schedule-md.JPG'
        />
        <source
          media='(min-width:951px)'
          srcSet='/2024/schedule/schedule-lg.JPG'
        />
        <img src='/2024/topic/topic-lg.JPG' alt='' />
      </picture>
    </div>
  );
}
