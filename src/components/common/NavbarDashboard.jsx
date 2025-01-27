import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import quadLogo from '../../assets/images/quad.png';

const NavbarDashboard = () => {
  const location = useLocation();

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
            <span className="nav-icon">🏠</span>
            <span className="nav-text">Home</span>
          </Link>
          <Link 
            to="/dashboard" 
            className={`nav-link ${location.pathname === '/dashboard' ? 'active' : ''}`}
          >
            <span className="nav-icon">📚</span>
            <span className="nav-text">My Learning</span>
          </Link>
        </div>

        <div className="nav-right">
          <button className="nav-button secondary">
            <span className="nav-icon">👤</span>
            <span className="nav-text">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarDashboard; 