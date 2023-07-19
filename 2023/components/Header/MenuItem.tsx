import classes from './MenuItem.module.scss'

interface MenuItemProps {
  handleClick: () => void;
}

function MenuItems({ handleClick }: MenuItemProps) {
  return (
    <>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#o wydarzeniu'>
          O wydarzeniu
        </a>
      </li>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#tematy'>
          Tematy turnieju
        </a>
      </li>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#harmonogram'>
          Harmonogram
        </a>
      </li>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#zapisy'>
          Zapisy
        </a>
      </li>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#partnerzy'>
          Partnerzy
        </a>
      </li>
      <li>
        <a className={classes['header__navigation-link']} onClick={handleClick} href='#kontakt'>
          Kontakt
        </a>
      </li>
    </>
  );
}

export default MenuItems;
