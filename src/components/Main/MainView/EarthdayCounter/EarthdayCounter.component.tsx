import * as Styled from '../MainView.styles';
import EarthdayTimer from '@/components/shared/EarthdayTimer/EarthdayTimer.component';
import LineDivider from '@/components/shared/LineDivider/LineDivider.component';
import remainingDays from 'helpers/remainingDays';
import { useState } from 'react';

interface PropsFunction {
  birthday: Date;
  monthsBetween: Number;
  weeksBetween: Number;
  daysBetween: Number;
  timeBetween: Duration;
}

const EarthdayCounter: React.FC<PropsFunction> = ({
  monthsBetween,
  weeksBetween,
  daysBetween,
  timeBetween,
}) => {
  const [timerFormat, setTimerFormat] = useState('Days');

  const handleOptionClick = (event: any) => {
    // console.log(event);
    setTimerFormat(event.target.innerHTML);
  };

  //   console.log(monthsBetween);

  return (
    <Styled.ViewOptionWrapper>
      <Styled.MainHeader>Earthday Counter</Styled.MainHeader>
      <Styled.ViewOptionBodyWrapper>
        <EarthdayTimer
          timeBetween={timeBetween}
          daysBetween={daysBetween}
          weeksBetween={weeksBetween}
          monthsBetween={monthsBetween}
          isBirthdaySubmitted={true}
          timerType="base-reversed"
          timerOption={timerFormat}
        />
        <Styled.ViewOptionAfterTimer timerFormat={timerFormat}>
          <LineDivider />
          <Styled.TimerOptions>
            <Styled.TimerOption timerFormat={timerFormat} onClick={(e) => handleOptionClick(e)}>
              Days
            </Styled.TimerOption>
            <Styled.TimerOption timerFormat={timerFormat} onClick={(e) => handleOptionClick(e)}>
              Weeks
            </Styled.TimerOption>
            <Styled.TimerOption timerFormat={timerFormat} onClick={(e) => handleOptionClick(e)}>
              Months
            </Styled.TimerOption>
          </Styled.TimerOptions>
        </Styled.ViewOptionAfterTimer>
      </Styled.ViewOptionBodyWrapper>
    </Styled.ViewOptionWrapper>
  );
};

export default EarthdayCounter;
