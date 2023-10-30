'use client';

import { type ReactElement } from 'react';
import styles from './MenuItem.module.scss';

type MenuItemProps = {
  href: string;
  label: string;
  onClick: () => void;
};

export function MenuItem({
  href,
  label,
  onClick,
}: MenuItemProps): ReactElement {
  return (
    <>
      <li>
        <a className={styles.link} onClick={onClick} href={href}>
          {label}
        </a>
      </li>
    </>
  );
}
