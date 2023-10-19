import { type ReactElement } from 'react';

import Countdown from 'react-countdown';
import { Collapsible } from '../../components';
import classes from './Questions.module.scss';

import { questionsData } from './data';

type Question = {
  id: number;
  title: string;
  text: string;
};

export function Questions(): ReactElement {
  return (
    <div className={classes.questionsContainer}>
      {questionsData.map(({ id, title, text }) => (
        <Collapsible key={id} title={title} text={text} />
      ))}
    </div>
  );
}
