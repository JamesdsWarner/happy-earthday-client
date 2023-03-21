import DateInput from '@/components/shared/DateInput/DateInput.component';
import Button from '@/components/shared/Button/Button.component';
import * as Styled from './EnterBirthday.styles';

interface PropsFunction {
  // setBirthday: (item: any) => void;
  setIsBirthdaySubmitted: (item: any) => void;
  isBirthdaySubmitted: any;
}

const EnterBirthday: React.FC<PropsFunction> = ({
  // setBirthday,
  setIsBirthdaySubmitted,
  isBirthdaySubmitted,
}) => {
  const handleBirthdaySubmit = () => {
    setIsBirthdaySubmitted(true);
    console.log(isBirthdaySubmitted);
  };
  return (
    <Styled.EnterBirthdayWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.EnterBirthdayText>When's your birthday?</Styled.EnterBirthdayText>
      <DateInput white />
      <Styled.ButtonWrapper onClick={handleBirthdaySubmit}>
        <Button text="Submit" icon />
      </Styled.ButtonWrapper>
    </Styled.EnterBirthdayWrapper>
  );
};

export default EnterBirthday;
