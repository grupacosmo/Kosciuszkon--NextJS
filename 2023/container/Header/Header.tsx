'use client';

import { useState } from 'react';

import { MenuItems } from '../../components';

import classes from './header.module.scss';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(false);
  };



  return (
    <div className={classes['header__wrapper']}>
      <nav className={classes['header']}>
        <ul className={classes['header__menu--desktop']}>
          <MenuItems handleClick={handleClick} />
        </ul>
        <span
          className={classes['header__menu--mobile']}
          onClick={() => {
            setIsMenuOpen((prev) => !prev);
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='1.6rem'
            height='1.6rem'
            preserveAspectRatio='xMidYMid meet'
            viewBox='0 0 512 512'
          >
            <path
              fill='white'
              d='M32 96v64h448V96H32zm0 128v64h448v-64H32zm0 128v64h448v-64H32z'
            />
          </svg>
        </span>
      </nav>
      <nav
        className={
          classes['header__hamburger-menu'] +
          ` ${isMenuOpen && classes['open']}`
        }
      >
        <ul>
          <MenuItems handleClick={handleClick} />
        </ul>
      </nav>
    </div>
  );
};

export default Header;
