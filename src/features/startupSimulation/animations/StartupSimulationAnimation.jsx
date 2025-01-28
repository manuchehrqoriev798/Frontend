import React, { useEffect, useRef, useState } from 'react';
import './StartupSimulationAnimation.css';
import ReactConfetti from 'react-confetti';

const StartupSimulationAnimation = () => {
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
        }, 3000);
      }
    }, 50);
  };

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

  useEffect(() => {
    const cursor = cursorRef.current;
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

        // First sequence: Start Startup button click
        cursor.style.transform = 'translate(370px, 720px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Show startup form
        setFormVisible(true);
        await wait(1500);

        // Type in startup name
        cursor.style.transform = 'translate(180px, 120px)';
        await wait(500);
        typeText('Drone Delivery Startup');
        await wait(2000);

        // Click create startup button
        cursor.style.transform = 'translate(380px, 610px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Hide form and show success
        setFormVisible(false);
        await wait(500);
        setShowConfetti(true);
        setSuccessVisible(true);
        await wait(2000);

        // Reset success and confetti
        setShowConfetti(false);
        setSuccessVisible(false);
        await wait(1000);

        // Second sequence: Join Startup button click
        cursor.style.transform = 'translate(670px, 720px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');
        await wait(500);

        // Only now show the search interface
        setSearchVisible(true);
        await wait(1000);

        // Type in search
        cursor.style.transform = 'translate(80px, 400px)';
        await wait(500);
        typeText('Tech Startup');
        await wait(1000);

        // Show results after typing
        setCoursesVisible(true);
        await wait(1000);

        // Select a startup
        cursor.style.transform = 'translate(230px, 550px)';
        await wait(1000);
        cursor.classList.add('clicking');
        await wait(500);
        cursor.classList.remove('clicking');

        // Hide search and show completion
        setSearchVisible(false);
        setCoursesVisible(false);
        await wait(500);
        setShowConfetti(true);
        setCourseFoundVisible(true);
        await wait(2000);

        // Reset all
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
    <div ref={containerRef} className="animation-container-startup-animation">
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
      <div ref={cursorRef} className="cursor-startup-animation"></div>

      {/* Create New Startup Form */}
      <div className={`startup-form-startup-animation ${formVisible ? 'visible' : ''}`}>
        <div className="form-header-startup-animation">
          <h2>Create New Startup</h2>
        </div>
        
        <div className="form-group-startup-animation">
          <label>Startup Name</label>
          <input 
            type="text" 
            value={typedText} 
            readOnly 
            placeholder="Enter your startup name" 
          />
        </div>

        <div className="form-group-startup-animation">
          <label>What problem are you solving?</label>
          <textarea 
            placeholder="Describe the specific problem your startup addresses..." 
            readOnly 
            rows="2"
            className="compact-textarea-startup-animation"
          ></textarea>
        </div>
        
        <div className="form-group-startup-animation compact">
          <label>Why does your solution work?</label>
          <textarea 
            placeholder="Explain how your solution effectively solves the problem..." 
            readOnly 
            rows="2"
            className="compact-textarea-startup-animation"
          ></textarea>
        </div>

        <div className="form-row-startup-animation">
          <div className="form-group-startup-animation half">
            <label>Initial Budget</label>
            <select className="form-select-startup-animation" defaultValue="500k">
              <option value="100k">$100K</option>
              <option value="500k">$500K</option>
              <option value="1m">$1M</option>
              <option value="5m">$5M</option>
            </select>
          </div>
          
          <div className="form-group-startup-animation half">
            <label>Team Size</label>
            <select className="form-select-startup-animation" defaultValue="small">
              <option value="solo">Solo Founder</option>
              <option value="small">Small (2-5)</option>
              <option value="medium">Medium (6-15)</option>
              <option value="large">Large (16+)</option>
            </select>
          </div>
        </div>

        <div className="form-group-startup-animation privacy-setting-startup-animation">
          <label>Privacy Setting</label>
          <div className="privacy-options-row-startup-animation">
            <label className="radio-label-startup-animation">
              <input 
                type="radio" 
                name="privacy" 
                value="public" 
                defaultChecked 
              />
              <span className="radio-text-startup-animation">
                <strong>Public</strong>
              </span>
            </label>
            <label className="radio-label-startup-animation">
              <input 
                type="radio" 
                name="privacy" 
                value="private" 
              />
              <span className="radio-text-startup-animation">
                <strong>Private</strong>
              </span>
            </label>
          </div>
        </div>

        <button className="create-btn-startup-animation">Create Startup</button>
      </div>

      {/* Search Interface */}
      {searchVisible && (
        <div className="search-simulation-startup-animation visible">
          <div className="search-header-startup-animation">
            <h2>Browse Startups</h2>
            <p>Find your startup challenge</p>
          </div>

          <div className="search-filters-startup-animation">
            <div className="filter-group-startup-animation">
              <select className="filter-select-startup-animation">
                <option value="">All Industries</option>
                <option value="tech">Technology</option>
                <option value="health">Healthcare</option>
                <option value="finance">Fintech</option>
                <option value="retail">Retail</option>
              </select>

              <select className="filter-select-startup-animation">
                <option value="">All Statuses</option>
                <option value="open">Open</option>
                <option value="private">Private</option>
                <option value="active">Active</option>
              </select>

              <select className="filter-select-startup-animation">
                <option value="">Team Size</option>
                <option value="small">Small (2-5)</option>
                <option value="medium">Medium (6-15)</option>
                <option value="large">Large (16+)</option>
              </select>
            </div>

            <div className="search-startup-bar-startup-animation">
              <span className="search-icon-startup-animation">🔍</span>
              <input type="text" value={typedText} readOnly placeholder="Search startups..." />
            </div>
          </div>
          
          {coursesVisible && (
            <div className="simulation-results-startup-animation">
              <div className="results-header-startup-animation">Found 2 startups matching "Tech Startup"</div>
              <div className="simulation-grid-startup-animation">
                <div className="simulation-card-startup-animation public">
                  <div className="status-badge-startup-animation public">Public</div>
                  <div className="simulation-icon-startup-animation">🚀</div>
                  <h3>Drone Delivery Express</h3>
                  <p>Revolutionizing last-mile delivery with autonomous drones</p>
                  <div className="simulation-meta-startup-animation">
                    <span>💰 $1M Budget</span>
                    <span>👥 Team: 6-15</span>
                  </div>
                  <button className="join-startup-btn-startup-animation">Join Startup</button>
                </div>

                <div className="simulation-card-startup-animation private">
                  <div className="status-badge-startup-animation private">Private</div>
                  <div className="simulation-icon-startup-animation">🛸</div>
                  <h3>Sky Logistics AI</h3>
                  <p>AI-powered drone fleet management platform</p>
                  <div className="simulation-meta-startup-animation">
                    <span>💰 $500K Budget</span>
                    <span>👥 Team: 2-5</span>
                  </div>
                  <button className="request-btn-startup-animation">Send Request to Join</button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Success Messages */}
      <div className={`success-message-startup-animation ${successVisible ? 'visible' : ''}`}>
        Startup created successfully! 🚀
      </div>
      <div className={`success-message-startup-animation ${courseFoundVisible ? 'visible' : ''}`}>
        Ready to join the startup! Let's build something amazing 🚀
      </div>
    </div>
  );
};

export default StartupSimulationAnimation;
