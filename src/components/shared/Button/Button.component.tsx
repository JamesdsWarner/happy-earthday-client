import * as Styled from './Button.styles';

interface PropsFunction {
  icon?: any;
  text: any;
}

const Button: React.FC<PropsFunction> = ({ icon, text }) => {
  return (
    <Styled.ButtonWrapper>
      <Styled.ButtonInnerWrapper>
        <Styled.ButtonIcon icon={icon} />
        <Styled.ButtonText>{text}</Styled.ButtonText>
      </Styled.ButtonInnerWrapper>
    </Styled.ButtonWrapper>
  );
};

export default Button;
