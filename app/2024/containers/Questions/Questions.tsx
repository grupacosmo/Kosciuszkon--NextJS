import { type ReactElement } from 'react';
import { FaWpforms, FaFacebookF } from 'react-icons/fa';
import { Collapsible } from '@/app/utils';
import { HexagonLink } from './components/HexagonLink';
import { Countdown } from './components/Countdown';
import { questionsData } from './data';
import styles from './Questions.module.scss';



export function Questions(): ReactElement {
  return (
    <section className={styles.section}>
      <Countdown
        startDate='2024-03-05T11:00:00'
        endDate='2024-03-06T15:00:00'
      />

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
