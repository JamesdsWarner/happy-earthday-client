import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const ButtonWrapper = styled.div`
  /* height: 20px; */

  /* width: max-content; */
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 25px;
  padding-right: 25px;
  background-color: #f2f2f2;
  border-radius: 10px;
  color: #1f1f1f;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #0081a7;
    color: #f2f2f2;
  }
`;

export const ButtonInnerWrapper = styled.div``;

export const ButtonIcon = styled(Icon)``;

export const ButtonText = styled.p``;
