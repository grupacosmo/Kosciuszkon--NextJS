'use client';

import { useState, type ReactElement } from 'react';
import clsx from 'clsx';
import classes from './Collapsible.module.scss';

import { BsFillCaretRightFill } from 'react-icons/bs';

type CollapsibleProps = {
  title: string;
  text: string;
};

export function Collapsible({ title, text }: CollapsibleProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const iconClassNames = clsx(classes.icon, { [classes['iconDown']]: isOpen });
  return (
    <div className={classes.container}>
      <button
        type='button'
        className={classes.button}
        onClick={() => setIsOpen((state) => !state)}
      >
        <BsFillCaretRightFill className={iconClassNames} />
        <h3>{title}</h3>
      </button>
      {isOpen && (
        <div className={classes.content}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
