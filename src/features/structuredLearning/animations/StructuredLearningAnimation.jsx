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
        // Reset states
        setFormVisible(false);
        setSuccessVisible(false);
        setTypedText('');
        setShowConfetti(false);

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
        cursor.style.transform = 'translate(280px, 380px)';
        await wait(500);

        // Type course name
        typeText('Machine Learning Fundamentals');
        await wait(2000);

        // Move to create button in form
        cursor.style.transform = 'translate(380px, 490px)';
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
          <label>Resources</label>
          <div className="resource-tags">
            <span>📚 Textbooks</span>
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
    </div>
  );
};

export default StructuredLearningAnimation;
