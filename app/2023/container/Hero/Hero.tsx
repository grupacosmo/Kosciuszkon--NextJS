import classes from './Hero.module.scss';

function Hero() {
  return (
    <section className={classes['hero']}>
      <div className={classes['hero__gradient']}></div>
      <div className={classes['hero__title']}>
        <div className={classes['hero__title-background']} />
        <div className={classes['hero__title-content']}>
          <h1>Kościuszkon</h1>
          <span className={classes['hero__description']}>
            Zapraszamy na pierwszą edycję hackathonu organizowanego przez
            Wydział Informatyki i Telekomunikacji Politechniki Krakowskiej.
            Czekają na was 24 godziny pracy nad ciekawym wyzwaniem oraz dobra
            zabawa.
          </span>
        </div>
      </div>

      <div className={classes['hero__video-container']}>
        <video src='/2023/video.mp4' autoPlay muted loop />
      </div>
    </section>
  );
}

export default Hero;
