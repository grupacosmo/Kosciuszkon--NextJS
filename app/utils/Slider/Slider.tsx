'use client';

import { type ReactElement, useState } from 'react';
import { BiCaretRight, BiCaretLeft } from 'react-icons/bi';
import { SlideData, SingleSlide } from './SliderItem';
import { SliderDot } from './SliderDot';
import styles from './Slider.module.scss';
import clsx from 'clsx';

type SliderProps = {
  slides: SlideData[];
  render: (content: any) => ReactElement | null;
  hasGrayscale?: boolean;
  containerClassName?: string;
  nextButtonClassName?: string;
  prevButtonClassName?: string;
  dotButtonClassName?: string;
  dotsClassName?: string;
};

export function Slider({
  slides,
  render,
  hasGrayscale = false,
  containerClassName,
  nextButtonClassName,
  prevButtonClassName,
  dotButtonClassName,
  dotsClassName,
}: SliderProps): ReactElement | null {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  if (!slides.length) {
    return null;
  }

  const sliderSize = slides.length;

  const nextSlide = () => {
    if (activeIndex === sliderSize - 1) {
      setActiveIndex(0);
    } else {
      setActiveIndex((state) => ++state);
    }
  };

  const prevSlide = () => {
    if (activeIndex === 0) {
      setActiveIndex(sliderSize - 1);
    } else {
      setActiveIndex((state) => --state);
    }
  };

  const containerClassNames = clsx(
    styles.slider,
    { [styles.grayscale]: hasGrayscale },
    containerClassName
  );
  const nextButtonClassNames = clsx(styles.nextButton, nextButtonClassName);
  const prevButtonClassNames = clsx(styles.prevButton, prevButtonClassName);
  const dotsClassNames = clsx(styles.dots, dotsClassName);

  return (
    <section className={containerClassNames}>
      {slides.map((slide, index) => (
        <SingleSlide
          key={slide.id}
          slide={slide}
          render={render}
          isActive={index === activeIndex}
        />
      ))}

      <button className={nextButtonClassNames} onClick={nextSlide}>
        <BiCaretRight aria-label='Następny slajd' />
      </button>

      <button className={prevButtonClassNames} onClick={prevSlide}>
        <BiCaretLeft aria-label='Poprzedni slajd' />
      </button>

      <div className={dotsClassNames}>
        {slides.map((slide, index) => (
          <SliderDot
            key={slide.id}
            index={index}
            isActive={index === activeIndex}
            className={dotButtonClassName}
            onClick={() => setActiveIndex(index)}
          />
        ))}
      </div>
    </section>
  );
}
