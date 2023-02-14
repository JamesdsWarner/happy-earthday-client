import styled from 'styled-components';
import { Icon } from '@iconify/react';

export const SidebarWrapper = styled.div`
  width: 25%;
  background-color: #f2f2f2;
  height: 100vh;
  position: relative;
`;

export const NavLinksWrapper = styled.div`
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
`;

export const NavLink = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
`;

export const NavLinkIcon = styled(Icon)`
  color: #e07a5f;
  fill: #e07a5f;
  font-size: 50px;
`;

export const NavLinkText = styled.p`
  font-size: 25px;
  color: #1f1f1f;
  font-weight: 700;
`;
