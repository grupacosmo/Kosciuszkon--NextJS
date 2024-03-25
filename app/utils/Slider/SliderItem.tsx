import { type ReactElement } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './SliderItem.module.scss';

const MOTION_CONFIG = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 0.4, ease: 'easeOut' },
};

type SlideImage = {
  src: string;
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
    <>
      {isActive && (
        <AnimatePresence>
          <motion.article {...MOTION_CONFIG} className={styles.slide}>
            {image && (
              <picture className={styles.slidePicture}>
                <img
                  className={styles.slideImg}
                  src={image.src}
                  alt={image.alt}
                />
              </picture>
            )}
            {render(content)}
          </motion.article>
        </AnimatePresence>
      )}
    </>
  );
}
