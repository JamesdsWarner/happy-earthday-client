import * as Styled from './EarthdayTimer.styles';

interface PropsFunction {
  timeBetween: any;
  daysBetween: any;
  weeksBetween?: any;
  monthsBetween?: any;
  isBirthdaySubmitted: any;
  timerType?: any;
  timerOption: any;
}

export const TIMER_TYPE_CLASSES = {
  base: 'base',
  baseReversed: 'base-reversed',
};

const getTimer = (timerType = TIMER_TYPE_CLASSES.base) =>
  ({
    [TIMER_TYPE_CLASSES.base]: Styled.BaseEarthdayTimerWrapper,
    [TIMER_TYPE_CLASSES.baseReversed]: Styled.BaseReversed,
  }[timerType]);

const EarthdayTimer: React.FC<PropsFunction> = ({
  timeBetween,
  daysBetween,
  isBirthdaySubmitted,
  timerType,
  timerOption,
  weeksBetween,
  monthsBetween,
}) => {
  const CustomTimer = getTimer(timerType);

  //   console.log(timeBetween);
  return (
    <CustomTimer isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.EarthdayTimerDay>
        {(timerOption === 'Days' && daysBetween + ' days') ||
          (timerOption === 'Weeks' && weeksBetween + ' weeks') ||
          (timerOption === 'Months' && monthsBetween + ' months')}
      </Styled.EarthdayTimerDay>
      <Styled.EarthdayTimerWeeksMonths>
        {timerOption === 'Months' && weeksBetween + ' weeks, ' + daysBetween + ' days, '}
        {timerOption === 'Weeks' && daysBetween + ' days, '}
      </Styled.EarthdayTimerWeeksMonths>
      <Styled.EarthdayTimerHours>
        {timeBetween.hours} hours, {timeBetween.minutes} minutes and {timeBetween.seconds} seconds.
      </Styled.EarthdayTimerHours>
    </CustomTimer>
  );
};

export default EarthdayTimer;
