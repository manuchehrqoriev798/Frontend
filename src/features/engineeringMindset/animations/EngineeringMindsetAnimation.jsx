import React, { useEffect, useRef, useState } from 'react';
import './EngineeringMindsetAnimation.css';
import ReactConfetti from 'react-confetti';

const EngineeringMindsetAnimation = () => {
  const cursorRef = useRef(null);
  const containerRef = useRef(null);
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined
  });
  const [formVisible, setFormVisible] = useState(false);
  const [successVisible, setSuccessVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [searchVisible, setSearchVisible] = useState(false);
  const [coursesVisible, setCoursesVisible] = useState(false);
  const [challengeFoundVisible, setChallengeFoundVisible] = useState(false);
  const [problemViewVisible, setProblemViewVisible] = useState(false);
  const [codeSubmitted, setCodeSubmitted] = useState(false);

  const typeText = (text) => {
    setTypedText('');
    let currentText = '';
    const typeInterval = setInterval(() => {
      if (currentText.length < text.length) {
        currentText += text[currentText.length];
        setTypedText(currentText);
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setTypedText('');
        }, 1000);
      }
    }, 50);
  };

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
        setSearchVisible(false);
        setCoursesVisible(false);
        setChallengeFoundVisible(false);
        setProblemViewVisible(false);
        setCodeSubmitted(false);

        // Move cursor to Start Challenge button
        cursor.style.transform = 'translate(330px, 720px)';
        await wait(1000);

        // Click animation
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show search interface with pre-loaded problems
        setSearchVisible(true);
        setCoursesVisible(true);
        await wait(500);

        // Move to "Start Challenge" button on problem card
        cursor.style.transform = 'translate(220px, 600px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Show problem view
        setSearchVisible(false);
        setCoursesVisible(false);
        setProblemViewVisible(true);
        await wait(1000);

        // Move to Submit Solution button (updated coordinates)
        cursor.style.transform = 'translate(780px, 620px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Hide problem view immediately after clicking submit
        setProblemViewVisible(false);

        // Show success message and confetti
        setCodeSubmitted(true);
        setShowConfetti(true);
        await wait(2000);
        setShowConfetti(false);
        setCodeSubmitted(false);
        await wait(1000);

        // Move to Join Contests button
        cursor.style.transform = 'translate(660px, 720px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show contest interface
        setFormVisible(true);
        await wait(1000);

        // Move to Register Now button
        cursor.style.transform = 'translate(230px, 455px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Show registration success
        setFormVisible(false);
        setShowConfetti(true);
        setSuccessVisible(true);
        await wait(2000);
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

  useEffect(() => {
    const container = containerRef.current;
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

  return (
    <div ref={containerRef} className="animation-container-engineering-animation">
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
      <div ref={cursorRef} className="cursor-engineering-animation">
        <div className="cursor-pointer-engineering-animation"></div>
      </div>

      {/* Search Problems Interface */}
      <div className={`search-problems-engineering-animation ${searchVisible ? 'visible' : ''}`}>
        <div className="search-header-engineering-animation">
          <h2>Engineering Challenges</h2>
          <p>Real-world problems for real-world engineers</p>
        </div>

        {/* Study Plans Section */}
        <div className="study-plans-section-engineering-animation">
          <div className="study-plans-list-engineering-animation">
            <div className="study-plan-item-engineering-animation">
              <h3>Top Interview 150</h3>
              <p>Must-do List for Interview Prep challenges</p>
            </div>

            <div className="study-plan-item-engineering-animation">
              <h3>QuadCode 75</h3>
              <p>Ace Coding Interview with 75 challenges</p>
            </div>

            <div className="study-plan-item-engineering-animation">
              <h3>JavaScript 30</h3>
              <p>Learn JS Basics with 30 Challenges</p>
            </div>
          </div>
        </div>

        {/* Filter Section */}
        <div className="filter-container-engineering-animation">
          <div className="filter-group-engineering-animation">
            <select className="filter-select-engineering-animation">
              <option value="">Topic</option>
              <option value="algorithms">Algorithms</option>
              <option value="system-design">System Design</option>
              <option value="databases">Databases</option>
              <option value="machine-learning">Machine Learning</option>
            </select>

            <select className="filter-select-engineering-animation">
              <option value="">Status</option>
              <option value="not-attempted">Not Attempted</option>
              <option value="in-progress">In Progress</option>
              <option value="completed">Completed</option>
            </select>

            <select className="filter-select-engineering-animation">
              <option value="">Difficulty</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>

            <div className="compact-search-engineering-animation">
              <span className="search-icon-engineering-animation">🔍</span>
              <input 
                type="text" 
                value={typedText} 
                readOnly 
                placeholder="Search problems..." 
              />
            </div>
          </div>
        </div>

        {/* Challenge Grid */}
        {coursesVisible && (
          <div className="problems-grid-engineering-animation">
            <div className="problem-card-engineering-animation featured">
              <div className="problem-header-engineering-animation">
                <span className="problem-icon-engineering-animation">🚁</span>
                <span className="difficulty-badge-engineering-animation advanced">Advanced</span>
              </div>
              <h3>Drone Delivery System</h3>
              <p>Design an efficient drone delivery system optimizing for battery life and delivery time</p>
              <div className="problem-meta-engineering-animation">
                <span className="acceptance-rate-engineering-animation">Acceptance: 65%</span>
                <span className="submissions-engineering-animation">12.5K submissions</span>
              </div>
              <div className="problem-tags-engineering-animation">
                <span>Algorithms</span>
                <span>Optimization</span>
                <span>System Design</span>
              </div>
              <button className="start-challenge-btn-engineering-animation">Solve Challenge</button>
            </div>

            <div className="problem-card-engineering-animation">
              <div className="problem-header-engineering-animation">
                <span className="problem-icon-engineering-animation">🌐</span>
                <span className="difficulty-badge-engineering-animation medium">Medium</span>
              </div>
              <h3>Social Media Feed</h3>
              <p>Build a scalable content delivery system with real-time updates</p>
              <div className="problem-meta-engineering-animation">
                <span className="acceptance-rate-engineering-animation">Acceptance: 72%</span>
                <span className="submissions-engineering-animation">8.3K submissions</span>
              </div>
              <div className="problem-tags-engineering-animation">
                <span>Scaling</span>
                <span>Real-time</span>
                <span>Databases</span>
              </div>
              <button className="start-challenge-btn-engineering-animation">Solve Challenge</button>
            </div>
   
          </div>
        )}
      </div>

      {/* Contest Interface */}
      <div className={`search-problems-engineering-animation ${formVisible ? 'visible' : ''}`}>
        <div className="search-header-engineering-animation">
          <h2>Engineering Contests</h2>
          <p>Compete with other engineers in real-world challenges</p>
        </div>

        <div className="contest-grid-engineering-animation">
          <div className="contest-card-engineering-animation active">
            <div className="contest-status-engineering-animation">
              <span className="status-badge-engineering-animation live">Live Now</span>
              <span className="participants-engineering-animation">👥 234 participating</span>
            </div>
            <h3>System Design Championship</h3>
            <p>Design scalable systems for real-world scenarios</p>
            <div className="contest-meta-engineering-animation">
              <span>⏱️ Duration: 5 hours</span>
              <span>🌐 Open Contest</span>
            </div>
            <button className="register-btn-engineering-animation">Register Now</button>
          </div>

          <div className="contest-card-engineering-animation upcoming">
            <div className="contest-status-engineering-animation">
              <span className="status-badge-engineering-animation upcoming">Starting Soon</span>
              <span className="participants-engineering-animation">👥 156 registered</span>
            </div>
            <h3>AI Engineering Challenge</h3>
            <p>Build and optimize AI models for production</p>
            <div className="contest-meta-engineering-animation">
              <span>⏱️ Duration: 5 hours</span>
              <span>🔒 Private Contest</span>
            </div>
            <button className="register-btn-engineering-animation">Register Now</button>
          </div>
        </div>
      </div>

      {/* Problem View Interface */}
      <div className={`problem-view-engineering-animation ${problemViewVisible ? 'visible' : ''}`}>
        <div className="problem-description-engineering-animation">
          <h2>Drone Delivery System</h2>
          <div className="difficulty-levels-engineering-animation">
            <div className="difficulty-level-engineering-animation completed">Level 1</div>
            <div className="difficulty-level-engineering-animation active">Level 2</div>
            <div className="difficulty-level-engineering-animation">Level 3</div>
            <div className="difficulty-level-engineering-animation">Level 4</div>
            <div className="difficulty-level-engineering-animation">Level 5</div>
          </div>
          
          <div className="problem-content-engineering-animation">
            <h3>Problem Description</h3>
            <p>[Detailed description of the drone delivery system optimization problem will be displayed here]</p>
            
            <h3>Input Format</h3>
            <pre>
              {`[Input format and example will be shown here]`}
            </pre>

            <h3>Expected Output</h3>
            <pre>
              {`[Expected output format and example will be shown here]`}
            </pre>
          </div>
        </div>

        <div className="code-editor-engineering-animation">
          <div className="editor-header-engineering-animation">
            <select className="language-select-engineering-animation">
              <option value="python">Python</option>
              <option value="javascript">JavaScript</option>
              <option value="java">Java</option>
            </select>
          </div>
          <div className="editor-content-engineering-animation">
            <pre className="code-area-engineering-animation">
              {`def optimize_drone_delivery(drones, packages):
    # Your code here
    return {
        "routes": []
    }`}
            </pre>
          </div>
          <div className="editor-footer-engineering-animation">
            <button className="run-code-btn-engineering-animation">Run Code</button>
            <button className="submit-code-btn-engineering-animation">Submit Solution</button>
          </div>
        </div>
      </div>

      {/* Success Messages */}
      <div className={`success-message-engineering-animation ${challengeFoundVisible ? 'visible' : ''}`}>
        Great job! You've solved a real-world engineering challenge! 🎯
      </div>
      <div className={`success-message-engineering-animation ${successVisible ? 'visible' : ''}`}>
        Successfully registered for the contest! Get ready to compete! 🏆
      </div>
      <div className={`success-message-engineering-animation ${codeSubmitted ? 'visible' : ''}`}>
        Congratulations! Your solution passed all test cases! 🎉
      </div>
    </div>
  );
};

export default EngineeringMindsetAnimation;
