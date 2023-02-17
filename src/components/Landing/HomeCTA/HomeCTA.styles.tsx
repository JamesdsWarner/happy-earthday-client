import styled from 'styled-components';

export const HomeCTAWrapper = styled.div<{ isBirthdaySubmitted: boolean }>`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  right: 0;
  top: 61%;
  transform: translateY(-50%);
  margin: auto;
  gap: 15px;
  margin-top: 20px;
  visibility: ${(props) => (props.isBirthdaySubmitted ? 'visible' : 'hidden')};
  opacity: ${(props) => (props.isBirthdaySubmitted ? 1 : 0)};

  transition: opacity 1.8s ease;
  transition-delay: 2.8s, 2.8s;
`;

export const CTAText = styled.h3``;
