import * as Styled from '../LoginSignupBox.styles';
import Button from '@/components/shared/Button/Button.component';

interface PropsFunction {
  setAuthOption: (item: any) => void;
}

const Login: React.FC<PropsFunction> = ({ setAuthOption }) => {
  const handleSwitchToRegisterClick = () => {
    setAuthOption('Register');
  };
  return (
    <Styled.LoginBoxWrapper>
      <Styled.InputsWrapper>
        <Styled.InputWrapper>
          <Styled.InputLabel>email</Styled.InputLabel>
          <Styled.InputBox />
        </Styled.InputWrapper>

        <Styled.InputWrapper>
          <Styled.InputLabel>password</Styled.InputLabel>
          <Styled.InputBox />
        </Styled.InputWrapper>
      </Styled.InputsWrapper>
      <Button buttonType="long-reversed" text="Sign in" />
      <Styled.LoginCTA onClick={handleSwitchToRegisterClick}>
        Don't have an account? <Styled.CTASpan>Sign up for free</Styled.CTASpan>
      </Styled.LoginCTA>
    </Styled.LoginBoxWrapper>
  );
};

export default Login;
