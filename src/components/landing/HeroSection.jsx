import React, { useEffect, useRef, useState } from 'react';
import './HeroSection.css';
import logoImage from '../../assets/images/quad.png';
import { FiZap, FiVideo, FiCpu, FiUsers, FiBook, FiStar, FiTarget, FiCode, FiAward } from 'react-icons/fi';

const HeroSection = () => {
  const particlesRef = useRef(null);
  const logoWrapperRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Create additional dynamic particles
    const container = particlesRef.current;
    if (!container) return;
    
    // Clear existing particles
    container.innerHTML = '';
    
    // Create new particles
    for (let i = 0; i < 20; i++) {
      const particle = document.createElement('div');
      particle.className = 'dynamic-particle';
      
      // Randomize properties
      const size = Math.random() * 4 + 2;
      const posX = Math.random() * 100;
      const posY = Math.random() * 100;
      const delay = Math.random() * 5;
      const duration = Math.random() * 10 + 10;
      const color = Math.random() > 0.5 ? '#2ed573' : '#00b7ff';
      
      // Apply styles
      particle.style.width = `${size}px`;
      particle.style.height = `${size}px`;
      particle.style.left = `${posX}%`;
      particle.style.top = `${posY}%`;
      particle.style.backgroundColor = color;
      particle.style.animationDelay = `${delay}s`;
      particle.style.animationDuration = `${duration}s`;
      
      // Add random x offset for floating animation
      const xOffset = Math.random() * 100 - 50;
      particle.style.setProperty('--x-offset', `${xOffset}px`);
      
      container.appendChild(particle);
    }
  }, []);

  // Handle 3D perspective effect based on mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!logoWrapperRef.current) return;
      
      const rect = logoWrapperRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      setMousePosition({ x, y });
    };
    
    const handleMouseLeave = () => {
      setMousePosition({ x: 0, y: 0 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Calculate rotation based on mouse position
  const rotateX = mousePosition.y * 0.05;
  const rotateY = mousePosition.x * -0.05;

  return (
    <header className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Transform Your Learning Journey</h1>
          <h2>
            Unlock your potential with AI-powered personalized education and
            hands-on project development experience
          </h2>
          
          <div className="hero-buttons">
            <button className="primary-btn">
              <FiZap className="btn-icon" />
              <span className="btn-text">Start Free Trial</span>
            </button>
            <button className="secondary-btn">
              <FiVideo className="btn-icon" />
              <span className="btn-text">Watch Video Demo</span>
            </button>
            <button className="secondary-btn">
              <FiCpu className="btn-icon" />
              <span className="btn-text">Explore AI Features</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <FiUsers className="stat-icon" />
              <span className="stat-text">50K+ Active Learners</span>
            </div>
            <div className="stat-item">
              <FiBook className="stat-icon" />
              <span className="stat-text">500+ Interactive Courses</span>
            </div>
            <div className="stat-item">
              <FiStar className="stat-icon" />
              <span className="stat-text">4.9/5 Average Rating</span>
            </div>
            <div className="stat-item">
              <FiTarget className="stat-icon" />
              <span className="stat-text">Creating Your Own Personal Course</span>
            </div>
            <div className="stat-item">
              <FiCode className="stat-icon" />
              <span className="stat-text">500 Real Life Interactive Coding Challenges</span>
            </div>
            <div className="stat-item">
              <FiAward className="stat-icon" />
              <span className="stat-text">Competitive Programming Contests 2x/Week</span>
            </div>
          </div>
        </div>

        <div className="hero-animation">
          <div className="logo-container">
            <div 
              className="logo-wrapper" 
              ref={logoWrapperRef}
              style={{ 
                transform: `rotateX(${rotateX}deg) rotateY(${rotateY}deg)` 
              }}
            >
              <img src={logoImage} alt="Logo" className="logo-image" />
              <div className="logo-glow"></div>
              <div className="logo-particle particle-1"></div>
              <div className="logo-particle particle-2"></div>
              <div className="logo-particle particle-3"></div>
              <div className="logo-particle particle-4"></div>
              <div className="logo-ring"></div>
              <div className="logo-ring outer-ring"></div>
              <div className="particles-container" ref={particlesRef}></div>
              <div className="logo-shine"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
