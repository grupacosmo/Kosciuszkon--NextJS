import { ReactElement } from 'react';
import styles from './Hero.module.scss';

export function Hero(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Kościuszkon II</h1>
        <p>
          Zapraszamy na drugą edycję Kościuszkonu. Zbierz swoich znajomych i
          przygotuj się na 24 godziny walki o atrakcyjne nagrody.
        </p>
        <div className={styles.titleBackground} />
      </div>

      <div className={styles.videoContainer}>
        <video src='/2023/video.mp4' autoPlay muted loop />
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
