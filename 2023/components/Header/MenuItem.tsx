interface MenuItemProps {
  handleClick: () => void;
}

function MenuItems({ handleClick }: MenuItemProps) {
  return (
    <>
      <li>
        <a onClick={handleClick} href='#o wydarzeniu'>
          O wydarzeniu
        </a>
      </li>
      <li>
        <a onClick={handleClick} href='#tematy'>
          Tematy turnieju
        </a>
      </li>
      <li>
        <a onClick={handleClick} href='#harmonogram'>
          Harmonogram
        </a>
      </li>
      <li>
        <a onClick={handleClick} href='#zapisy'>
          Zapisy
        </a>
      </li>
      <li>
        <a onClick={handleClick} href='#partnerzy'>
          Partnerzy
        </a>
      </li>
      <li>
        <a onClick={handleClick} href='#kontakt'>
          Kontakt
        </a>
      </li>
    </>
  );
}

export default MenuItems;
