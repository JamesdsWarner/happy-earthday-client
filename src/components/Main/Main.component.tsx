import Sidebar from './Sidebar/Sidebar.component';
import MainView from './MainView/MainView.component';
import { useState } from 'react';
import * as Styled from './Main.styles';

const Main = () => {
  const [chosenView, setChosenView] = useState('Counter');
  return (
    <Styled.MainWrapper>
      <Sidebar chosenView={chosenView} setChosenView={setChosenView} />
      <MainView chosenView={chosenView} />
    </Styled.MainWrapper>
  );
};

export default Main;
