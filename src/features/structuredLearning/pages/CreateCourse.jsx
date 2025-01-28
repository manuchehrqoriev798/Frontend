import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './CreateCourse.css';

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    name: '',
    description: '',
    goal: '',
    timeline: '',
    prerequisites: [],
    corequisites: [],
    resources: []
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here
    console.log('Course data:', courseData);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="create-course-container">
      <NavbarDashboard />
      
      <main className="create-course-content">
        <h1>Create New Course</h1>
        
        <form onSubmit={handleSubmit} className="course-form">
          <div className="form-group">
            <label htmlFor="name">Course Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={courseData.name}
              onChange={handleInputChange}
              placeholder="Enter course name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <textarea
              id="description"
              name="description"
              value={courseData.description}
              onChange={handleInputChange}
              placeholder="Describe your course"
              rows="4"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="goal">Main Goal</label>
            <input
              type="text"
              id="goal"
              name="goal"
              value={courseData.goal}
              onChange={handleInputChange}
              placeholder="What is the main goal of this course?"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="timeline">Target Timeline</label>
            <input
              type="text"
              id="timeline"
              name="timeline"
              value={courseData.timeline}
              onChange={handleInputChange}
              placeholder="e.g., 8 weeks"
              required
            />
          </div>

          <div className="button-group">
            <button type="submit" className="create-button">
              Create Course
            </button>
            <button type="button" className="cancel-button">
              Cancel
            </button>
          </div>
        </form>
      </main>

      <Footer />
    </div>
  );
};

export default CreateCourse;
