import Sidebar from './Sidebar/Sidebar.component';
import MainView from './MainView/MainView.component';
import { useState, useEffect } from 'react';
import axios from 'axios';
import * as Styled from './Main.styles';

const Main = () => {
  const [chosenView, setChosenView] = useState('Counter');
  const [user, setUser] = useState({ first_name: '', birthday: new Date() });

  const getUserInfo = async () => {
    try {
      const { data } = await axios.get('/api/user/get_user_info');
      setUser(data[0]);
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <Styled.MainWrapper>
      <Sidebar chosenView={chosenView} setChosenView={setChosenView} />
      <MainView user={user} chosenView={chosenView} />
    </Styled.MainWrapper>
  );
};

export default Main;
