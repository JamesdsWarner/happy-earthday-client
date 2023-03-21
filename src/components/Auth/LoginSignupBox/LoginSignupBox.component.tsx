import * as Styled from './LoginSignupBox.styles';
import Login from './Login/Login.component';
import Register from './Register/Register.component';
import { StateContext } from '@/context/GlobalState';
import { useState, useContext } from 'react';

const LoginSignupBox = () => {
  // const [authOption, setAuthOption] = useState('Login');

  const { authOption } = useContext(StateContext);

  console.log(authOption);

  return (
    <Styled.LoginSignupBoxWrapper>
      <Styled.LoginSignUpBoxInner>
        <Styled.WelcomeTextWrapper>
          <Styled.WelcomeTextHeader>Welcome.</Styled.WelcomeTextHeader>
          <Styled.WelcomeTextSub>
            Sign {(authOption === 'Login' && 'in') || (authOption === 'Register' && 'up')} to
            continue and get the most out of Earthday.
          </Styled.WelcomeTextSub>
        </Styled.WelcomeTextWrapper>
        {authOption === 'Login' && <Login />}
        {authOption === 'Register' && <Register />}
      </Styled.LoginSignUpBoxInner>
    </Styled.LoginSignupBoxWrapper>
  );
};

export default LoginSignupBox;
