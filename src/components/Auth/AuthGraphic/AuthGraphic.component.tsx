import * as Styled from './AuthGraphic.styles';
import Image from 'next/image';

const AuthGraphic = () => {
  return (
    <Styled.AuthGraphicWrapper>
      <Styled.AuthGraphicInner>
        <Styled.AuthGraphicTextWrapper>
          <Styled.AuthGraphicHeader>Because every day matters.</Styled.AuthGraphicHeader>
          <Styled.AuthGraphicSubheader>
            The days are long and the years are short. <br />
            Let’s celebrate both.
          </Styled.AuthGraphicSubheader>
        </Styled.AuthGraphicTextWrapper>
        <Styled.LineDivider />
        <Image src="/images/Earth.png" width="400" height="400" alt="Image of the earth" />
      </Styled.AuthGraphicInner>
    </Styled.AuthGraphicWrapper>
  );
};

export default AuthGraphic;
