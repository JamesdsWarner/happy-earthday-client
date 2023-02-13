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
      <Styled.EarthdayStatHours>{timeBetween.hours} hours</Styled.EarthdayStatHours>
      <Styled.EarthdayStatMinutes>{timeBetween.minutes} minutes</Styled.EarthdayStatMinutes>
      <Styled.EarthdayStatSeconds>{timeBetween.seconds} seconds</Styled.EarthdayStatSeconds>
    </Styled.EarthdayStatWrapper>
  );
};

export default EarthdayStat;
