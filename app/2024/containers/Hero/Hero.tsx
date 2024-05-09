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
        <video autoPlay muted loop>
          <source src='/p2024/video.webm' type='video/webm' />
          <source src='/p2024/video.mp4' type='video/mp4' /> 
          <source src='/p2024/video.mov' type='video/mov' />
        </video>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
