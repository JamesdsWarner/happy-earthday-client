import styled from 'styled-components';

export const LoginSignupBoxWrapper = styled.div`
  width: 45%;
  background-color: #f2f2f2;
  height: 100vh;
  position: relative;
`;

export const LoginBoxWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const LoginSignUpBoxInner = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 400px; /* for example */
  right: 0;
  /* margin-left: -100px; width divided by 2 */
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  gap: 30px;
  color: #1f1f1f;
  align-items: flex-start;
`;

export const WelcomeTextWrapper = styled.div`
  > * {
    &:last-child {
      margin-top: 5px;
    }
  }
`;

export const WelcomeTextHeader = styled.h2`
  font-size: 40px;
`;

export const WelcomeTextSub = styled.p`
  font-size: 15px;
  /* line-height: 23px; */
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin-bottom: 40px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.label`
  font-size: 14px;
`;

export const InputBox = styled.input`
  background-color: transparent;
  border-width: 1px;
  border-radius: 10px;
  border-color: #c8c8c8;
  border-style: solid;
  width: 400px;
  height: 34px;
  color: #1f1f1f;
  padding: 20px;
  font-size: 20px;
`;

export const LoginCTA = styled.p`
  text-align: center;
  color: #acacac;
  cursor: pointer;
  opacity: 0.8;
  transition: all 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const CTASpan = styled.span`
  color: #1f1f1f;
`;

export const Form = styled.form``;

export const SubmitWrapper = styled.button`
  border: none;
  background-color: transparent;
`;
