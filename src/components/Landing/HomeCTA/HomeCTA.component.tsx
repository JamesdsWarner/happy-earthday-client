import Button from '../../shared/Button/Button.component';
import Link from 'next/link';
import { useContext } from 'react';
import { StateContext } from '@/context/GlobalState';
import * as Styled from './HomeCTA.styles';

interface PropsFunction {
  isBirthdaySubmitted: any;
}

const HomeCTA: React.FC<PropsFunction> = ({ isBirthdaySubmitted }) => {
  const { setAuthOption } = useContext(StateContext);

  const handleClick = () => {
    setAuthOption('Register');
  };

  return (
    <Styled.HomeCTAWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.CTAText>
        Save and track your friends and family’s Earthday’s by signing up:
      </Styled.CTAText>
      <Link onClick={handleClick} href="/auth">
        <Button text="Sign up" icon />
      </Link>
    </Styled.HomeCTAWrapper>
  );
};

export default HomeCTA;
