import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FaGlobe, FaMoon, FaSun, FaChevronDown } from 'react-icons/fa';
import quadLogo from '../../assets/images/quad.png';
import './NavbarDashboard.css';

const NavbarDashboard = () => {
  const location = useLocation();
  const [showLanguages, setShowLanguages] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark-mode');
  };

  const languages = [
    { code: 'ru', name: 'Russian', label: 'RUS' },
    { code: 'es', name: 'Español', label: 'ESP' },
    { code: 'fr', name: 'Français', label: 'FRA' },
  ];

  return (
    <nav className="navbar-dashboard">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src={quadLogo} alt="QUAD" className="logo-icon" />
          </Link>
        </div>

        <div className="nav-center">
          <Link 
            to="/" 
            className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
          >
            <span className="nav-text">Home</span>
          </Link>
          <Link 
            to="/dashboard" 
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <span className="nav-text">My Learning</span>
          </Link>
          <Link 
            to="/create-course" 
            className={`nav-link ${location.pathname === '/create-course' ? 'active' : ''}`}
          >
            <span className="nav-text">Create Course</span>
          </Link>
          <Link 
            to="/course-catalog" 
            className={`nav-link ${location.pathname === '/course-catalog' ? 'active' : ''}`}
          >
            <span className="nav-text">View Courses</span>
          </Link>
          <Link 
            to="/challenge-hub" 
            className={`nav-link ${location.pathname === '/challenge-hub' ? 'active' : ''}`}
          >
            <span className="nav-text">Solve Challenge</span>
          </Link>
          <Link 
            to="/join-contests" 
            className={`nav-link ${location.pathname === '/join-contests' ? 'active' : ''}`}
          >
            <span className="nav-text">Join Contest</span>
          </Link>
          <Link 
            to="/create-startup" 
            className={`nav-link ${location.pathname === '/create-startup' ? 'active' : ''}`}
          >
            <span className="nav-text">Start Startup</span>
          </Link>
          <Link 
            to="/startup-hub" 
            className={`nav-link ${location.pathname === '/startup-hub' ? 'active' : ''}`}
          >
            <span className="nav-text">Join Startup</span>
          </Link>
        </div>

        <div className="nav-right">
          {/* Language Selector */}
          <div className="language-selector">
            <div 
              onClick={() => setShowLanguages(!showLanguages)} 
              className={`selected-language ${showLanguages ? 'active' : ''}`}
            >
              <span>ENG</span>
              <FaChevronDown size={12} />
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

          <button className="nav-button secondary">
            <span className="nav-text">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard; 