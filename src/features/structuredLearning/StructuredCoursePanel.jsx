import React from 'react';
import StructuredLearningAnimation from './animations/StructuredLearningAnimation';
import { useNavigate } from 'react-router-dom';
import { FiBookOpen, FiSearch } from 'react-icons/fi';

const StructuredCoursePanel = () => {
  const navigate = useNavigate();

  const handleCreateCourse = () => {
    navigate('/create-course');
  };

  const handleViewCourses = () => {
    navigate('/course-catalog');
  };

  return (
    <div className="panel feature-panel structured-course">
      <div className="feature-content">
        <div className="feature-content-left">
          <div className="feature-header">
            <div className="feature-icon">🎓</div>
            <h2 className="feature-title">Structured Course</h2>
            <p className="feature-description">Define your goals and let AI create your perfect learning path</p>
          </div>

          <ul className="feature-list">
            <li>Personalized curriculum</li>
            <li>Interactive lessons</li>
            <li>Progress tracking</li>
            <li>AI-powered feedback</li>
            <li>Adaptive learning path</li>
          </ul>

          <div className="feature-stats">
            <div className="stat">
              <span className="stat-number">500+</span>
              <span className="stat-label">Exercises</span>
            </div>
            <div className="stat">
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects</span>
            </div>
          </div>
        </div>

        <div className="feature-content-right">
          <div className="feature-animation">
            <StructuredLearningAnimation />
          </div>

          <div className="feature-buttons">
            <button className="primary-btn" onClick={handleCreateCourse}>
              <FiBookOpen className="btn-icon" />
              <span className="btn-text">Create Course</span>
            </button>
            <button className="secondary-btn" onClick={handleViewCourses}>
              <FiSearch className="btn-icon" />
              <span className="btn-text">View Courses</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StructuredCoursePanel; 