import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF } from 'react-icons/fa';
import { Collapsible } from '@/app/utils';

import { HexagonLink } from './components/HexagonLink';
import { Countdown } from './components/Countdown';
import { calcEndTime } from './components/utils';
import { questionsData } from './data';

import styles from './Questions.module.scss';

const START_DATE = '2024-07-08T12:00:00';
const END_DATE = '2024-07-09T22:00:00';

export function Questions(): ReactElement {
  const disableCountdown = calcEndTime(END_DATE) < 0;

  return (
    <section className={styles.section}>
      <Countdown
        startDate={START_DATE}
        endDate={END_DATE}
        disabled={disableCountdown}
      />

      <article className={styles.linksContainer}>
        <HexagonLink
          id='faq__form-label'
          label='Formularz rejestracyjny'
          arialLabel='faq__form-label'
          href='https://forms.office.com/r/9AH7VzkWa4'
          alt='Czarny sześciokąt z zielonym obramowaniem i ikoną formularza.'
          Icon={FaWpforms}
          disabled
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
          <Collapsible
            key={id}
            label={title}
            buttonClassName={styles.faqCollapsibleButton}
          >
            <p>{text}</p>
          </Collapsible>
        ))}
      </article>
    </section>
  );
}
