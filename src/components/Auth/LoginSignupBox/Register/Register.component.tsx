import * as Styled from '../LoginSignupBox.styles';
import Button from '@/components/shared/Button/Button.component';

const Register = () => {
  var now = new Date();
  var maxDate = now.toISOString().substring(0, 10);

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
          <Styled.DateInput onKeyDown={(e) => e.preventDefault()} max={maxDate} type="date" />
        </Styled.InputWrapper>
      </Styled.InputsWrapper>
      <Button buttonType="long-reversed" text="Sign up" />
    </Styled.LoginBoxWrapper>
  );
};

export default Register;
