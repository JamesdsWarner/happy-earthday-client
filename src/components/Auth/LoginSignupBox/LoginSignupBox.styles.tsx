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
  font-size: 16px;
`;

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const InputLabel = styled.p`
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

export const DateInput = styled(InputBox)`
  ::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
  }
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
