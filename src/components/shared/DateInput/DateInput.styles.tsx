import styled from 'styled-components';

export const DateInput = styled.input<{ white: boolean }>`
  background-color: transparent;
  border-width: 1px;
  border-radius: 10px;
  border-color: #c8c8c8;
  border-style: solid;
  /* width: 400px; */
  gap: 20px;
  height: 34px;
  color: #${(props) => (props.white ? 'c8c8c8' : '1f1f1f')};
  padding: 20px;
  font-size: 20px;
  ::-webkit-calendar-picker-indicator {
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 24 24"><path fill="%23bbbbbb" d="M20 3h-1V1h-2v2H7V1H5v2H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 18H4V8h16v13z"/></svg>');
  }
`;
