import { type ReactElement } from 'react';
import Image from 'next/image';
import { type IconType } from 'react-icons';
import clsx from 'clsx';
import styles from './HexagonLink.module.scss';

import hex from '../../assets/svg/hex.svg';

type HexagonLinkProps = {
  id: string;
  label: string;
  arialLabel: string;
  href: string;
  alt: string;
  Icon: IconType;
  className?: string;
};

export function HexagonLink({
  id,
  label,
  arialLabel,
  href,
  alt,
  Icon,
  className,
}: HexagonLinkProps): ReactElement {
  const containerClassNames = clsx(styles.container, className);

  return (
    <div className={containerClassNames}>
      <h3 id={id}>{label}</h3>
      <a
        className={styles.link}
        href={href}
        aria-labelledby={arialLabel}
        target='_blank'
        rel='noreferrer'
      >
        <Icon />
        <Image src={hex} alt={alt} width={96} height={96} />
      </a>
    </div>
  );
}
