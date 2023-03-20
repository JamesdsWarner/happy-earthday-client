import * as Styled from './MainView.styles';
import EarthdayCounter from './EarthdayCounter/EarthdayCounter.component';
import Milestones from './Milestones/Milestones.component';
import FriendsEarthdays from './FriendsEarthdays/FriendsEarthdays.component';
import { useState } from 'react';
import remainingDays from 'helpers/remainingDays';
import axios from 'axios';

interface PropsFunction {
  chosenView: any;
  user: any;
}

const MainView: React.FC<PropsFunction> = ({ chosenView, user }) => {
  // const [birthday, setBirthday] = useState<Date>(new Date('1997-05-15'));
  const [timeBetween, setTimeBetween] = useState<Duration>({});
  const [daysBetween, setDaysBetween] = useState<Number>(0);
  const [weeksBetween, setWeeksBetween] = useState<Number>(0);
  const [monthsBetween, setMonthsBetween] = useState<Number>(0);

  // const { birthday, first_name } = user;

  const birthday = new Date(user.birthday);

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

  // console.log(user.birthday);
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
