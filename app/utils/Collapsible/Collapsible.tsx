'use client';

import { useState, type ReactElement, type ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { BiCaretRight } from 'react-icons/bi';
import styles from './Collapsible.module.scss';

const MOTION_CONFIG = {
  initial: { y: '-30px' },
  animate: { y: 0 },
  exit: { y: '-30px' },
  transition: { duration: 0.3, ease: 'easeOut' },
};

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
      {isOpen && (
        <AnimatePresence>
          <motion.div {...MOTION_CONFIG} className={contentClassNames}>
            {children}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}
