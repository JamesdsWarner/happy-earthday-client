import * as Styled from '../LoginSignupBox.styles';
import Button from '@/components/shared/Button/Button.component';
import DateInput from '@/components/shared/DateInput/DateInput.component';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';

interface PropsFunction {
  setAuthOption: (item: any) => void;
}

const Register: React.FC<PropsFunction> = ({ setAuthOption }) => {
  const [birthday, setBirthday] = useState<Date>();

  const register = async (e: any) => {
    e.preventDefault();
    const user = {
      first_name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
      birthday: birthday,
    };

    try {
      await axios.post('/api/auth/register', user, {
        withCredentials: true,
      });
      toast.success('Register Success');
      console.log('register complete');
    } catch (err) {
      console.log(err);
      toast.error('Register failed');
    }
  };

  const handleSwitchToRegisterClick = () => {
    setAuthOption('Login');
  };
  return (
    <Styled.LoginBoxWrapper>
      <Styled.Form onSubmit={register}>
        <Styled.InputsWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel htmlFor="name">name</Styled.InputLabel>
            <Styled.InputBox type="text" name="name" required />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.InputLabel htmlFor="email">email</Styled.InputLabel>
            <Styled.InputBox type="email" name="email" required />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.InputLabel htmlFor="password">password</Styled.InputLabel>
            <Styled.InputBox type="password" name="password" required />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.InputLabel>birthday</Styled.InputLabel>
            <DateInput setBirthday={setBirthday} />
          </Styled.InputWrapper>
        </Styled.InputsWrapper>
        <Styled.SubmitWrapper type="submit">
          <Button buttonType="long-reversed" text="Sign up" />
        </Styled.SubmitWrapper>
      </Styled.Form>
      <Styled.LoginCTA onClick={handleSwitchToRegisterClick}>
        Already have an account? <Styled.CTASpan>Sign in here</Styled.CTASpan>
      </Styled.LoginCTA>
    </Styled.LoginBoxWrapper>
  );
};

export default Register;
