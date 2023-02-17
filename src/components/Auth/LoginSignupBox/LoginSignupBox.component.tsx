import * as Styled from './LoginSignupBox.styles';
import Login from './Login/Login.component';
import Register from './Register/Register.component';
import { useState } from 'react';

const LoginSignupBox = () => {
  const [authOption, setAuthOption] = useState('Login');
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
        {authOption === 'Login' && <Login setAuthOption={setAuthOption} />}
        {authOption === 'Register' && <Register setAuthOption={setAuthOption} />}
      </Styled.LoginSignUpBoxInner>
    </Styled.LoginSignupBoxWrapper>
  );
};

export default LoginSignupBox;
