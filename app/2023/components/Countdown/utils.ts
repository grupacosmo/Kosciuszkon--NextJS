export const calcStartTime = (startDate: string): number => {
  const nowInSec = new Date().getTime() / 1000;
  const startTimeInSec = new Date(startDate).getTime() / 1000;
  return startTimeInSec - nowInSec;
};

export const calcEndTime = (endDate: string): number => {
  const nowInSec = new Date().getTime() / 1000;
  const endTimeInSec = new Date(endDate).getTime() / 1000;
  return endTimeInSec - nowInSec;
};

export const padZero = (number: number): string => {
  return number.toString().padStart(2, '0');
};
