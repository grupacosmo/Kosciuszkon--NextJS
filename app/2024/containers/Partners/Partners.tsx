import { type ReactElement } from 'react';
import clsx from 'clsx';
import { PartnersGrid } from './components/PartnersGrid';
import styles from './Partners.module.scss';

import {
  honoraryPartnerData,
  goldPartnerData,
  silverPartnerData,
  eventPartnerData,
  mediaPartnerDataOne,
  mediaPartnerDataTwo,
} from './data';

export function Partners(): ReactElement {
  return (
    <section className={styles.container}>
      <PartnersGrid
        partnerArray={honoraryPartnerData}
        categoryName='Patroni honorowi'
        containerClassName={clsx(styles.grid, styles.honoraryPartnerGrid)}
      />
      {/* <PartnersGrid
        partnerArray={goldPartnerData}
        categoryName='Złoty partner'
        containerClassName={clsx(styles.grid, styles.goldPartnerGrid)}
      />
      <PartnersGrid
        partnerArray={silverPartnerData}
        categoryName='Srebrni partnerzy'
        containerClassName={clsx(styles.grid, styles.silverPartnerGrid)}
      />
      <PartnersGrid
        partnerArray={eventPartnerData}
        categoryName='Partnerzy wydarzenia'
        containerClassName={clsx(styles.grid, styles.eventPartnerGrid)}
      />
      <PartnersGrid
        partnerArray={mediaPartnerDataOne}
        categoryName='Patroni medialni'
        containerClassName={clsx(styles.grid, styles.mediaPartnerGridOne)}
      />
      <PartnersGrid
        partnerArray={mediaPartnerDataTwo}
        categoryName=''
        containerClassName={clsx(styles.grid, styles.mediaPartnerGridTwo)}
      /> */}
    </section>
  );
}
