import React, { useEffect, useRef, useState } from 'react';
import './StartupSimulationAnimation.css';
import ReactConfetti from 'react-confetti';

const StartupSimulationAnimation = () => {
  const containerRef = useRef(null);
  const cursorRef = useRef(null);
  const [formVisible, setFormVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [courseFoundVisible, setCourseFoundVisible] = useState(false);

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

        // Move cursor to Create Simulation button
        cursor.style.transform = 'translate(350px, 720px)';
        await wait(1000);

        // Click animation
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show form and move cursor
        setFormVisible(true);
        await wait(500);
        cursor.style.transform = 'translate(280px, 100px)';
        await wait(500);

        // Type simulation name
        typeText('Tech Startup Accelerator');
        await wait(2000);

        // Move to create button
        cursor.style.transform = 'translate(380px, 610px)';
        await wait(500);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show success and confetti
        setFormVisible(false);
        await wait(500);
        setShowConfetti(true);
        setSuccessVisible(true);
        await wait(2000);

        // Reset success message
        setShowConfetti(false);
        setSuccessVisible(false);
        await wait(1000);

        // Move to View Simulations button
        cursor.style.transform = 'translate(660px, 720px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show search interface
        setSearchVisible(true);
        await wait(500);

        // Move to search and type
        cursor.style.transform = 'translate(80px, 450px)';
        await wait(500);
        typeText('Tech Startup');
        await wait(2000);

        // Show results
        setCoursesVisible(true);
        await wait(1000);

        // Select simulation
        cursor.style.transform = 'translate(280px, 480px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Show completion
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

  const typeText = (text) => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setTypedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <div ref={containerRef} className="animation-container">
      {/* ... existing confetti and cursor code ... */}

      {/* Startup Simulation Form */}
      <div className={`simulation-form ${formVisible ? 'visible' : ''}`}>
        <div className="form-header">Create New Simulation</div>
        
        <div className="form-group">
          <label>Simulation Name</label>
          <input type="text" value={typedText} readOnly />
        </div>

        <div className="form-group">
          <label>Industry</label>
          <input type="text" placeholder="e.g., Technology, Healthcare" readOnly />
        </div>

        <div className="form-group">
          <label>Initial Capital</label>
          <input type="text" placeholder="Starting Budget" readOnly />
        </div>

        <div className="form-group">
          <label>Team Size</label>
          <div className="team-size-tags">
            <span>👥 Small (1-5)</span>
            <button className="add-team">+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Market Conditions</label>
          <div className="market-section">
            <div className="condition-row">
              <span>📈 Growing Market</span>
              <button className="remove-condition">×</button>
            </div>
            <button className="add-condition">+</button>
          </div>
        </div>

        <div className="form-group">
          <label>Challenges</label>
          <div className="challenge-tags">
            <span>💰 Funding</span>
            <span>🎯 Market Fit</span>
            <span>📊 Growth</span>
          </div>
        </div>

        <button className="create-btn">Start Simulation</button>
      </div>

      {/* Success Message */}
      <div className={`success-message ${successVisible ? 'visible' : ''}`}>
        Simulation created successfully! 🚀
      </div>

      {/* Search Interface */}
      <div className={`search-simulation ${searchVisible ? 'visible' : ''}`}>
        <div className="search-header">
          <h2>Browse Simulations</h2>
          <p>Find your startup challenge</p>
        </div>
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" value={typedText} readOnly placeholder="Search simulations..." />
        </div>
        
        {coursesVisible && (
          <div className="simulation-results">
            <div className="results-header">Found 2 simulations matching "Tech Startup"</div>
            <div className="simulation-grid">
              <div className="simulation-card">
                <div className="simulation-icon">🚀</div>
                <h3>Tech Startup Accelerator</h3>
                <p>Launch and scale a tech startup from scratch</p>
                <div className="simulation-meta">
                  <span>💰 $1M Budget</span>
                  <span>⏱️ 12 Rounds</span>
                </div>
              </div>
              <div className="simulation-card">
                <div className="simulation-icon">💻</div>
                <h3>SaaS Venture</h3>
                <p>Build a successful SaaS business</p>
                <div className="simulation-meta">
                  <span>💰 $500K Budget</span>
                  <span>⏱️ 8 Rounds</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Simulation Found Message */}
      <div className={`success-message ${courseFoundVisible ? 'visible' : ''}`}>
        Simulation ready! Let's build your startup 🚀
      </div>
    </div>
  );
};

export default StartupSimulationAnimation;
