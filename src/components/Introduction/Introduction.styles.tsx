import styled from 'styled-components';

export const IntroductionWrapper = styled.div<{ isBirthdaySubmitted: boolean }>``;

export const GetEarthdayText = styled.h1`
  font-weight: 900;
  font-size: 50px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 37%;
  transform: translateY(-50%);
  margin: auto;
  gap: 10px;
`;
