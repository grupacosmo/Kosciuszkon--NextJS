'use client';

import { type ReactElement, useState } from 'react';
import { FaLocationDot } from 'react-icons/fa6';
import { FooterLinks, FooterContacts } from '../../components';
import styles from './Footer.module.scss';

import {
  visitUsLinks,
  externalLinks,
  externalLinksWithIcons,
  contacts,
} from './data';

export function Footer(): ReactElement {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  return (
    <footer className={styles.footer} id='kontakt'>
      <section className={styles.footerContainer}>
        <article className={styles.visit}>
          <h3>Odwiedź nas</h3>
          <FooterLinks
            imageLinks={visitUsLinks}
            className={styles.visitItem}
            containerClassName={styles.visitList}
          />
        </article>

        <article className={styles.contact}>
          <h3>Kontakt</h3>
          <FooterContacts
            contactArray={contacts}
            className={styles.contactItem}
            containerClassName={styles.contactList}
          />
          <button
            className={styles.contactButton}
            type='button'
            onClick={() => setIsMapOpen(true)}
          >
            <FaLocationDot /> Pokaż Mapę
          </button>
        </article>

        <article className={styles.links}>
          <h3>Linki zewnętrzne</h3>
          <div className={styles.linksContainer}>
            <FooterLinks baseLinks={externalLinks} />
            <FooterLinks iconLinks={externalLinksWithIcons} />
          </div>
        </article>

        <div className={styles.footerBackground} />
      </section>
      <section className={styles.copyright}>
        <p> Copyright © Wszelkie prawa zastrzeżone</p>
      </section>

      {/* <MapPortal isOpen={isMapOpen} setIsOpen={setIsMapOpen} /> */}
    </footer>
  );
}
