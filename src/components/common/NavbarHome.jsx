import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import quadLogo from '../../assets/images/quad.png';

const NavbarHome = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/dashboard');
  };

  return (
    <nav className="navbar-home">
      <div className="nav-container">
        <div className="nav-left">
          <Link to="/" className="logo">
            <img src={quadLogo} alt="QUAD" className="logo-icon" />
          </Link>
        </div>

        <div className="nav-center">
          <Link to="/" className="nav-link active">Home</Link>
          <Link to="/how-it-works" className="nav-link">How it works</Link>
          <Link to="/features" className="nav-link">Key features</Link>
          <Link to="/ai-tools" className="nav-link">AI-Powered Learning Tools</Link>
          <Link to="/pricing" className="nav-link">Pricing</Link>
          <Link to="/language" className="nav-link">Language</Link>
        </div>

        <div className="nav-right">
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