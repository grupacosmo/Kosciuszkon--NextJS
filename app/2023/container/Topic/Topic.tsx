'use client';

import { ReactElement } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import { ReactSVG } from 'react-svg';

import classes from './Topic.module.scss';
import './Slider.scss';

export function Topic(): ReactElement {
  return (
    <div id='topic' className={classes['topic']}>
      <div className={classes['topic__info']}>
        <ReactSVG src='/2023/hex-slim.svg' />
        <article className={classes['topic__article']}>
          <div className={classes['topic__article-mask']}></div>
          <h2>Hackathon</h2>
          <p>
            Zapraszamy do wzięcia udziału w pierwszej edycji kościuszkonu
            organizowanego przez WRSS WIiT oraz Fundację Samorządu Studentów
            Politechniki we współpracy z KN COSMO PK. Na wydarzeniu
            przewidzieliśmy wiele atrakcji, gdzie główną z nich jest prawie
            całodniowy Hackathon a oprócz tego prelekcje i wykłady prowadzone
            przez przedstawicieli firm oraz naszej uczelni, targi pracy z
            przedstawicielami firm IT i pokrewnych a także mini konkursy i
            pokazy.
          </p>
        </article>
      </div>
      <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false}>
        <div
          key='slide1'
          className={classes['topic__slide']}
          style={{
            backgroundImage: `url("/2023/backgrounds/kwadrat.webp")`,
          }}
        >
          <div className='slider-content'>
            <h2>I Edycja</h2>
            <p>
              Zapraszamy do wzięcia udziału w pierwszej edycji kościuszkonu
              organizowanego przez WRSS WIiT oraz Fundację Samorządu Studentów
              Politechniki we współpracy z KN COSMO PK. Na wydarzeniu
              przewidzieliśmy wiele atrakcji, gdzie główną z nich jest prawie
              całodniowy Hackathon a oprócz tego prelekcje i wykłady prowadzone
              przez przedstawicieli firm oraz naszej uczelni, targi pracy z
              przedstawicielami firm IT i pokrewnych a także mini konkursy i
              pokazy.
            </p>
          </div>
        </div>
        <div
          key='slide2'
          className={classes['topic__slide']}
          style={{
            backgroundImage: `url("/2023/backgrounds/kodowanie.webp")`,
          }}
        >
          <div className='slider-content'>
            <h2>Hackathon</h2>
            <p>
              Chcesz przetestować swoje umiejętności i stworzyć praktyczną
              aplikację? A może jesteś poprostu kreatywny, potrafisz dobrze
              sprzedać pomysł i szybko się uczysz nowych technologii? Zbierz
              drużynę lub zapisz się, a my ją dla Ciebie znajdziemy. W
              tegorocznej edycji przewidzieliśmy 3 kategorie projektów, które
              zostają udostępnione już w krótce. Dla uczestników zapewniamy
              jedzie i napoje oraz miejsce do odpoczynku.
            </p>
          </div>
        </div>
        <div
          key='slide3'
          className={classes['topic__slide']}
          style={{
            backgroundImage: `url("/2023/backgrounds/prelekcje2.webp")`,
          }}
        >
          <div className='slider-content'>
            <h2>Prelekcje i wykłady</h2>
            <p>
              Czy wiedziałeś, że rekruterzy coraz częściej zwracają uwagę na
              umiejętności miękkie u kandydatów do pracy? Będzie to jeden z
              tematów prelekcji, które odbędą się na naszym wydarzeniu. Oprócz
              tego nie zabraknie wykładów i warsztatów technicznych, dotyczacych
              technologii wykorzystywanych w programowaniu, Machine Learningu i
              Sztucznej inteligencji oraz problemów z tym związanych. Szczegóły
              znajdują się w <a href='#harmonogram'>harmonogramie</a> wydarzenia
            </p>
          </div>
        </div>
        <div
          key='slide4'
          className={classes['topic__slide']}
          style={{
            backgroundImage: `url("/2023/backgrounds/prelekcje.webp")`,
          }}
        >
          <div className='slider-content'>
            <h2>Targi pracy i inne atrakcje</h2>
            <p>
              Na wydarzeniu nie zabraknie innych atrakcji. Jedną z nich będą
              targi pracy oraz stoiska firm, na których będziecie mogli
              porozmawiać z przedstawicielami firm na temat pracy oraz zadać
              dowolne pytania. Oprócz tego mini konkursy organizowane przez nasz
              samorząd zachęcą do rywalizacji i do sprawdzenia swojej wiedzy.
              Będzie też dostępne stoisko z fotobudką oraz okularami do
              rozszerzonej rzeczywistości.
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
