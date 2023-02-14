import Button from '../../shared/Button/Button.component';
import * as Styled from './HomeCTA.styles';

interface PropsFunction {
  isBirthdaySubmitted: any;
}

const HomeCTA: React.FC<PropsFunction> = ({ isBirthdaySubmitted }) => {
  return (
    <Styled.HomeCTAWrapper isBirthdaySubmitted={isBirthdaySubmitted}>
      <Styled.CTAText>
        Save and track your friends and family’s Earthday’s by signing up:
      </Styled.CTAText>
      <Button text="Sign up" icon />
    </Styled.HomeCTAWrapper>
  );
};

export default HomeCTA;
