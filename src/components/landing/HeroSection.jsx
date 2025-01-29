import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
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
              <span>🚀</span>
              <span>Start Free Trial</span>
            </button>
            <button className="secondary-btn">
              <span>🎥</span>
              <span>Watch Video Demo</span>
            </button>
            <button className="secondary-btn">
              <span>🤖</span>
              <span>Explore AI Features</span>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-icon">👥</span>
              <span className="stat-text">50K+ Active Learners</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">📚</span>
              <span className="stat-text">500+ Interactive Courses</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🌟</span>
              <span className="stat-text">4.9/5 Average Rating</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <span className="stat-text">Creating Your Own Personal Course</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">💻</span>
              <span className="stat-text">500 Real Life Interactive Coding Challenges</span>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🏆</span>
              <span className="stat-text">Competitive Programming Contests 2x/Week</span>
            </div>
          </div>
        </div>

        <div className="hero-animation">
          <div className="bird-container">
            <div className="bird">
              <div className="bird-body"></div>
              <div className="bird-head"></div>
              <div className="bird-wing-left"></div>
              <div className="bird-wing-right"></div>
              <div className="bird-tail"></div>
              <div className="bird-eye"></div>
              <div className="bird-beak"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
