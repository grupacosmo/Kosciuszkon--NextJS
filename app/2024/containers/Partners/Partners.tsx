import { type ReactElement } from 'react';
import clsx from 'clsx';
import { PartnersGrid } from './components/PartnersGrid';
import styles from './Partners.module.scss';
import './Partners.scss';

import {
  honoraryPartnersData,
  eventPartnersData,
  mediaPartnersData,
} from './data';

export function Partners(): ReactElement {
  return (
    <section className={styles.container}>
      <PartnersGrid
        partnerArray={honoraryPartnersData}
        categoryName='Patroni honorowi'
        containerClassName={clsx(styles.grid, styles.honoraryPartnersGrid)}
      />

      <PartnersGrid
        partnerArray={eventPartnersData}
        categoryName='Partnerzy wydarzenia'
        containerClassName={clsx(styles.grid, styles.eventPartnersGrid)}
      />

      <PartnersGrid
        partnerArray={mediaPartnersData}
        categoryName='Patroni medialni'
        containerClassName={clsx(styles.grid, styles.mediaPartnersGrid)}
      />
    </section>
  );
}
