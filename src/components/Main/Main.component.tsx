import Sidebar from './Sidebar/Sidebar.component';
import MainView from './MainView/MainView.component';
import * as Styled from './Main.styles';

const Main = () => {
  return (
    <Styled.MainWrapper>
      <Sidebar />
      <MainView />
    </Styled.MainWrapper>
  );
};

export default Main;
