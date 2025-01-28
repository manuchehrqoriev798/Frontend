import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './JoinContests.css';

const JoinContests = () => {
  const [selectedTab, setSelectedTab] = useState('upcoming');

  const contests = {
    upcoming: [
      {
        id: 1,
        title: 'Weekly Algorithm Challenge',
        date: '2024-03-25',
        time: '14:00 UTC',
        duration: '2 hours',
        difficulty: 'Medium',
        participants: 234,
        prizes: ['500 Points', 'Gold Badge', 'Premium Access'],
        description: 'Test your algorithmic skills in this weekly competition.'
      },
      {
        id: 2,
        title: 'System Design Championship',
        date: '2024-03-28',
        time: '18:00 UTC',
        duration: '3 hours',
        difficulty: 'Hard',
        participants: 156,
        prizes: ['1000 Points', 'Diamond Badge', 'Cash Prize'],
        description: 'Design scalable systems and compete with the best.'
      }
    ],
    ongoing: [
      {
        id: 3,
        title: 'Data Structures Sprint',
        timeRemaining: '1:45:32',
        participants: 412,
        difficulty: 'Medium',
        description: 'Race against time to solve data structure problems.'
      }
    ],
    past: [
      {
        id: 4,
        title: 'Code Optimization Challenge',
        date: '2024-03-20',
        participants: 567,
        winners: ['@coder123', '@techpro', '@algoninja'],
        difficulty: 'Hard',
        description: 'Optimize code for better performance and efficiency.'
      }
    ]
  };

  return (
    <div className="join-contests-container">
      <NavbarDashboard />
      
      <main className="join-contests-content">
        <h1>Programming Contests</h1>

        {/* Contest Tabs */}
        <div className="contest-tabs">
          <button 
            className={`tab-btn ${selectedTab === 'upcoming' ? 'active' : ''}`}
            onClick={() => setSelectedTab('upcoming')}
          >
            Upcoming Contests
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'ongoing' ? 'active' : ''}`}
            onClick={() => setSelectedTab('ongoing')}
          >
            Ongoing Contests
          </button>
          <button 
            className={`tab-btn ${selectedTab === 'past' ? 'active' : ''}`}
            onClick={() => setSelectedTab('past')}
          >
            Past Contests
          </button>
        </div>

        {/* Contest Cards */}
        <div className="contests-grid">
          {selectedTab === 'upcoming' && contests.upcoming.map(contest => (
            <div key={contest.id} className="contest-card">
              <div className="contest-header">
                <h3>{contest.title}</h3>
                <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                  {contest.difficulty}
                </span>
              </div>
              
              <p className="contest-description">{contest.description}</p>
              
              <div className="contest-details">
                <div className="detail-item">
                  <span className="detail-label">📅 Date:</span>
                  <span>{contest.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">⏰ Time:</span>
                  <span>{contest.time}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">⌛ Duration:</span>
                  <span>{contest.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Participants:</span>
                  <span>{contest.participants}</span>
                </div>
              </div>

              <div className="contest-prizes">
                <h4>🏆 Prizes:</h4>
                <ul>
                  {contest.prizes.map((prize, index) => (
                    <li key={index}>{prize}</li>
                  ))}
                </ul>
              </div>

              <button className="register-btn">Register Now</button>
            </div>
          ))}

          {selectedTab === 'ongoing' && contests.ongoing.map(contest => (
            <div key={contest.id} className="contest-card">
              <div className="contest-header">
                <h3>{contest.title}</h3>
                <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                  {contest.difficulty}
                </span>
              </div>
              
              <p className="contest-description">{contest.description}</p>
              
              <div className="contest-details">
                <div className="detail-item">
                  <span className="detail-label">⏱️ Time Remaining:</span>
                  <span className="time-remaining">{contest.timeRemaining}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Active Participants:</span>
                  <span>{contest.participants}</span>
                </div>
              </div>

              <button className="join-btn">Join Now</button>
            </div>
          ))}

          {selectedTab === 'past' && contests.past.map(contest => (
            <div key={contest.id} className="contest-card">
              <div className="contest-header">
                <h3>{contest.title}</h3>
                <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                  {contest.difficulty}
                </span>
              </div>
              
              <p className="contest-description">{contest.description}</p>
              
              <div className="contest-details">
                <div className="detail-item">
                  <span className="detail-label">📅 Date:</span>
                  <span>{contest.date}</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">👥 Participants:</span>
                  <span>{contest.participants}</span>
                </div>
              </div>

              <div className="contest-winners">
                <h4>🏆 Winners:</h4>
                <ul>
                  {contest.winners.map((winner, index) => (
                    <li key={index}>{winner}</li>
                  ))}
                </ul>
              </div>

              <button className="view-btn">View Results</button>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinContests;
