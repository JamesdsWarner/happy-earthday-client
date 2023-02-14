import styled from 'styled-components';

export const AuthGraphicWrapper = styled.div`
  position: relative;
`;

export const AuthGraphicInner = styled.div`
  width: 45vw;
  height: 90%;
  left: 5vw;
  background-color: #141414;
  align-items: center;
  flex-direction: column;
  position: absolute;
  display: flex;
  border-radius: 35px;
  /* right: 0; */
  top: 50%;
  transform: translateY(-50%);
  margin: auto;
  gap: 20px;
  z-index: 999;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const AuthGraphicTextWrapper = styled.div`
  width: 500px;
`;

export const AuthGraphicHeader = styled.h2`
  font-weight: 900;
  font-size: 60px;
`;

export const AuthGraphicSubheader = styled.h3`
  font-weight: 800;
  font-size: 16px;
  margin-top: 10px;
`;

export const LineDivider = styled.div`
  width: 100px;
  height: 1px;
  border: 1px solid #c8c8c8;
  border-radius: 5px;
`;
