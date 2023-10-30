import { type ReactElement } from 'react';
import styles from './SectionDivider.module.scss';

type SectionDividerProps = {
  name: string;
};

export function SectionDivider({ name }: SectionDividerProps): ReactElement {
  return (
    <div className={styles.divider} id={name}>
      <div className={styles.dividerInner}>
        <div className={styles.dividerTitleOuter}>
          <div className={styles.dividerTitleInner}>
            <h2>{name}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}