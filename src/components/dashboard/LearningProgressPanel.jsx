import React from 'react';

const LearningProgressPanel = () => {
  const courses = [
    { name: 'Python Basics', progress: 80 },
    { name: 'Web Development', progress: 45 },
    { name: 'Data Structures', progress: 30 }
  ];

  return (
    <div className="panel progress-panel">
      <h3>Learning Progress</h3>
      <div className="progress-list">
        {courses.map((course, index) => (
          <div key={index} className="progress-item">
            <div className="course-info">
              <span className="course-name">{course.name}</span>
              <span className="progress-percentage">{course.progress}%</span>
            </div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${course.progress}%` }}></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LearningProgressPanel;
