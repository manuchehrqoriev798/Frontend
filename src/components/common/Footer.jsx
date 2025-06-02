import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';
import quadLogo from '../../assets/images/quad.png';
import './Footer.css';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Main Footer Content */}
        <div className="footer-content">
          {/* Brand Section with Logo */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={quadLogo} alt="QUAD" />
              </Link>
              <p className="brand-description">
                Empowering learners through AI-driven personalized education
              </p>
            </div>
          </div>

          {/* Right Column: Quick Links and Creators */}
          <div className="footer-right-column">
            {/* Quick Links */}
            <div className="footer-links">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollToSection('home'); }}>Home</a></li>
                <li><a href="#how-it-works" onClick={(e) => { e.preventDefault(); scrollToSection('how-it-works'); }}>How it works</a></li>
                <li><a href="#features" onClick={(e) => { e.preventDefault(); scrollToSection('features'); }}>Key features</a></li>
                <li><a href="#ai-tools" onClick={(e) => { e.preventDefault(); scrollToSection('ai-tools'); }}>AI-Powered Learning Tools</a></li>
                <li><a href="#pricing" onClick={(e) => { e.preventDefault(); scrollToSection('pricing'); }}>Pricing</a></li>
              </ul>
            </div>

            {/* Contact Information */}
            <div className="footer-contact">
              <h3>Created by</h3>
              <div className="creators-container">
                <div className="creator">
                  <strong>Amirbek Islomov</strong>
                  <div className="creator-links">
                    <a href="https://github.com/AmirbekAI" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href="https://www.instagram.com/amirbek.islomov/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram /> Instagram
                    </a>
                    <a href="https://t.me/amirbek_islomov" target="_blank" rel="noopener noreferrer">
                      <FaTelegram /> Telegram
                    </a>
                    <a href="mailto:amirbek.islomov_2027@ucentralasia.org">
                      amirbek.islomov_2027@ucentralasia.org
                    </a>
                  </div>
                </div>
                <div className="creator">
                  <strong>Manuchehr Qoriev</strong>
                  <div className="creator-links">
                    <a href="https://github.com/manuchehrqoriev798" target="_blank" rel="noopener noreferrer">
                      <FaGithub /> GitHub
                    </a>
                    <a href="https://www.instagram.com/manuchehr_qoriev/" target="_blank" rel="noopener noreferrer">
                      <FaInstagram /> Instagram
                    </a>
                    <a href="https://t.me/manuchehr_qoriev" target="_blank" rel="noopener noreferrer">
                      <FaTelegram /> Telegram
                    </a>
                    <a href="mailto:manuchehrqoriev798@gmail.com">
                      manuchehrqoriev798@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} Quad Platform. All rights reserved.
          </div>
          <div className="footer-legal">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/cookies">Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
