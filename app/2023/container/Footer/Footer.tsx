'use client';

import { type ReactElement, useState } from 'react';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { FaLocationDot } from 'react-icons/fa6';
import { FooterLinks } from '../../components';
import styles from './Footer.module.scss';

import { visitUsLinks, externalLinks, externalLinksWithIcons } from './data';

export function Footer(): ReactElement {
  const [isMapOpen, setIsMapOpen] = useState<boolean>(false);
  return (
    <footer>
      <div className={styles['footer']} id='kontakt'>
        <div className={styles['footer__grid']}>
          <div className={styles['footer__visit-us']}>
            <h5>Odwiedź nas</h5>
            <FooterLinks imageLinks={visitUsLinks} />
          </div>
          <div className={styles['footer__contact']}>
            <h5>Kontakt</h5>
            <ul>
              <li>
                <FaEnvelope />
                hackathon.pk.2022@gmail.com
              </li>
              <li>
                <FaPhoneAlt />
                +48 789-123-125
              </li>
              <li>
                <FaPhoneAlt />
                +48 795-773-929
              </li>
            </ul>
            <span></span>
            <button type='button' onClick={() => setIsMapOpen(true)}>
              <FaLocationDot />
            </button>
          </div>
          <div className={styles['footer__links']}>
            <h5>Linki zewnętrzne</h5>
            <div>
              <div>
                <ul>
                  <FooterLinks baseLinks={externalLinks} />
                </ul>
              </div>
              <div>
                <ul>
                  <FooterLinks iconLinks={externalLinksWithIcons} />
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className={styles['footer__background']}></div>
      </div>
      <div className={styles['copyright']}>
        Copyright © Wszelkie prawa zastrzeżone
      </div>
      {/* <MapPortal isOpen={isMapOpen} setIsOpen={setIsMapOpen} /> */}
    </footer>
  );
}
