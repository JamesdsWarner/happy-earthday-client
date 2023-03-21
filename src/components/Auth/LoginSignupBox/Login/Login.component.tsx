import * as Styled from '../LoginSignupBox.styles';
import Button from '@/components/shared/Button/Button.component';
import { useRouter } from 'next/router';
import { useContext } from 'react';
import { StateContext } from '@/context/GlobalState';
import axios from 'axios';
import toast from 'react-hot-toast';

// interface PropsFunction {
//   setAuthOption: (item: any) => void;
// }

const Login = () => {
  const { authOption, setAuthOption } = useContext(StateContext);

  const navigate = useRouter();
  const login = async (e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    try {
      const res = await axios.post(
        '/api/auth/login',
        { email: email, password: password },
        { withCredentials: true }
      );
      navigate.push('/main');
      toast.success('Login success');
    } catch (err) {
      console.log(err);
      toast.error('Login failed');
    }
  };

  const handleSwitchToRegisterClick = () => {
    setAuthOption('Register');
    console.log(authOption);
  };
  return (
    <Styled.LoginBoxWrapper>
      <Styled.Form onSubmit={login}>
        <Styled.InputsWrapper>
          <Styled.InputWrapper>
            <Styled.InputLabel htmlFor="email">email</Styled.InputLabel>
            <Styled.InputBox type="email" name="email" required />
          </Styled.InputWrapper>

          <Styled.InputWrapper>
            <Styled.InputLabel htmlFor="password">password</Styled.InputLabel>
            <Styled.InputBox type="password" name="password" required />
          </Styled.InputWrapper>
        </Styled.InputsWrapper>
        <Styled.SubmitWrapper>
          <Button buttonType="long-reversed" text="Sign in" />
        </Styled.SubmitWrapper>
      </Styled.Form>
      <Styled.LoginCTA onClick={handleSwitchToRegisterClick}>
        Don't have an account? <Styled.CTASpan>Sign up for free</Styled.CTASpan>
      </Styled.LoginCTA>
    </Styled.LoginBoxWrapper>
  );
};

export default Login;
