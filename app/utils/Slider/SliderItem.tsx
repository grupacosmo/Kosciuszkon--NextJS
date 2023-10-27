import { type ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './SliderItem.module.scss';

type Slide = {
  id: string;
  src: StaticImageData;
  alt: string;
};

export type Item = {
  slide: Slide;
  content: any;
};

type SlideItem = {
  item: Item;
  render: (content: any) => ReactElement | null;
  isActive: boolean;
};

export function SliderItem({
  item: { slide, content },
  render,
  isActive,
}: SlideItem): ReactElement | null {
  if (!isActive) {
    return null;
  }

  return (
    <article className={styles.slide}>
      <picture>
        <Image src={slide.src} alt={slide.alt} />
      </picture>
      {render(content)}
    </article>
  );
}
