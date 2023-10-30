'use client';

import { useState, type ReactElement } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { BiMenu } from 'react-icons/bi';
import { MenuItem } from './components/MenuItem';
import { localLinks } from './data';
import styles from './Header.module.scss';
import style from './components/MenuItem.module.scss';

export function Header(): ReactElement {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const mobileMenuClassNames = clsx(styles.mobileNav, {
    [styles.menuOpen]: isMenuOpen,
  });

  return (
    <header className={styles.section}>
      <nav className={styles.nav}>
        <ul className={styles.navList}>
          {localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <Link className={style.link} href='/2023'>
            I Edycja
          </Link>
        </ul>

        <button
          className={styles.navButton}
          onClick={() => {
            setIsMenuOpen((state) => !state);
          }}
        >
          <BiMenu aria-label='Menu' />
        </button>
      </nav>

      <nav className={mobileMenuClassNames}>
        <ul className={styles.mobileNavList}>
          {localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <Link className={style.link} href='/2023'>
            I Edycja
          </Link>
        </ul>
      </nav>
    </header>
  );
}
