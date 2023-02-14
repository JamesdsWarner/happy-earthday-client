import * as Styled from './Button.styles';

export const BUTTON_TYPE_CLASSES = {
  base: 'base',
  baseReversed: 'base-reversed',
  baseLong: 'base-long',
  longReversed: 'long-reversed',
};

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) =>
  ({
    [BUTTON_TYPE_CLASSES.base]: Styled.BaseButton,
    [BUTTON_TYPE_CLASSES.baseReversed]: Styled.BaseReversed,
    [BUTTON_TYPE_CLASSES.baseLong]: Styled.BaseLong,
    [BUTTON_TYPE_CLASSES.longReversed]: Styled.BaseLongReversed,
  }[buttonType]);

interface PropsFunction {
  icon?: any;
  text: any;
  buttonType?: any;
}

const Button: React.FC<PropsFunction> = ({ buttonType, icon, text }) => {
  const CustomButton = getButton(buttonType);

  return (
    <CustomButton>
      <Styled.ButtonInnerWrapper>
        <Styled.ButtonIcon icon={icon} />
        <Styled.ButtonText>{text}</Styled.ButtonText>
      </Styled.ButtonInnerWrapper>
    </CustomButton>
  );
};

export default Button;
