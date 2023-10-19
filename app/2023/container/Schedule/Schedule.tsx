'use client';

import { useState } from 'react';
import { Icon } from '@iconify/react';
import { scheduleData } from './data';
import classes from './Schedule.module.scss';

type Schedule = {
  title: string;
  time: string;
  description: string;
};

const ScheduleElement = ({ title, time, description }: Schedule) => {
  return (
    <div className={classes['schedule__element']}>
      <div>{title}</div>
      <div>{time}</div>
      <div>{description}</div>
    </div>
  );
};

export function Schedule() {
  const [scheduleType, setScheduleType] = useState('hackathon');

  const handleScheduleTypeChange = () => {
    if (scheduleType === 'hackathon') {
      setScheduleType('workshop');
    } else {
      setScheduleType('hackathon');
    }
  };

  return (
    <div  className={classes['schedule']}>
      <div className={classes['schedule__controls']}>
        <div onClick={handleScheduleTypeChange}>
          <Icon icon='material-symbols:arrow-left-sharp' />
        </div>
        <div>{scheduleType === 'hackathon' ? 'Hackathon' : 'Warsztaty'}</div>
        <div onClick={handleScheduleTypeChange}>
          <Icon icon='material-symbols:arrow-right-sharp' />
        </div>
      </div>
      <div className={classes['schedule__schedule']}>
        <div>
          <div>Niedziela</div>
          <div>
            {scheduleType === 'hackathon'
              ? scheduleData.hackathon.sunday.map(({ id, ...restProps }) => (
                  <ScheduleElement key={id} {...restProps} />
                ))
              : scheduleData.workshop.sunday.map(({ id, ...restProps }) => (
                  <ScheduleElement key={id} {...restProps} />
                ))}
          </div>
        </div>
        <div>
          <div>Poniedziałek</div>
          <div>
            {scheduleType === 'hackathon'
              ? scheduleData.hackathon.monday.map(({ id, ...restProps }) => (
                  <ScheduleElement key={id} {...restProps} />
                ))
              : scheduleData.workshop.monday.map(({ id, ...restProps }) => (
                  <ScheduleElement key={id} {...restProps} />
                ))}
          </div>
        </div>
      </div>
    </div>
  );
}
