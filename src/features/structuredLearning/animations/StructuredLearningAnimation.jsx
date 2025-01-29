import React, { useEffect, useRef, useState } from 'react';
import './StructuredLearningAnimation.css';
import ReactConfetti from 'react-confetti';
import { useNavigate } from 'react-router-dom';

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
  const [courseDetailsVisible, setCourseDetailsVisible] = useState(false);
  const navigate = useNavigate();

  const typeText = (text) => {
    // Start with empty text
    setTypedText('');
    
    let currentText = '';
    const typeInterval = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setTypedText(currentText);
      } else {
        clearInterval(typeInterval);
        // Clear text after typing is complete
        setTimeout(() => {
          setTypedText('');
        }, 1000); // Wait 1 second before clearing
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
        await wait(500);
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

  const handleViewCourses = () => {
    navigate('/course-catalog');
  };

  return (
    <div ref={containerRef} className="animation-container-structured-animation">
      {showConfetti && (
        <ReactConfetti
          width={windowSize.width}
          height={windowSize.height}
          recycle={false}
          numberOfPieces={200}
          gravity={0.2}
          style={{
            position: 'absolute',
            pointerEvents: 'none'
          }}
        />
      )}
      <div ref={cursorRef} className="cursor-structured-animation">
        <div className="cursor-pointer-structured-animation"></div>
      </div>

      {/* Create Course Form */}
      <div className={`course-form-structured-animation ${formVisible ? 'visible' : ''}`}>
        <div className="form-header-structured-animation">Create New Course</div>
        
        <div className="form-group-structured-animation">
          <label>Course Name</label>
          <input type="text" value={typedText} readOnly />
        </div>

        <div className="form-group-structured-animation">
          <label>Main Goal</label>
          <input type="text" placeholder="e.g., Build and Deploy ML Models" readOnly />
        </div>

        <div className="form-group-structured-animation">
          <label>Target Timeline</label>
          <input type="text" placeholder="Duration" readOnly />
        </div>

        <div className="form-group-structured-animation">
          <label>Prerequisites</label>
          <div className="prerequisites-tags-structured-animation">
            <span>💻 Basic Programming</span>
            <button className="add-prerequisite-structured-animation">+</button>
          </div>
        </div>

        <div className="form-group-structured-animation">
          <label>Corequisites</label>
          <div className="corequisites-section-structured-animation">
            <div className="subject-row-structured-animation">
              <span>📐 Linear Algebra</span>
              <button className="remove-subject-structured-animation">×</button>
            </div>
            <button className="add-subject-structured-animation">+</button>
          </div>
        </div>

        <div className="form-group-structured-animation">
          <label>Resources</label>
          <div className="resource-tags-structured-animation">
            <span>📚 Files </span>
            <span>🎥 Videos</span>
            <span>💻 Code Examples</span>
          </div>
        </div>

        <button className="create-btn-structured-animation">Create Course</button>
      </div>

      {/* Success Message */}
      <div className={`success-message-structured-animation ${successVisible ? 'visible' : ''}`}>
        Course created successfully! 🎉
      </div>

      {/* Search Interface */}
      <div className={`search-course-structured-animation ${searchVisible ? 'visible' : ''}`}>
        <div className="search-header-structured-animation">
          <h2>Explore Courses</h2>
          <p>Find your perfect learning path</p>
        </div>
        <div className="search-structured-bar-structured-animation">
          <span className="search-icon-structured-animation">🔍</span>
          <input type="text" value={typedText} readOnly placeholder="Search courses..." />
        </div>
        
        {coursesVisible && (
          <div className="course-results-structured-animation">
            <div className="results-header-structured-animation">Found 2 courses matching "Machine Learning"</div>
            <div className="course-grid-structured-animation">
              <div className="course-card-structured-animation">
                <div className="course-icon-structured-animation">🤖</div>
                <h3> Machine Learning Fundamentals </h3>
                <p>Learn the basics of ML algorithms and implementations</p>
                <div className="course-meta-structured-animation">
                  <span>📚 12 Lessons</span>
                  <span>⏱️ 6 weeks</span>
                </div>
              </div>
              <div className="course-card-structured-animation">
                <div className="course-icon-structured-animation">🧠</div>
                <h3>Advanced ML Techniques</h3>
                <p>Deep learning and neural networks</p>
                <div className="course-meta-structured-animation">
                  <span>📚 15 Lessons</span>
                  <span>⏱️ 8 weeks</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Course Found Message */}
      <div className={`success-message-structured-animation ${courseFoundVisible ? 'visible' : ''}`}>
        Course found! Ready to start learning 🚀
      </div>

      {/* Course Details Section */}
      <div className={`course-details-structured-animation ${courseDetailsVisible ? 'visible' : ''}`}>
        <div className="course-header-structured-animation">
          {/* header content */}
        </div>
        
        <div className="course-stats-structured-animation">
          <div className="stat-structured-animation">
            <div className="stat-icon-structured-animation">
              {/* icon content */}
            </div>
            <span className="stat-value-structured-animation">
              {/* value content */}
            </span>
            <span className="stat-label-structured-animation">
              {/* label content */}
            </span>
          </div>
          {/* Additional stats follow the same pattern */}
        </div>
      </div>

    </div>
  );
};

export default StructuredLearningAnimation;
