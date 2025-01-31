import React, { useState, useEffect } from 'react';
import NavbarDashboard from '../../../../components/common/NavbarDashboard';
import Footer from '../../../../components/common/Footer';
import './ChallengeCoding.css';
import { useParams, Link, useNavigate, useLocation } from 'react-router-dom';

const ChallengeCoding = () => {
  const { challengeId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedLanguage, setSelectedLanguage] = useState('python');
  const [code, setCode] = useState('');
  const [hasInitialized, setHasInitialized] = useState(false);

  const problemDetails = {
    'C1': {
      title: 'Optimize Drone Delivery',
      description: (
        <div className="problem-section">
          <h4>Problem Description</h4>
          <p>Design an algorithm to optimize delivery routes for a fleet of drones in a city. The system operates in a 2D grid where drones must efficiently deliver packages while managing battery life, payload capacity, and delivery deadlines. Each drone can carry multiple packages up to its weight limit and consumes one unit of battery per grid movement. The system should handle multiple drones simultaneously, calculate optimal routes considering battery constraints, maintain safe distances between drones, and ensure all pickups occur before their corresponding deliveries. Success is measured by maximizing successful deliveries while minimizing total distance traveled and balancing workload across the drone fleet.</p>
          
          <h4>Example</h4>
          <div className="example-section">
            <div className="input-engineering-coding">
              <h5>Input:</h5>
              <code>{`drones = [
  { id: "D1", batteryLife: 120, maxPayload: 10, currentLocation: [0, 0] }
]
packages = [
  { 
    id: "P1", 
    weight: 5, 
    pickup: [2, 3], 
    delivery: [8, 8], 
    deadline: 60 
  }
]`}</code>
            </div>
            <div className="output-engineering-coding">
              <h5>Output:</h5>
              <code>{`{
  "routes": [
    {
      "droneId": "D1",
      "path": [[0, 0], [2, 3], [8, 8]],
      "packages": ["P1"]
    }
  ]
}`}</code>
            </div>
          </div>

          <h4>Constraint</h4>
          <ul className="constraints-list">
            <li>1 ≤ number of drones ≤ 100</li>
            <li>1 ≤ number of packages ≤ 1000</li>
            <li>0 ≤ x, y coordinates ≤ 1000</li>
            <li>1 ≤ battery life ≤ 240 minutes</li>
            <li>1 ≤ package weight ≤ 20 kg</li>
            <li>Each drone can carry multiple packages up to its maxPayload</li>
            <li>Drone speed: 1 unit distance per minute</li>
            <li>Battery consumption: 1 minute of battery life per unit distance</li>
          </ul>
        </div>
      ),
      starterCode: {
        python: `def optimize_drone_delivery(drones, packages):
    # Your code here
    return {
        "routes": []
    }`,
        javascript: `function optimizeDroneDelivery(drones, packages) {
    // Your code here
    return {
        routes: []
    };
}`,
        java: `public class Solution {
    public DeliveryRoutes optimizeDroneDelivery(Drone[] drones, Package[] packages) {
        // Your code here
        return new DeliveryRoutes();
    }
}`
      }
    },
    'C2': {
      title: 'Smart Traffic System',
      description: (
        <div className="problem-section">
          <h4>Problem Description</h4>
          <p>Design an intelligent traffic management system that optimizes traffic flow in a city. The system operates on a network of intersections where each intersection must dynamically adjust signal timings based on real-time traffic conditions. Each intersection can control traffic in four directions and must coordinate with neighboring intersections to prevent congestion. The system should handle varying traffic densities, prioritize emergency vehicles, and ensure fair wait times across all directions. Success is measured by minimizing average wait times while maintaining consistent flow and preventing traffic jams.</p>
          
          <h4>Example</h4>
          <div className="example-section">
            <div className="input-engineering-coding">
              <h5>Input:</h5>
              <code>{`intersections = [
  { 
    id: "I1", 
    location: [0, 0],
    currentFlow: 30,
    maxCapacity: 50
  }
]
roads = [
  {
    id: "R1",
    startIntersection: "I1",
    endIntersection: "I2",
    currentDensity: 25,
    length: 1.5
  }
]
timeWindow = 30`}</code>
            </div>
            <div className="output-engineering-coding">
              <h5>Output:</h5>
              <code>{`{
  "signalTimings": [
    {
      "intersectionId": "I1",
      "greenLightDurations": {
        "north": 45,
        "south": 45,
        "east": 30,
        "west": 30
      }
    }
  ]
}`}</code>
            </div>
          </div>

          <h4>Constraint</h4>
          <ul className="constraints-list">
            <li>1 ≤ number of intersections ≤ 1000</li>
            <li>1 ≤ number of roads ≤ 5000</li>
            <li>0 ≤ currentFlow ≤ maxCapacity</li>
            <li>1 ≤ timeWindow ≤ 120 minutes</li>
            <li>0 ≤ currentDensity ≤ 100 vehicles/km</li>
            <li>Minimum green light duration: 30 seconds</li>
            <li>Maximum green light duration: 180 seconds</li>
            <li>All intersections must maintain minimum safety intervals</li>
          </ul>
        </div>
      ),
      starterCode: {
        python: `def optimize_traffic_signals(intersections, roads, timeWindow):
    # Your code here
    return {
        "signalTimings": []
    }`,
        javascript: `function optimizeTrafficSignals(intersections, roads, timeWindow) {
    // Your code here
    return {
        signalTimings: []
    };
}`,
        java: `public class Solution {
    public SignalTimings optimizeTrafficSignals(
        Intersection[] intersections, 
        Road[] roads, 
        int timeWindow
    ) {
        // Your code here
        return new SignalTimings();
    }
}`
      }
    }
  };

  const currentProblem = problemDetails[challengeId];

  useEffect(() => {
    if (currentProblem?.starterCode?.[selectedLanguage] && !hasInitialized) {
      setCode(currentProblem.starterCode[selectedLanguage]);
      setHasInitialized(true);
    }
  }, [currentProblem, selectedLanguage, hasInitialized]);

  const handleLanguageChange = (e) => {
    const newLanguage = e.target.value;
    if (window.confirm('Changing language will reset your code. Are you sure?')) {
      setSelectedLanguage(newLanguage);
      setCode(currentProblem.starterCode[newLanguage]);
    }
  };

  const handleCodeChange = (e) => {
    setCode(e.target.value);
  };

  const handleRunCode = () => {
    console.log('Running code:', code);
  };

  const handleSubmitSolution = () => {
    console.log('Submitting solution:', code);
  };

  const getNavItemClass = (path) => {
    const currentPath = location.pathname;
    const isActive = currentPath.includes(path) || 
      (path === '/challenge-hub' && currentPath === `/challenge/${challengeId}`);
    return `problem-nav-item ${isActive ? 'active' : ''}`;
  };

  if (!currentProblem) {
    return <div>Problem not found</div>;
  }

  return (
    <div className="challenge-coding-container-engineering-coding">
      <NavbarDashboard />
      
      <main className="challenge-coding-content-engineering-coding">
        <div className="problem-view-engineering-coding">
          <div className="problem-nav-menu">
            <Link 
              to="/challenge-hub" 
              className={getNavItemClass('/challenge-hub')}
            >
              Problem List
            </Link>
            <Link 
              to={`/challenge/${challengeId}/debugging`} 
              className={getNavItemClass('/debugging')}
            >
              Debugging
            </Link>
            <Link 
              to={`/challenge/${challengeId}/editorial`} 
              className={getNavItemClass('/editorial')}
            >
              Editorial
            </Link>
            <Link 
              to={`/challenge/${challengeId}/submissions`} 
              className={getNavItemClass('/submissions')}
            >
              Submissions
            </Link>
          </div>

          <div className="problem-description-engineering-coding">
            <div className="section-header-engineering-coding">
              <h2>{currentProblem.title}</h2>
            </div>
            
            <div className="problem-content-engineering-coding">
              {currentProblem.description}
            </div>
          </div>

          <div className="code-editor-engineering-coding">
            <div className="editor-header-engineering-coding">
              <select 
                className="language-select-engineering-coding"
                value={selectedLanguage}
                onChange={handleLanguageChange}
              >
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="java">Java</option>
              </select>
            </div>
            <div className="editor-content-engineering-coding">
              <textarea 
                className="code-area-engineering-coding"
                value={code}
                onChange={handleCodeChange}
                spellCheck="false"
                placeholder="Write your code here..."
              />
            </div>
            <div className="editor-footer-engineering-coding">
              <button 
                className="run-code-btn-engineering-coding"
                onClick={handleRunCode}
              >
                Run Code
              </button>
              <button 
                className="submit-code-btn-engineering-coding"
                onClick={handleSubmitSolution}
              >
                Submit Solution
              </button>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChallengeCoding; 