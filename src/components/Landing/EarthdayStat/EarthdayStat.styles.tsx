import styled from 'styled-components';

export const EarthdayStatWrapper = styled.div<{ isBirthdaySubmitted: boolean }>`
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

export const EarthdayStatDay = styled.h2`
  font-size: 50px;
  font-weight: 800;
`;

export const EarthdayStatHours = styled.h3`
  font-size: 20px;
  font-weight: 500;
`;

export const EarthdayStatMinutes = styled.h3`
  font-size: 30px;
  font-weight: 500;
`;

export const EarthdayStatSeconds = styled.h3`
  font-size: 22px;
  font-weight: 300;
`;
