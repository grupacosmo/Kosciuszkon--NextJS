import { ReactElement } from 'react';
import styles from './Hero.module.scss';

export function Hero(): ReactElement {
  return (
    <section className={styles.section}>
      <div className={styles.title}>
        <h1>Kościuszkon I</h1>
        <p>
          Zapraszamy na pierwszą edycję hackathonu organizowanego przez Wydział
          Informatyki i Telekomunikacji Politechniki Krakowskiej. Czekają na was
          24 godziny pracy nad ciekawym wyzwaniem oraz dobra zabawa.
        </p>
        <div className={styles.titleBackground} />
      </div>

      <div className={styles.videoContainer}>
        <video autoPlay muted loop>
          <source src='/p2023/video.webm' type='video/webm' />
          <source src='/p2023/video.m4v' type='video/m4v' />
          <source src='/p2023/video.mp4' type='video/mp4' />
          <source src='/p2023/video.mov' type='video/mov' />
        </video>
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
