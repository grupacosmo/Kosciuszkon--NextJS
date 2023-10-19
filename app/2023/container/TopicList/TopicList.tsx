'use client';

import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

import classes from './TopicList.module.scss';
import './Slider.scss';

export function TopicList() {
  return (
    <div id='topic-list' className={classes['topic-list']}>
      <Carousel showArrows={true} autoPlay infiniteLoop showThumbs={false}>
        <div key='slide1' className={classes['topic-list__slide']}>
          <div className='slider-content'>
            <h2>Temat I - zdrowie psychiczne</h2>
            <p>
              Zdarzenia na przestrzeni ostatnich kilku lat niewątpliwie
              odcisnęły swoje piętno na naszej kondycji psychicznej. Izolacja
              społeczna, wiszący konflikt na wschodzie oraz przesyt informacji,
              jakie codziennie przetwarzamy - wszystko to powoduje stres, z
              którym coraz ciężej nam sobie radzić. Nie zawsze wiemy co zrobić w
              sytuacji stresującej. Rozmyślamy, uciekamy, korzystamy z różnych
              substancji lub wpadamy w uciążliwe nawyki. Jeśli temat zdrowia
              psychicznego jest Ci bliski, podejmij się wyzwania rozwiązania
              jednego z problemów obecnych czasów
            </p>
          </div>
        </div>
        <div key='slide2' className={classes['topic-list__slide']}>
          <div className='slider-content'>
            <h2>Temat II - zdrowie fizyczne</h2>
            <p>
              Przymusowa izolacja oraz ograniczenia przemieszczania się,
              połączone z wdrożeniem pracy i nauki zdalnej zdestabilizowały nasz
              codzienny tryb życia. Ograniczenie ruchu wpływa na kondycję
              naszego ciałą oraz samopoczucie, wpływa niekorzystnie na nasz
              metabolizm i gospodarkę hormonalną, osłabiając odporność,
              pogarszając cykl snu a nawet nasz wygląd. Wszystko to pogarsza
              jakość naszego życia, nie tylko w sferze zawodowej, ale również
              towarzyskiej. Wybierz jeden z obszarów zdrowia, który uważasz że
              możesz naprawić, i zaprojektuj swój pomysł.
            </p>
          </div>
        </div>
        <div key='slide3' className={classes['topic-list__slide']}>
          <div className='slider-content'>
            <h2>Temat III - Kultura i Rozrywka</h2>
            <p>
              Czas pandemii i izolacji sprawił, że zatęskniliśmy za sobą i
              miejscami, gdzie dotąd się widywaliśmy. Obecnie wydarzenia
              kulturalne wracają do łask, niektóre z nich jednak możliwe, że już
              nie wrócą. Przykry jednak może być fakt, że część ludzi mogła się
              zaadoptować do trudnych warunków. Może sam dostrzegasz ten problem
              i masz pomysł co zrobić, żeby bardziej przybliżyć ludzi do
              wydarzeń kulturalnych i różnych form spędzania wspólnie czasu?
            </p>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
