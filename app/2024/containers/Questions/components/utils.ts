export function calcStartTime(startDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const startTimeInSec = new Date(startDate).getTime() / 1000;
  return startTimeInSec - nowInSec;
}

export function calcEndTime(endDate: string): number {
  const nowInSec = new Date().getTime() / 1000;
  const endTimeInSec = new Date(endDate).getTime() / 1000;
  return endTimeInSec - nowInSec;
}

export function calcProps(startTime: number, endTime: number) {
  let time: null | number = null;
  let header = 'Wydarzenie zakończone';

  if (startTime > 0) {
    return { time: startTime, header: 'Start wydarzenia' };
  }

  if (startTime < 0 && endTime > 0) {
    return { time: endTime, header: 'Koniec wydarzenia za' };
  }

  return { time, header };
}
