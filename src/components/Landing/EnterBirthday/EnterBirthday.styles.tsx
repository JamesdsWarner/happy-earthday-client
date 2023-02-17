import styled from 'styled-components';

export const EnterBirthdayWrapper = styled.div<{ isBirthdaySubmitted: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  gap: 10px;

  /* visibility: ${(props) => (props.isBirthdaySubmitted ? 'hidden' : 'visible')}; */
  opacity: ${(props) => (props.isBirthdaySubmitted ? 0 : 1)};

  transition: opacity 1s ease;

  > * {
    &:last-child {
      margin-top: 10px;
    }
  }

  /* transition-delay: 1.8s, 1.8s; */
`;

export const EnterBirthdayInput = styled.input``;

export const SubmitBirthday = styled.button``;

export const EnterBirthdayText = styled.h1``;

export const ButtonWrapper = styled.div``;
