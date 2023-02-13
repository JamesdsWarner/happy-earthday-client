import * as Styled from './Introduction.styles';
import EnterBirthday from '../EnterBirthday/EnterBirthday.component';
import EarthdayStat from '../EarthdayStat/EarthdayStat.component';
import { useState } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
// import { Duration } from 'date-fns';

const Introduction = () => {
  const [birthday, setBirthday] = useState<Date>();
  const [timeBetween, setTimeBetween] = useState<Duration>({});
  const [daysBetween, setDaysBetween] = useState<Number>(0);
  const [isBirthdaySubmitted, setIsBirthdaySubmitted] = useState<boolean>(false);

  // console.log(timeBetween);

  if (isBirthdaySubmitted) {
    const remaining = () => {
      const now = new Date();
      const end = new Date(birthday!);
      const newTimeBetween = intervalToDuration({
        start: now,
        end: end,
      });
      setTimeBetween(newTimeBetween);

      const newDaysBetween = differenceInCalendarDays(now, end);

      setDaysBetween(newDaysBetween);
    };

    setInterval(remaining, 1000);
  }

  return (
    <Styled.IntroductionWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <EnterBirthday setIsBirthdaySubmitted={setIsBirthdaySubmitted} setBirthday={setBirthday} />
      <EarthdayStat
        isBirthdaySubmitted={isBirthdaySubmitted}
        timeBetween={timeBetween}
        daysBetween={daysBetween}
      />
    </Styled.IntroductionWrapper>
  );
};

export default Introduction;
