import * as Styled from './Introduction.styles';
import ParticlesBackground from '../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';
import Header from '../shared/Header/Header.component';
import EnterBirthday from '../EnterBirthday/EnterBirthday.component';
import EarthdayStat from '../EarthdayStat/EarthdayStat.component';
import HomeCTA from '../HomeCTA/HomeCTA.component';
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
      <ParticlesBackground data={data} id="tsparticles-stars" />
      <Header />
      <Styled.GetEarthdayText>Get your Earthday.</Styled.GetEarthdayText>
      <EnterBirthday
        isBirthdaySubmitted={isBirthdaySubmitted}
        setIsBirthdaySubmitted={setIsBirthdaySubmitted}
        setBirthday={setBirthday}
      />
      <EarthdayStat
        isBirthdaySubmitted={isBirthdaySubmitted}
        timeBetween={timeBetween}
        daysBetween={daysBetween}
      />
      <HomeCTA isBirthdaySubmitted={isBirthdaySubmitted} />
    </Styled.IntroductionWrapper>
  );
};

export default Introduction;
