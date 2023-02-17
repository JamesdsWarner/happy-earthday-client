import * as Styled from './Sidebar.styles';
import Button from '@/components/shared/Button/Button.component';

interface PropsFunction {
  setChosenView: (item: any) => void;
  chosenView: any;
}

const Sidebar: React.FC<PropsFunction> = ({ setChosenView, chosenView }) => {
  const handleClick = (event: any) => {
    setChosenView(event.target.innerHTML);
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
      <Button buttonType={'logout-red'} text="Logout" />
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
