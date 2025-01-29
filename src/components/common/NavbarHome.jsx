import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import quadLogo from '../../assets/images/quad.png';
import { FaGlobe, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import './NavbarHome.css';

const NavbarHome = () => {
  const navigate = useNavigate();
  const [showLanguages, setShowLanguages] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleLogin = () => {
    navigate('/dashboard');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const languages = [
    { code: 'ru', name: 'Russian', label: 'RUS' },
    { code: 'es', name: 'Español', label: 'ESP' },
    { code: 'fr', name: 'Français', label: 'FRA' },
    // Add more languages as needed
  ];

  return (
    <nav className="navbar-home">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src={quadLogo} alt="QUAD" className="logo-icon" />
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/" className="nav-link active" onClick={() => scrollToSection('home')}>Home</Link>
          <Link to="/how-it-works" className="nav-link" onClick={() => scrollToSection('how-it-works')}>How it works</Link>
          <Link to="/features" className="nav-link" onClick={() => scrollToSection('features')}>Key features</Link>
          <Link to="/ai-tools" className="nav-link" onClick={() => scrollToSection('ai-tools')}>AI-Powered Learning Tools</Link>
          <Link to="/pricing" className="nav-link" onClick={() => scrollToSection('pricing')}>Pricing</Link>
          <Link to="/footer" className="nav-link" onClick={() => scrollToSection('footer')}>Footer</Link>
        </div>

        <div className="nav-right">
          {/* Language Selector */}
          <div className="language-selector">
            <div onClick={() => setShowLanguages(!showLanguages)} className="selected-language">
              <span>ENG</span>
              <FaChevronDown size={12} style={{ marginLeft: '4px' }} />
            </div>
            {showLanguages && (
              <div className="language-dropdown">
                {languages.map((lang) => (
                  <div key={lang.code} className="language-option">
                    <span>{lang.label}</span>
                    <span>{lang.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Dark Mode Toggle */}
          <div onClick={toggleDarkMode} className="theme-toggle">
            {isDarkMode ? (
              <FaSun size={20} style={{ color: '#FFD700' }} />
            ) : (
              <FaMoon size={20} style={{ color: 'rgb(43, 72, 111)' }} />
            )}
          </div>

          <button onClick={handleLogin} className="nav-button primary">
            <span>Login</span>
          </button>
          <Link to="/signup" className="nav-button secondary">Sign up</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome; 