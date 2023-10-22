'use client';

import { useState, type ReactElement } from 'react';
import clsx from 'clsx';
import { BsFillCaretRightFill } from 'react-icons/bs';
import styles from './Collapsible.module.scss';

type CollapsibleProps = {
  title: string;
  text: string;
};

export function Collapsible({ title, text }: CollapsibleProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const iconClassNames = clsx(styles.icon, { [styles.iconDown]: isOpen });
  return (
    <div className={styles.container}>
      <button
        type='button'
        className={styles.button}
        onClick={() => setIsOpen((state) => !state)}
      >
        <BsFillCaretRightFill className={iconClassNames} />
        <h3>{title}</h3>
      </button>
      {isOpen && (
        <div className={styles.content}>
          <p>{text}</p>
        </div>
      )}
    </div>
  );
}
