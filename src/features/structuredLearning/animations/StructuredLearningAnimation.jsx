import React, { useEffect, useRef, useState } from 'react';
import './StructuredLearningAnimation.css';
import ReactConfetti from 'react-confetti';

const StructuredLearningAnimation = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [courseFoundVisible, setCourseFoundVisible] = useState(false);

  const typeText = (text) => {
    let currentText = '';
    const typeInterval = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setTypedText(currentText);
      } else {
        clearInterval(typeInterval);
      }
    }, 50);
  };

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;
    let animationTimeout;

    // Update window size for confetti
    const updateWindowSize = () => {
      setWindowSize({
        width: container?.offsetWidth || 0,
        height: container?.offsetHeight || 0
      });
    };
    updateWindowSize();
    window.addEventListener('resize', updateWindowSize);
    return () => window.removeEventListener('resize', updateWindowSize);
  }, []);

  useEffect(() => {
    const cursor = cursorRef.current;
    const container = containerRef.current;
    let animationTimeout;

    const runAnimation = async () => {
      const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms));

      while (true) {
        // Reset all states
        setFormVisible(false);
        setSuccessVisible(false);
        setTypedText('');
        setShowConfetti(false);
        setSearchVisible(false);
        setSearchText('');
        setCoursesVisible(false);
        setCourseFoundVisible(false);

        // Move cursor to the Create Course button position
        cursor.style.transform = 'translate(350px, 720px)';
        await wait(1000);

        // Click animation on Create Course button
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show form and move cursor to course name input
        setFormVisible(true);
        await wait(500);
        cursor.style.transform = 'translate(280px, 100px)';
        await wait(500);

        // Type course name
        typeText('Machine Learning Fundamentals');
        await wait(2000);

        await wait(500);
        // Move to create button in form
        cursor.style.transform = 'translate(380px, 610px)';
        await wait(500);
        // Click animation on form create button
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Hide form and show success message with confetti
        setFormVisible(false);
        await wait(500);
        setShowConfetti(true);
        setSuccessVisible(true);
        await wait(2000);

        // Reset success message and confetti
        setShowConfetti(false);
        setSuccessVisible(false);
        await wait(1000);

        // Move to View Courses button
        cursor.style.transform = 'translate(660px, 720px)';
        await wait(1000);

        // Click animation on View Courses button
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show search interface
        setSearchVisible(true);
        await wait(500);

        // Move cursor to search input
        cursor.style.transform = 'translate(80px, 450px)';
        await wait(500);

        // Type in search using the typeText function
        typeText('Machine Learning');
        await wait(2000);

        // Show course results
        setCoursesVisible(true);
        await wait(1000);

        // Move to and click the course card
        cursor.style.transform = 'translate(280px, 480px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Hide search interface and show found message
        setSearchVisible(false);
        setCoursesVisible(false);
        setShowConfetti(true);
        await wait(500);
        setCourseFoundVisible(true);
        await wait(2000);
        setShowConfetti(false);
        setCourseFoundVisible(false);
        await wait(1000);
      }
    };

    runAnimation();

    return () => {
      clearTimeout(animationTimeout);
    };
  }, []);

  return (
    <div ref={containerRef} className="animation-container">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
        />
      )}
      <div ref={cursorRef} className="cursor">
        <div className="cursor-pointer"></div>
      </div>

      {/* Create Course Form */}
      <div className={`course-form ${formVisible ? 'visible' : ''}`}>
        <div className="form-header">Create New Course</div>
        
        <div className="form-group">
          <label>Course Name</label>
          <input type="text" value={typedText} readOnly />
        </div>

        <div className="form-group">
          <label>Main Goal</label>
          <input type="text" placeholder="e.g., Build and Deploy ML Models" readOnly />
        </div>

        <div className="form-group">
          <label>Target Timeline</label>
          <input type="text" placeholder="Duration" readOnly />
        </div>

        <div className="form-group">
          <label>Prerequisites</label>
          <div className="prerequisites-tags">
            <span>💻 Basic Programming</span>
            <button className="add-prerequisite">+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Corequisites</label>
          <div className="corequisites-section">
            <div className="subject-row">
              <span>📐 Linear Algebra</span>
              <button className="remove-subject">×</button>
            </div>
            <button className="add-subject">+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Resources</label>
          <div className="resource-tags">
            <span>📚 Files </span>
            <span>🎥 Videos</span>
            <span>💻 Code Examples</span>
          </div>
        </div>

        <button className="create-btn">Create Course</button>
      </div>

      {/* Success Message */}
      <div className={`success-message ${successVisible ? 'visible' : ''}`}>
        Course created successfully! 🎉
      </div>

      {/* Search Interface */}
      <div className={`search-course ${searchVisible ? 'visible' : ''}`}>
        <div className="search-header">
          <h2>Explore Courses</h2>
          <p>Find your perfect learning path</p>
        </div>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" value={typedText} readOnly placeholder="Search courses..." />
        </div>
        
        {coursesVisible && (
          <div className="course-results">
            <div className="results-header">Found 2 courses matching "Machine Learning"</div>
            <div className="course-grid">
              <div className="course-card">
                <div className="course-icon">🤖</div>
                <h3>Machine Learning Fundamentals</h3>
                <p>Learn the basics of ML algorithms and implementations</p>
                <div className="course-meta">
                  <span>📚 12 Lessons</span>
                  <span>⏱️ 6 weeks</span>
                </div>
              </div>
              <div className="course-card">
                <div className="course-icon">🧠</div>
                <h3>Advanced ML Techniques</h3>
                <p>Deep learning and neural networks</p>
                <div className="course-meta">
                  <span>📚 15 Lessons</span>
                  <span>⏱️ 8 weeks</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Course Found Message */}
      <div className={`success-message ${courseFoundVisible ? 'visible' : ''}`}>
        Course found! Ready to start learning 🚀
      </div>
    </div>
  );
};

export default StructuredLearningAnimation;
