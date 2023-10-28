import { ReactElement } from 'react';
import classes from './Hero.module.scss';


export function Hero(): ReactElement {
  return (
    <section className={classes.section}>
      <div className={classes.title}>
        <h1>Kościuszkon</h1>
        <p>
          Zapraszamy na pierwszą edycję hackathonu organizowanego przez Wydział
          Informatyki i Telekomunikacji Politechniki Krakowskiej. Czekają na was
          24 godziny pracy nad ciekawym wyzwaniem oraz dobra zabawa.
        </p>
        <div className={classes.titleBackground} />
      </div>

      <div className={classes.videoContainer}>
        <video src='/2023/video.mp4' autoPlay muted loop />
      </div>
      <div className={classes.gradient}></div>
    </section>
  );
}
