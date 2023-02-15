import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const SidebarWrapper = styled.div`
  width: 25%;
  background-color: #f2f2f2;
  height: 100vh;
  position: relative;

  > * {
    &:last-child {
      position: absolute;
      bottom: 50px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
`;

export const NavLinksWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  position: absolute;
  left: 0;
  width: 330px; /* for example */
  right: 0;
  /* margin-left: -100px; width divided by 2 */
  top: 50%;
  transform: translateY(-50%);
  align-items: flex-start;
  margin: auto;
  gap: 10px;
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavLinkIcon = styled(Icon)<{ iconColor: string }>`
  color: #${(props) => props.iconColor};
  /* color: #e07a5f; */

  fill: #e07a5f;
  font-size: 50px;
`;

export const NavLinkText = styled.p`
  font-size: 25px;
  color: #1f1f1f;
  font-weight: 700;
  padding: 10px 15px 10px 15px;
  border-radius: 10px;
  cursor: pointer;
  &:hover {
    background-color: #bebebe;
  }
`;
