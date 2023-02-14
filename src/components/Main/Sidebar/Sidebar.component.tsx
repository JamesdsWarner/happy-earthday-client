import * as Styled from './Sidebar.styles';

const Sidebar = () => {
  return (
    <Styled.SidebarWrapper>
      <Styled.NavLinksWrapper>
        <Styled.NavLink>
          <Styled.NavLinkIcon icon={'ic:round-hourglass-empty'} />
          <Styled.NavLinkText>Earthday Counter</Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon icon={'mdi:flag-variant-outline'} />
          <Styled.NavLinkText>Milestones</Styled.NavLinkText>
        </Styled.NavLink>

        <Styled.NavLink>
          <Styled.NavLinkIcon icon={'material-symbols:person-2-outline-rounded'} />
          <Styled.NavLinkText>Friends Earthday's</Styled.NavLinkText>
        </Styled.NavLink>
      </Styled.NavLinksWrapper>
    </Styled.SidebarWrapper>
  );
};

export default Sidebar;
