import { ReactElement } from 'react';
import styles from './SlideContent.module.scss';

type Content = {
  title: string;
  text: string;
};

export function SlideContent(content: Content): ReactElement {
  return (
    <div className={styles.slide}>
      <h2>{content.title}</h2>
      <p>{content.text}</p>
    </div>
  );
}
