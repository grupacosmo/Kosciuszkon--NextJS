import { type ReactElement } from 'react';
import Image, { StaticImageData } from 'next/image';
import styles from './SliderItem.module.scss';

type SlideImage = {
  src: StaticImageData;
  alt: string;
};

export type SlideData = {
  id: string;
  image?: SlideImage;
  content: any;
};

type SingleSlideProps = {
  slide: SlideData;
  render: (content: any) => ReactElement | null;
  isActive: boolean;
};

export function SingleSlide({
  slide: { image, content },
  render,
  isActive,
}: SingleSlideProps): ReactElement | null {
  if (!isActive) {
    return null;
  }

  return (
    <article className={styles.slide}>
      {image && (
        <picture className={styles.slidePicture}>
          <Image className={styles.slideImg} src={image.src} alt={image.alt} />
        </picture>
      )}
      {render(content)}
    </article>
  );
}
