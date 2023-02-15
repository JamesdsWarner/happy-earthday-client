import { useState } from 'react';
import { intervalToDuration } from 'date-fns';

import * as Styled from './EnterBirthday.styles';

interface PropsFunction {
  setBirthday: (item: any) => void;
  setIsBirthdaySubmitted: (item: any) => void;
  isBirthdaySubmitted: any;
}

const EnterBirthday: React.FC<PropsFunction> = ({
  setBirthday,
  setIsBirthdaySubmitted,
  isBirthdaySubmitted,
}) => {
  const handleBirthdayChange = (event: any) => {
    setBirthday(event.target.value);
    console.log(event.target.value);
  };

  const handleBirthdaySubmit = () => {
    setIsBirthdaySubmitted(true);
  };
  return (
    <Styled.EnterBirthdayWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.EnterBirthdayText>When's your birthday?</Styled.EnterBirthdayText>
      <Styled.EnterBirthdayInput
        onChange={(event) => handleBirthdayChange(event)}
        type="date"
      ></Styled.EnterBirthdayInput>
      <Styled.SubmitBirthday onClick={handleBirthdaySubmit}>Submit</Styled.SubmitBirthday>
    </Styled.EnterBirthdayWrapper>
  );
};

export default EnterBirthday;
