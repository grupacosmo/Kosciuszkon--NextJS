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
        <video src='/p2023/video.mp4' autoPlay muted loop />
      </div>
      <div className={styles.gradient}></div>
    </section>
  );
}
