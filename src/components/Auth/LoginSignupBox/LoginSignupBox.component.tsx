import * as Styled from './LoginSignupBox.styles';
import Login from './Login/Login.component';
import Register from './Register/Register.component';

const LoginSignupBox = () => {
  return (
    <Styled.LoginSignupBoxWrapper>
      <Styled.LoginSignUpBoxInner>
        <Styled.WelcomeTextWrapper>
          <Styled.WelcomeTextHeader>Welcome.</Styled.WelcomeTextHeader>
          <Styled.WelcomeTextSub>
            Sign in to continue and get the most out of Earthday.
          </Styled.WelcomeTextSub>
        </Styled.WelcomeTextWrapper>

        {/* <Login /> */}
        <Register />
      </Styled.LoginSignUpBoxInner>
    </Styled.LoginSignupBoxWrapper>
  );
};

export default LoginSignupBox;
