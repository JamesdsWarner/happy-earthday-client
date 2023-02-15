import * as Styled from './MainView.styles';
import EarthdayCounter from './EarthdayCounter/EarthdayCounter.component';
import Milestones from './Milestones/Milestones.component';
import { useState } from 'react';
import remainingDays from 'helpers/remainingDays';

const MainView = () => {
  const [birthday, setBirthday] = useState<Date>(new Date('1997-05-15'));
  const [timeBetween, setTimeBetween] = useState<Duration>({});
  const [daysBetween, setDaysBetween] = useState<Number>(0);
  const [weeksBetween, setWeeksBetween] = useState<Number>(0);
  const [monthsBetween, setMonthsBetween] = useState<Number>(0);

  setInterval(
    () =>
      remainingDays({
        birthday,
        setTimeBetween,
        setDaysBetween,
        setWeeksBetween,
        setMonthsBetween,
      }),
    1000
  );
  return (
    <Styled.MainViewWrapper>
      {/* <EarthdayCounter
        monthsBetween={monthsBetween}
        weeksBetween={weeksBetween}
        daysBetween={daysBetween}
        timeBetween={timeBetween}
        birthday={birthday}
      /> */}
      <Milestones birthday={birthday} />
    </Styled.MainViewWrapper>
  );
};

export default MainView;
