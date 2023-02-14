import LoginSignupBox from './LoginSignupBox/LoginSignupBox.component';
import AuthGraphic from './AuthGraphic/AuthGraphic.component';
import ParticlesBackground from '../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';

import * as Styled from './Auth.styles';

const Auth = () => {
  return (
    <Styled.AuthWrapper>
      <ParticlesBackground data={data} id="tsparticles-stars" />
      <LoginSignupBox />
      <AuthGraphic />
    </Styled.AuthWrapper>
  );
};

export default Auth;
