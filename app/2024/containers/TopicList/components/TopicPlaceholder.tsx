import { ReactElement } from 'react';
import styles from './TopicPlaceholder.module.scss';

export function TopicPlaceholder(): ReactElement {
  return (
    <div className={styles.container}>
      <h2>Temat heckatonu zostanie wkrótce opublikowany !</h2>
      <picture className={styles.picture}>
        <source media='(max-width:629px)' srcSet='/2024/topic/topic-sm.JPG' />
        <source media='(max-width:950px)' srcSet='/2024/topic/topic-md.JPG' />
        <source media='(min-width:951px)' srcSet='/2024/topic/topic-lg.JPG' />
        <img src='/2024/topic/topic-lg.JPG' alt='' />
      </picture>
    </div>
  );
}
