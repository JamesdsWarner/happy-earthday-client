import * as Styled from './MainView.styles';
import EarthdayCounter from './EarthdayCounter/EarthdayCounter.component';
import Milestones from './Milestones/Milestones.component';
import FriendsEarthdays from './FriendsEarthdays/FriendsEarthdays.component';
import { useState } from 'react';
import remainingDays from 'helpers/remainingDays';

interface PropsFunction {
  chosenView: any;
}

const MainView: React.FC<PropsFunction> = ({ chosenView }) => {
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
      {chosenView === 'Counter' && (
        <EarthdayCounter
          monthsBetween={monthsBetween}
          weeksBetween={weeksBetween}
          daysBetween={daysBetween}
          timeBetween={timeBetween}
          birthday={birthday}
        />
      )}

      {chosenView === 'Milestones' && <Milestones birthday={birthday} />}

      {chosenView === 'Friends' && <FriendsEarthdays />}
    </Styled.MainViewWrapper>
  );
};

export default MainView;
