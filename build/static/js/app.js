import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './styles/GlobalStyles';
import { theme } from './styles/Theme';

// Páginas
import Home from './pages/Home';
import Timeline from './pages/Timeline';
import Inventions from './pages/Inventions';
import SocialImpact from './pages/SocialImpact';
import Games from './pages/Games';
import Quiz from './pages/Quiz';

// Componentes
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/inventions" element={<Inventions />} />
          <Route path="/social-impact" element={<SocialImpact />} />
          <Route path="/games" element={<Games />} />
          <Route path="/quiz" element={<Quiz />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;