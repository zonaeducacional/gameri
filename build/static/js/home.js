import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  min-height: 80vh;
`;

const HeroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 3rem;
  width: 100%;
  max-width: 1200px;
`;

const Title = styled(motion.h1)`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.primary};
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  color: ${props => props.theme.colors.secondary};
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  width: 100%;
  max-width: 1200px;
`;

const FeatureCard = styled(motion.div)`
  background-color: ${props => props.theme.colors.cardBg};
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const FeatureIcon = styled.div`
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: ${props => props.theme.colors.accent};
`;

const FeatureTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const FeatureDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const StyledLink = styled(Link)`
  background-color: ${props => props.theme.colors.primary};
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${props => props.theme.colors.primaryDark};
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <HeroSection>
        <Title
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          A Revolução Industrial
        </Title>
        <Subtitle>Uma jornada interativa pela transformação da Europa</Subtitle>
        <motion.img 
          src="/assets/images/industrial_revolution_hero.jpg" 
          alt="Revolução Industrial" 
          style={{ width: '100%', maxWidth: '800px', borderRadius: '10px', marginBottom: '2rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
        />
        <StyledLink to="/timeline">Iniciar Jornada</StyledLink>
      </HeroSection>

      <FeaturesGrid>
        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon>🏭</FeatureIcon>
          <FeatureTitle>Linha do Tempo</FeatureTitle>
          <FeatureDescription>
            Explore os principais eventos e marcos da Revolução Industrial em uma linha do tempo interativa.
          </FeatureDescription>
          <StyledLink to="/timeline">Explorar</StyledLink>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon>⚙️</FeatureIcon>
          <FeatureTitle>Invenções</FeatureTitle>
          <FeatureDescription>
            Conheça as máquinas e invenções que transformaram a produção e a sociedade.
          </FeatureDescription>
          <StyledLink to="/inventions">Descobrir</StyledLink>
        </FeatureCard>

        <FeatureCard
          whileHover={{ y: -10 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <FeatureIcon>🎮</FeatureIcon>
          <FeatureTitle>Minijogos</FeatureTitle>
          <FeatureDescription>
            Divirta-se enquanto aprende com jogos interativos sobre a Revolução Industrial.
          </FeatureDescription>
          <StyledLink to="/games">Jogar</StyledLink>
        </FeatureCard>
      </FeaturesGrid>
    </HomeContainer>
  );
};

export default Home;