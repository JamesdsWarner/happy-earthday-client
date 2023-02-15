import styled from 'styled-components';

export const BaseEarthdayTimerWrapper = styled.div<{ isBirthdaySubmitted: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 49%;
  transform: translateY(-50%);
  margin: auto;
  gap: 5px;
  user-select: none;
  pointer-events: none;

  visibility: ${(props) => (props.isBirthdaySubmitted ? 'visible' : 'hidden')};
  transition: opacity 1.8s ease;
  transition-delay: 1s, 1s;
  background-color: #212529;
  /* width: fit-content; */
  width: 400px;
  padding: 15px;
  border-radius: 10px;

  opacity: ${(props) => (props.isBirthdaySubmitted ? 1 : 0)};
`;

export const BaseReversed = styled(BaseEarthdayTimerWrapper)`
  color: #1f1f1f;
  background-color: #f2f2f2;
`;

export const EarthdayTimerDay = styled.h2`
  font-size: 50px;
  font-weight: 800;
`;

export const EarthdayTimerWeeksMonths = styled.h3`
  font-size: 25px;
  font-weight: 700;
`;

export const EarthdayTimerHours = styled.h3`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const EarthdayTimerMinutes = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const EarthdayTimerSeconds = styled.h3`
  font-size: 22px;
  font-weight: 300;
`;
