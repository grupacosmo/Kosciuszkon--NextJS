'use client';

import { useState, type ReactElement, useEffect } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { BiMenu, BiX } from 'react-icons/bi';
import { MenuItem } from './components/MenuItem';
import { localLinks } from './data';
import styles from './Header.module.scss';

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
          <Link className={styles.link} href='/2023'>
            I Edycja
          </Link>
        </ul>

        <button
          className={clsx(styles.navButton, {
            [styles.mobileNavButton]: isMenuOpen,
          })}
          onClick={() => {
            setIsMenuOpen((state) => !state);
          }}
        >
          {isMenuOpen ? (
            <BiX aria-label='Menu' />
          ) : (
            <BiMenu aria-label='Menu' />
          )}
        </button>
      </nav>

      <nav className={mobileMenuClassNames}>
        <ul className={styles.mobileNavList}>
          {localLinks.map((link) => (
            <MenuItem key={link.id} onClick={closeMenu} {...link} />
          ))}
          <Link className={styles.link} href='/2023'>
            I Edycja
          </Link>
        </ul>
      </nav>
    </header>
  );
}
