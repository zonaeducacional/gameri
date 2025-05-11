import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const NavContainer = styled.nav`
  background-color: ${props => props.theme.colors.primary};
  padding: 1rem 2rem;
  position: sticky;
  top: 0;
  z-index: 100;
`;

const NavContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.5rem;
  font-weight: bold;
  font-family: ${props => props.theme.fonts.heading};
`;

const NavLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: none;
  }
`;

const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const MobileMenuButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  display: none;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background-color: ${props => props.theme.colors.primaryDark};
  padding: 2rem;
  z-index: 200;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const MobileMenuLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  transition: color 0.3s ease;
  
  &:hover {
    color: ${props => props.theme.colors.secondary};
  }
`;

const CloseButton = styled.button`
  background: none;
  border: none;
  color: white;
  font-size: 1.5rem;
  cursor: pointer;
  align-self: flex-end;
  margin-bottom: 1rem;
`;

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <NavContainer>
      <NavContent>
        <Logo to="/">Revolução Industrial</Logo>
        
        <NavLinks>
          <NavLink to="/">Início</NavLink>
          <NavLink to="/timeline">Linha do Tempo</NavLink>
          <NavLink to="/inventions">Invenções</NavLink>
          <NavLink to="/social-impact">Impacto Social</NavLink>
          <NavLink to="/games">Minijogos</NavLink>
          <NavLink to="/quiz">Quiz</NavLink>
        </NavLinks>
        
        <MobileMenuButton onClick={() => setMobileMenuOpen(true)}>
          ☰
        </MobileMenuButton>
      </NavContent>
      
      {mobileMenuOpen && (
        <MobileMenu
          initial={{ x: 300 }}
          animate={{ x: 0 }}
          exit={{ x: 300 }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <CloseButton onClick={() => setMobileMenuOpen(false)}>✕</CloseButton>
          <MobileMenuLink to="/" onClick={() => setMobileMenuOpen(false)}>Início</MobileMenuLink>
          <MobileMenuLink to="/timeline" onClick={() => setMobileMenuOpen(false)}>Linha do Tempo</MobileMenuLink>
          <MobileMenuLink to="/inventions" onClick={() => setMobileMenuOpen(false)}>Invenções</MobileMenuLink>
          <MobileMenuLink to="/social-impact" onClick={() => setMobileMenuOpen(false)}>Impacto Social</MobileMenuLink>
          <MobileMenuLink to="/games" onClick={() => setMobileMenuOpen(false)}>Minijogos</MobileMenuLink>
          <MobileMenuLink to="/quiz" onClick={() => setMobileMenuOpen(false)}>Quiz</MobileMenuLink>
        </MobileMenu>
      )}
    </NavContainer>
  );
};

export default Navbar;