import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const BaseButton = styled.div`
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
  text-align: center;

  &:hover {
    background-color: #0081a7;
    color: #f2f2f2;
  }
`;

export const BaseReversed = styled(BaseButton)`
  background-color: #0081a7;
  color: #f2f2f2;
  border: 2px solid #f2f2f2;
  &:hover {
    background-color: transparent;
    border: 2px solid #0081a7;
    color: #1f1f1f;
  }
`;

export const BaseLong = styled(BaseButton)`
  width: 400px;
`;

export const BaseLongReversed = styled(BaseReversed)`
  width: 400px;
`;

export const LogoutRed = styled(BaseButton)`
  background-color: #d94e4e;
  color: #f2f2f2;
  opacity: 0.8;

  &:hover {
    opacity: 1;
    background-color: #d94e4e;
  }
`;

export const ButtonInnerWrapper = styled.div``;

export const ButtonIcon = styled(Icon)``;

export const ButtonText = styled.p``;
