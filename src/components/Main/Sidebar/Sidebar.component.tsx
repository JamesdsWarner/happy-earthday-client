import * as Styled from './Sidebar.styles';
import Button from '@/components/shared/Button/Button.component';

const Sidebar = () => {
  return (
    <Styled.SidebarWrapper>
      <Styled.NavLinksWrapper>
        <Styled.NavLink>
          <Styled.NavLinkIcon iconColor="e07a5f" icon={'ic:round-hourglass-empty'} />
          <Styled.NavLinkText>Counter</Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon iconColor="3D405B" icon={'mdi:flag-variant-outline'} />
          <Styled.NavLinkText>Milestones</Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon
            iconColor="81B29A"
            icon={'material-symbols:person-2-outline-rounded'}
          />
          <Styled.NavLinkText>Friends</Styled.NavLinkText>
        </Styled.NavLink>
      </Styled.NavLinksWrapper>
      <Button buttonType={'logout-red'} text="Logout" />
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
