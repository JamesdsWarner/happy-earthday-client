import * as Styled from './EarthdayStat.styles';

interface PropsFunction {
  timeBetween: any;
  daysBetween: any;
  isBirthdaySubmitted: any;
}

const EarthdayStat: React.FC<PropsFunction> = ({
  timeBetween,
  daysBetween,
  isBirthdaySubmitted,
}) => {
  console.log(timeBetween);
  return (
    <Styled.EarthdayStatWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.EarthdayStatDay>{daysBetween} days</Styled.EarthdayStatDay>
      <Styled.EarthdayStatHours>
        {timeBetween.hours} hours, {timeBetween.minutes} minutes and {timeBetween.seconds} seconds.
      </Styled.EarthdayStatHours>
    </Styled.EarthdayStatWrapper>
  );
};

export default EarthdayStat;
