import * as Styled from './Header.styles';
import Button from '../Button/Button.component';

const Header = () => {
  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderLogoWrapper>HETY</Styled.HeaderLogoWrapper>
      <Button text="Sign in" icon />
    </Styled.HeaderWrapper>
  );
};

export default Header;
