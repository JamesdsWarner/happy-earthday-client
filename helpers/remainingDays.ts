import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import differenceInCalendarWeeks from 'date-fns/differenceInCalendarWeeks';
import differenceInCalendarMonths from 'date-fns/differenceInCalendarMonths';
import React from 'react';

interface TimeBetween {
  birthday: any;
  setTimeBetween: any;
  setDaysBetween: any;
  setWeeksBetween?: any;
  setMonthsBetween?: any;
}

const remainingDays = ({
  birthday,
  setTimeBetween,
  setDaysBetween,
  setWeeksBetween,
  setMonthsBetween,
}: TimeBetween) => {
  const now = new Date();
  const end = new Date(birthday!);
  const newTimeBetween = intervalToDuration({
    start: now,
    end: end,
  });
  setTimeBetween(newTimeBetween);

  const newDaysBetween = differenceInCalendarDays(now, end);
  const newWeeksBetween = differenceInCalendarWeeks(now, end);
  const newMonthsBetween = differenceInCalendarMonths(now, end);

  setDaysBetween(newDaysBetween);
  if (setWeeksBetween) {
    setWeeksBetween(newWeeksBetween);
    setMonthsBetween(newMonthsBetween);
  }
};

export default remainingDays;
