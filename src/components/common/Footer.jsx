import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaTwitter, FaLinkedin, FaDiscord, FaYoutube } from 'react-icons/fa';
import quadLogo from '../../assets/images/quad.png';
import '../../styles/components/footer.css';

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
          {/* Brand Section with Social Media */}
          <div className="footer-brand-section">
            <div className="footer-brand">
              <Link to="/" className="footer-logo">
                <img src={quadLogo} alt="QUAD" />
              </Link>
              <p className="brand-description">
                Empowering learners through AI-driven personalized education
              </p>
              <div className="social-links">
                <a href="https://github.com/quadplatform" target="_blank" rel="noopener noreferrer">
                  <FaGithub />
                </a>
                <a href="https://twitter.com/quadplatform" target="_blank" rel="noopener noreferrer">
                  <FaTwitter />
                </a>
                <a href="https://linkedin.com/company/quadplatform" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin />
                </a>
                <a href="https://discord.gg/quadplatform" target="_blank" rel="noopener noreferrer">
                  <FaDiscord />
                </a>
                <a href="https://youtube.com/quadplatform" target="_blank" rel="noopener noreferrer">
                  <FaYoutube />
                </a>
              </div>
            </div>
          </div>

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
            <h3>Contact Us</h3>
            <ul>
              <li>
                <strong>Email:</strong>
                <a href="mailto:info@quadplatform.com">info@quadplatform.com</a>
              </li>
              <li>
                <strong>Phone:</strong>
                <a href="tel:+15551234567">+1 (555) 123-4567</a>
              </li>
              <li>
                <strong>Address:</strong>
                <address>123 Tech Street, Silicon Valley, CA 94025</address>
              </li>
            </ul>
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
