import LoginSignupBox from './LoginSignupBox/LoginSignupBox.component';
import AuthGraphic from './AuthGraphic/AuthGraphic.component';
import ParticlesBackground from '../shared/ParticlesBackground/ParticlesBackground.component';
import data from '../../../data/particlesjs-stars-config';
import useAuth from 'hooks/useAuth';
import { useRouter } from 'next/router';
import * as Styled from './Auth.styles';
import { useEffect } from 'react';

const Auth = () => {
  const { auth } = useAuth();
  const navigate = useRouter();

  useEffect(() => {
    if (auth) {
      navigate.push('/main');
    }
  }, [auth, navigate]);

  return (
    <Styled.AuthWrapper>
      <ParticlesBackground data={data} id="tsparticles-stars" />
      <LoginSignupBox />
      <AuthGraphic />
    </Styled.AuthWrapper>
  );
};

export default Auth;
