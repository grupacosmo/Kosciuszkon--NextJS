'use client';

import { useState, type ReactElement, type ReactNode } from 'react';
import clsx from 'clsx';
import { BiCaretRight } from 'react-icons/bi';
import styles from './Collapsible.module.scss';

type CollapsibleProps = {
  label: string;
  children: ReactNode;
  containerClassName?: string;
  buttonClassName?: string;
  contentClassName?: string;
};

export function Collapsible({
    label,
  children,
  containerClassName,
  buttonClassName,
  contentClassName,
}: CollapsibleProps): ReactElement {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const containerClassNames = clsx(styles.container, containerClassName);
  const buttonClassNames = clsx(styles.button, buttonClassName);
  const contentClassNames = clsx(styles.content, contentClassName);

  return (
    <div className={containerClassNames}>
      <button
        type='button'
        className={buttonClassNames}
        onClick={() => setIsOpen((state) => !state)}
      >
        <BiCaretRight className={clsx({ [styles.iconDown]: isOpen })} />
        <h4>{label}</h4>
      </button>
      {isOpen && <div className={contentClassNames}>{children}</div>}
    </div>
  );
}
