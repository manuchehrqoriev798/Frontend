import React from 'react';
import StartupSimulationAnimation from './animations/StartupSimulationAnimation';

const StartupCoursePanel = () => {
  return (
    <div className="panel feature-panel startup-course">
      <div className="feature-content">
        <div className="feature-main">
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

        <div className="feature-animation">
          <div className="startupSimulationAnimation">
            <StartupSimulationAnimation />
          </div>
        </div>

        <div className="feature-buttons">
          <button className="primary-btn">
            <span className="btn-icon">🎮</span>
            <span className="btn-text">Start Simulation</span>
          </button>
          <button className="secondary-btn">
            <span className="btn-icon">📊</span>
            <span className="btn-text">View Results</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default StartupCoursePanel; 