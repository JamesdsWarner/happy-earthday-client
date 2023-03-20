import * as Styled from './Sidebar.styles';
import Button from '@/components/shared/Button/Button.component';
import axios from 'axios';
import { useRouter } from 'next/router';
import toast from 'react-hot-toast';
import { useState } from 'react';

interface PropsFunction {
  setChosenView: (item: any) => void;
  chosenView: any;
}

const Sidebar: React.FC<PropsFunction> = ({ setChosenView, chosenView }) => {
  const [user, setUser] = useState(null);

  const navigate = useRouter();

  const handleClick = (event: any) => {
    setChosenView(event.target.innerHTML);
  };

  const handleLogout = async () => {
    try {
      await axios.get('/api/auth/logout');
      setUser(null);
      toast.success('User logged out');
      navigate.push('/auth');
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Styled.SidebarWrapper>
      <Styled.NavLinksWrapper>
        <Styled.NavLink>
          <Styled.NavLinkIcon iconColor="e07a5f" icon={'ic:round-hourglass-empty'} />
          <Styled.NavLinkText chosenView={chosenView} onClick={(e) => handleClick(e)}>
            Counter
          </Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon iconColor="3D405B" icon={'mdi:flag-variant-outline'} />
          <Styled.NavLinkText chosenView={chosenView} onClick={(e) => handleClick(e)}>
            Milestones
          </Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon
            iconColor="81B29A"
            icon={'material-symbols:person-2-outline-rounded'}
          />
          <Styled.NavLinkText chosenView={chosenView} onClick={(e) => handleClick(e)}>
            Friends
          </Styled.NavLinkText>
        </Styled.NavLink>
      </Styled.NavLinksWrapper>
      <Styled.LogoutWrapper onClick={handleLogout}>
        <Button buttonType={'logout-red'} text="Logout" />
      </Styled.LogoutWrapper>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
