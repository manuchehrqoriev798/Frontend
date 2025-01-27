import React from 'react';
import { Link } from 'react-router-dom';
import NavbarHome from '../components/common/NavbarHome';
import StructuredCoursePanel from '../features/structuredLearning/StructuredCoursePanel';
import EngineeringMindsetPanel from '../features/engineeringMindset/EngineeringMindsetPanel';
import StartupCoursePanel from '../features/startupSimulation/StartupCoursePanel';

const Home = () => {
  return (
    <div className="home-container">
      <NavbarHome />
      
      {/* Hero Section */}
      <header className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Transform Your Learning Journey</h1>
            <h2>
              Unlock your potential with AI-powered personalized education and
              hands-on project development experience
            </h2>
            
            <div className="hero-buttons">
              <Link to="/signup" className="primary-btn">
                <span>🚀</span>
                Start Free Trial
              </Link>
              <button className="secondary-btn">
                <span>🎥</span>
                Watch Demo Video
              </button>
              <Link to="/ai-features" className="secondary-btn">
                <span>🤖</span>
                Explore AI Features
              </Link>
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

      {/* Feature Panels */}
      <section className="feature-panels-section">
        <h2 className="section-title">Our Key Features</h2>
        <div className="feature-panels-grid">
          <StructuredCoursePanel />
          <EngineeringMindsetPanel />
          <StartupCoursePanel />
        </div>
      </section>
    </div>
  );
};

export default Home;
