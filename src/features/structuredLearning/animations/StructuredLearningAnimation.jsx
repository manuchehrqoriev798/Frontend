import React, { useEffect, useRef, useState } from 'react';

const StructuredLearningAnimation = () => {
  const [currentAnimation, setCurrentAnimation] = useState('idle');
  const [typedTitle, setTypedTitle] = useState('');
  const [typedDescription, setTypedDescription] = useState('');
  const cursorRef = useRef(null);
  const containerRef = useRef(null);

  const animationSequence = async () => {
    // Reset states
    setCurrentAnimation('idle');
    setTypedTitle('');
    setTypedDescription('');
    await delay(1000);

    // Create Course Sequence
    await createCourseSequence();
    await delay(2000);
    
    // View Courses Sequence
    await viewCoursesSequence();
    await delay(2000);
    
    // Restart sequence
    animationSequence();
  };

  const createCourseSequence = async () => {
    // Move cursor to create course button (positioned relative to the feature panel)
    await moveCursor({ x: 50, y: 250 }); // Adjusted to target .feature-buttons
    await delay(500);
    
    // Click animation
    cursorRef.current.style.transform += ' scale(0.9)';
    await delay(100);
    cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.9)', '');
    
    // Show create course interface
    setCurrentAnimation('create-course-form');
    await delay(1000);

    // Move to title input and type
    await moveCursor({ x: 50, y: 100 });
    await delay(500);
    await typeText('Advanced AI Development', setTypedTitle);
    await delay(500);

    // Move to description input and type
    await moveCursor({ x: 50, y: 180 });
    await delay(500);
    await typeText('Learn to build AI systems with hands-on projects', setTypedDescription);
    await delay(500);

    // Move to submit button and click
    await moveCursor({ x: 200, y: 250 });
    await delay(500);
    
    // Click animation
    cursorRef.current.style.transform += ' scale(0.9)';
    await delay(100);
    cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.9)', '');
    
    // Show success message
    setCurrentAnimation('create-course-success');
    await delay(2000);
  };

  const viewCoursesSequence = async () => {
    // Reset states
    setCurrentAnimation('idle');
    await delay(500);

    // Move cursor to view courses button (positioned relative to the feature panel)
    await moveCursor({ x: 200, y: 250 }); // Adjusted to target .feature-buttons
    await delay(500);
    
    // Click animation
    cursorRef.current.style.transform += ' scale(0.9)';
    await delay(100);
    cursorRef.current.style.transform = cursorRef.current.style.transform.replace(' scale(0.9)', '');
    
    // Show course search interface
    setCurrentAnimation('view-courses');
    await delay(500);
    
    // Move to search input and type
    await moveCursor({ x: 50, y: 100 });
    await delay(500);
    await typeText('Python Machine Learning', setTypedTitle);
    await delay(500);
    
    // Show search results
    setCurrentAnimation('course-results');
    await delay(2000);
  };

  const moveCursor = async (position) => {
    if (cursorRef.current && containerRef.current) {
      cursorRef.current.style.transform = `translate(${position.x}px, ${position.y}px)`;
      await delay(300);
    }
  };

  const typeText = async (text, setTextFunction) => {
    for (let i = 0; i <= text.length; i++) {
      setTextFunction(text.slice(0, i));
      await delay(50);
    }
  };

  const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

  useEffect(() => {
    animationSequence();
  }, []);

  return (
    <div ref={containerRef} className="feature-animation">
      <div ref={cursorRef} className="animated-cursor" />

      {/* Create Course Interface */}
      <div className={`mock-interface ${currentAnimation === 'create-course-form' ? 'active' : ''}`}>
        <h3>Create Your Course</h3>
        <div className="form-group">
          <label>Course Title:</label>
          <input 
            className="mock-input" 
            type="text" 
            value={typedTitle}
            readOnly 
          />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea 
            className="mock-input" 
            value={typedDescription}
            readOnly 
          />
        </div>
        <button className="mock-button">Create Course</button>
      </div>

      {/* View Courses Interface */}
      <div className={`mock-interface ${currentAnimation === 'view-courses' ? 'active' : ''}`}>
        <h3>Course Catalog</h3>
        <input 
          className="mock-input" 
          type="search" 
          value={typedTitle}
          readOnly 
          placeholder="Search courses..." 
        />
        <div className={`search-results ${currentAnimation === 'course-results' ? 'active' : ''}`}>
          <div className="course-item">Python Basics</div>
          <div className="course-item">Advanced Machine Learning</div>
          <div className="course-item">Web Development</div>
        </div>
      </div>

      {/* Success Message */}
      <div className={`success-message ${currentAnimation === 'create-course-success' ? 'active' : ''}`}>
        Course Created Successfully! 🎉
      </div>
    </div>
  );
};

export default StructuredLearningAnimation;
