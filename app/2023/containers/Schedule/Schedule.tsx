'use client';

import { type ReactElement, useState } from 'react';
import { BiCaretRight, BiCaretLeft } from 'react-icons/bi';
import { ScheduleTable } from '../../components';
import classes from './Schedule.module.scss';
import { scheduleData } from './data';

export function Schedule(): ReactElement {
  const [isHackathon, setIsHackathon] = useState<boolean>(true);

  return (
    <section className={classes.schedule}>
      <div className={classes.controls}>
        <button onClick={() => setIsHackathon((state) => !state)}>
          <BiCaretLeft
            className={classes.icon}
            aria-label='Zmień rodzaj harmonogramu'
          />
        </button>
        <h2>{isHackathon ? 'Hackathon' : 'Warsztaty'}</h2>
        <button onClick={() => setIsHackathon((state) => !state)}>
          <BiCaretRight
            className={classes.icon}
            aria-label='Zmień rodzaj harmonogramu'
          />
        </button>
      </div>
      {isHackathon ? (
        <ScheduleTable
          firstTitle='Niedziela'
          firstArray={scheduleData.hackathon.sunday}
          secondTitle='Poniedziałek'
          secondArray={scheduleData.hackathon.monday}
        />
      ) : (
        <ScheduleTable
          firstTitle='Niedziela'
          firstArray={scheduleData.workshop.sunday}
          secondTitle='Poniedziałek'
          secondArray={scheduleData.workshop.monday}
        />
      )}
    </section>
  );
}
