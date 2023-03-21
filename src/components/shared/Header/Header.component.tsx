import * as Styled from './Header.styles';
import Button from '../Button/Button.component';
import Link from 'next/link';
import { useContext } from 'react';
import { StateContext } from '@/context/GlobalState';

const Header = () => {
  const { setAuthOption } = useContext(StateContext);

  const handleSignInClick = () => {
    setAuthOption('Login');
  };

  return (
    <Styled.HeaderWrapper>
      <Styled.HeaderLogoWrapper>HETY</Styled.HeaderLogoWrapper>
      <Link onClick={handleSignInClick} href="/auth">
        <Button text="Sign in" icon />
      </Link>
    </Styled.HeaderWrapper>
  );
};

export default Header;
