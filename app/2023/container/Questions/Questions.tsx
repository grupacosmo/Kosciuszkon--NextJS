import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF } from 'react-icons/fa';
import { Collapsible, HexagonLink, Countdown } from '../../components';
import styles from './Questions.module.scss';

import { questionsData } from './data';

export function Questions(): ReactElement {
  return (
    <section className={styles.section}>
      <Countdown startDate='2023-10-22T11:00:00' endDate='2023-10-24T15:00:00' />

      <article className={styles.linksContainer}>
        <HexagonLink
          id='faq__form-label'
          label='Formularz rejestracyjny'
          arialLabel='faq__form-label'
          href='https://forms.office.com/r/9AH7VzkWa4'
          alt='Czarny sześciokąt z zielonym obramowaniem i ikoną formularza.'
          Icon={FaWpforms}
        />
        <HexagonLink
          id='faq__fb-evennt-label'
          label='Wydarzenie na Facebooku'
          arialLabel='faq__fb-evennt-label'
          href='https://www.facebook.com/events/545483540957513/'
          alt="Czarny sześciokąt z zielonym obramowaniem i ikoną Facebooka'a."
          Icon={FaFacebookF}
        />
      </article>

      <article className={styles.faqContainer}>
        {questionsData.map(({ id, title, text }) => (
          <Collapsible key={id} title={title} text={text} />
        ))}
      </article>
    </section>
  );
}
