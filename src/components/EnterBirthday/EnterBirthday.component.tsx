import { useState } from 'react';
import { intervalToDuration } from 'date-fns';

import * as Styled from './EnterBirthday.styles';

interface PropsFunction {
  setBirthday: (item: any) => void;
  setIsBirthdaySubmitted: (item: any) => void;
}

const EnterBirthday: React.FC<PropsFunction> = ({ setBirthday, setIsBirthdaySubmitted }) => {
  const handleBirthdayChange = (event: any) => {
    setBirthday(event.target.value);
  };

  const handleBirthdaySubmit = () => {
    setIsBirthdaySubmitted(true);
  };
  return (
    <Styled.EnterBirthdayWrapper>
      <Styled.EnterBirthdayText>Enter your birthday</Styled.EnterBirthdayText>
      <Styled.EnterBirthdayInput
        onChange={(event) => handleBirthdayChange(event)}
        type="date"
      ></Styled.EnterBirthdayInput>
      <Styled.SubmitBirthday onClick={handleBirthdaySubmit}>Submit</Styled.SubmitBirthday>
    </Styled.EnterBirthdayWrapper>
  );
};

export default EnterBirthday;
