import React from 'react';
import EngineeringMindsetAnimation from './animations/EngineeringMindsetAnimation';

const EngineeringMindsetPanel = () => {
  return (
    <div className="panel feature-panel engineering-mindset">
      <div className="feature-content">
        <div className="feature-content-left">
          <div className="feature-header">
            <div className="feature-icon">🧠</div>
            <h2 className="feature-title">Engineering Mindset</h2>
            <p className="feature-description">Develop problem-solving skills through real engineering challenges</p>
          </div>

          <ul className="feature-list">
            <li>Problem-solving techniques</li>
            <li>System design challenges</li>
            <li>Code optimization</li>
            <li>Engineering best practices</li>
            <li>Real-world applications</li>
          </ul>

          <div className="feature-stats">
            <div className="stat">
              <span className="stat-number">300+</span>
              <span className="stat-label">Challenges</span>
            </div>
            <div className="stat">
              <span className="stat-number">20+</span>
              <span className="stat-label">Categories</span>
            </div>
          </div>
        </div>

        <div className="feature-content-right">
          <div className="feature-animation">
            <EngineeringMindsetAnimation />
          </div>

          <div className="feature-buttons">
            <button className="primary-btn">
              <span className="btn-icon">🎯</span>
              <span className="btn-text">Solve Challenge</span>
            </button>
            <button className="secondary-btn">
              <span className="btn-icon">🏆</span>
              <span className="btn-text">Join Contests</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EngineeringMindsetPanel; 