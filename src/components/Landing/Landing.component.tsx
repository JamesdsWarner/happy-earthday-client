import * as Styled from './Landing.styles';
import ParticlesBackground from '../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';
import Header from '../shared/Header/Header.component';
import EnterBirthday from './EnterBirthday/EnterBirthday.component';
// import EarthdayStat from './EarthdayStat/EarthdayStat.component';
import HomeCTA from './HomeCTA/HomeCTA.component';
import EarthdayTimer from '../shared/EarthdayTimer/EarthdayTimer.component';
import { useState } from 'react';
import intervalToDuration from 'date-fns/intervalToDuration';
import differenceInCalendarDays from 'date-fns/differenceInCalendarDays';
import remainingDays from 'helpers/remainingDays';

const Landing = () => {
  const [birthday, setBirthday] = useState<Date>();
  const [timeBetween, setTimeBetween] = useState<Duration>({});
  const [daysBetween, setDaysBetween] = useState<Number>(0);
  const [isBirthdaySubmitted, setIsBirthdaySubmitted] = useState<boolean>(false);

  // console.log(daysBetween);

  if (isBirthdaySubmitted) {
    setInterval(() => remainingDays({ birthday, setTimeBetween, setDaysBetween }), 1000);
  }

  return (
    <Styled.LandingWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <ParticlesBackground data={data} id="tsparticles-stars" />
      <Header />
      <Styled.GetEarthdayText>Get your Earthday.</Styled.GetEarthdayText>
      <EnterBirthday
        isBirthdaySubmitted={isBirthdaySubmitted}
        setIsBirthdaySubmitted={setIsBirthdaySubmitted}
        setBirthday={setBirthday}
      />

      <EarthdayTimer
        isBirthdaySubmitted={isBirthdaySubmitted}
        timeBetween={timeBetween}
        daysBetween={daysBetween}
        timerOption="Days"
      />
      <HomeCTA isBirthdaySubmitted={isBirthdaySubmitted} />
    </Styled.LandingWrapper>
  );
};

export default Landing;
