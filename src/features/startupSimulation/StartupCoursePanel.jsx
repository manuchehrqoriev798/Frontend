import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartupSimulationAnimation from './animations/StartupSimulationAnimation';
import { FiTarget, FiUsers } from 'react-icons/fi';

const StartupCoursePanel = () => {
  const navigate = useNavigate();

  const handleStartStartup = () => {
    navigate('/create-startup');
  };

  const handleJoinStartup = () => {
    navigate('/startup-hub');
  };

  return (
    <div className="panel feature-panel startup-course">
      <div className="feature-content">
        <div className="feature-content-left">
          <div className="feature-header">
            <div className="feature-icon">🚀</div>
            <h2 className="feature-title">Startup Simulation</h2>
            <p className="feature-description">Experience the journey of building a startup in a risk-free environment</p>
          </div>

          <ul className="feature-list">
            <li>Market analysis</li>
            <li>Product development</li>
            <li>Team building</li>
            <li>Financial planning</li>
            <li>Growth strategies</li>
          </ul>

          <div className="feature-stats">
            <div className="stat">
              <span className="stat-number">100+</span>
              <span className="stat-label">Scenarios</span>
            </div>
            <div className="stat">
              <span className="stat-number">30+</span>
              <span className="stat-label">Industries</span>
            </div>
          </div>
        </div>

        <div className="feature-content-right">
          <div className="feature-animation">
            <StartupSimulationAnimation />
          </div>

          <div className="feature-buttons">
            <button className="primary-btn" onClick={handleStartStartup}>
              <FiTarget className="btn-icon" />
              <span className="btn-text">Start Startup</span>
            </button>
            <button className="secondary-btn" onClick={handleJoinStartup}>
              <FiUsers className="btn-icon" />
              <span className="btn-text">Join Startup</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartupCoursePanel; 