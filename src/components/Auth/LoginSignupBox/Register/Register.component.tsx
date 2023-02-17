import * as Styled from '../LoginSignupBox.styles';
import Button from '@/components/shared/Button/Button.component';
import DateInput from '@/components/shared/DateInput/DateInput.component';
import { useState } from 'react';

interface PropsFunction {
  setAuthOption: (item: any) => void;
}

const Register: React.FC<PropsFunction> = ({ setAuthOption }) => {
  const [birthday, setBirthday] = useState<Date>();

  const handleSwitchToRegisterClick = () => {
    setAuthOption('Login');
  };
  return (
    <Styled.LoginBoxWrapper>
      <Styled.InputsWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>name</Styled.InputLabel>
          <Styled.InputBox />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.InputLabel>email</Styled.InputLabel>
          <Styled.InputBox />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.InputLabel>password</Styled.InputLabel>
          <Styled.InputBox />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.InputLabel>birthday</Styled.InputLabel>
          <DateInput setBirthday={setBirthday} />
        </Styled.InputWrapper>
      </Styled.InputsWrapper>
      <Button buttonType="long-reversed" text="Sign up" />
      <Styled.LoginCTA onClick={handleSwitchToRegisterClick}>
        Already have an account? <Styled.CTASpan>Sign in here</Styled.CTASpan>
      </Styled.LoginCTA>
    </Styled.LoginBoxWrapper>
  );
};

export default Register;
