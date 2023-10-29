import { type ReactElement } from 'react';
import { BiSolidCircle } from 'react-icons/bi';
import clsx from 'clsx';
import styles from './SliderDot.module.scss';

type SliderDotProps = {
  index: number;
  isActive: boolean;
  onClick: () => void;
  className?: string;
};
export function SliderDot({
  index,
  isActive,
  className,
  onClick,
}: SliderDotProps): ReactElement {
  const buttonClassNames = clsx(styles.button, className, {
    [styles.active]: isActive,
  });
  return (
    <button className={buttonClassNames} onClick={onClick}>
      <BiSolidCircle aria-label={`Zmień na slajd numer ${index}`} />
    </button>
  );
}
