import styled from 'styled-components';

export const IntroductionWrapper = styled.div<{ isBirthdaySubmitted: boolean }>`
  > * {
    &:first-child {
      transition: all 1.8s ease;
      opacity: ${(props) => (props.isBirthdaySubmitted ? 0 : 1)};
    }

    /* &:last-child {
      transition: all 0.8s ease;
      opacity: ${(props) => (props.isBirthdaySubmitted ? 1 : 0)};
    } */
  }
`;
