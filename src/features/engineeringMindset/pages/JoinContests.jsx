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
    ],
    myContests: [
      {
        id: 5,
        title: 'Advanced SQL Challenge',
        date: '2024-03-30',
        time: '15:00 UTC',
        duration: '2.5 hours',
        difficulty: 'Medium',
        status: 'Registered',
        description: 'Test your database optimization skills.'
      }
    ]
  };

  const leaderboard = [
    { rank: 1, username: '@techmaster', points: 2500, badge: '👑' },
    { rank: 2, username: '@codewizard', points: 2350, badge: '🥈' },
    { rank: 3, username: '@debugger', points: 2200, badge: '🥉' },
    { rank: 4, username: '@algorithm_ace', points: 2100 },
    { rank: 5, username: '@bytecoder', points: 2000 },
    { rank: 6, username: '@devninja', points: 1950 },
    { rank: 7, username: '@pythonista', points: 1900 },
    { rank: 8, username: '@javascriptpro', points: 1850 },
    { rank: 9, username: '@webmaster', points: 1800 },
    { rank: 10, username: '@fullstack_dev', points: 1750 },
  ];

  return (
    <div className="join-contests-container-engineering-contest">
      <NavbarDashboard />
      
      <main className="join-contests-content-engineering-contest">
        <h1>Programming Contests</h1>

        <div className="contests-wrapper-engineering-contest">
          <div className="contests-layout-engineering-contest">
            <div className="contests-main-section-engineering-contest">
              <div className="contest-tabs-engineering-contest">
                <button 
                  className={`tab-btn-engineering-contest ${selectedTab === 'upcoming' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('upcoming')}
                >
                  Upcoming Contests
                </button>
                <button 
                  className={`tab-btn-engineering-contest ${selectedTab === 'ongoing' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('ongoing')}
                >
                  Ongoing Contests
                </button>
                <button 
                  className={`tab-btn-engineering-contest ${selectedTab === 'past' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('past')}
                >
                  Past Contests
                </button>
                <button 
                  className={`tab-btn-engineering-contest ${selectedTab === 'myContests' ? 'active' : ''}`}
                  onClick={() => setSelectedTab('myContests')}
                >
                  My Contests
                </button>
              </div>

              <div className="contests-grid-engineering-contest">
                {selectedTab === 'upcoming' && contests.upcoming.map(contest => (
                  <div key={contest.id} className="contest-card-engineering-contest">
                    <div className="contest-header-engineering-contest">
                      <h3>{contest.title}</h3>
                      <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                        {contest.difficulty}
                      </span>
                    </div>
                    
                    <p className="contest-description">{contest.description}</p>
                    
                    <div className="contest-details-engineering-contest">
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">📅 Date & Time:</span>
                        <span>{contest.date} {contest.time}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">⌛ Duration:</span>
                        <span>{contest.duration}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">👥 Participants:</span>
                        <span>{contest.participants}</span>
                      </div>
                    </div>

                    <div className="contest-prizes-engineering-contest">
                      <h4>🏆 Prizes:</h4>
                      <ul>
                        {contest.prizes.map((prize, index) => (
                          <li key={index}>{prize}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="register-btn-engineering-contest">Register Now</button>
                  </div>
                ))}

                {selectedTab === 'ongoing' && contests.ongoing.map(contest => (
                  <div key={contest.id} className="contest-card-engineering-contest">
                    <div className="contest-header-engineering-contest">
                      <h3>{contest.title}</h3>
                      <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                        {contest.difficulty}
                      </span>
                    </div>
                    
                    <p className="contest-description">{contest.description}</p>
                    
                    <div className="contest-details-engineering-contest">
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">⏱️ Time Remaining:</span>
                        <span className="time-remaining">{contest.timeRemaining}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">👥 Active Participants:</span>
                        <span>{contest.participants}</span>
                      </div>
                    </div>

                    <button className="join-btn-engineering-contest">Join Now</button>
                  </div>
                ))}

                {selectedTab === 'past' && contests.past.map(contest => (
                  <div key={contest.id} className="contest-card-engineering-contest">
                    <div className="contest-header-engineering-contest">
                      <h3>{contest.title}</h3>
                      <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                        {contest.difficulty}
                      </span>
                    </div>
                    
                    <p className="contest-description">{contest.description}</p>
                    
                    <div className="contest-details-engineering-contest">
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">📅 Date:</span>
                        <span>{contest.date}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">👥 Participants:</span>
                        <span>{contest.participants}</span>
                      </div>
                    </div>

                    <div className="contest-winners-engineering-contest">
                      <h4>🏆 Winners:</h4>
                      <ul>
                        {contest.winners.map((winner, index) => (
                          <li key={index}>{winner}</li>
                        ))}
                      </ul>
                    </div>

                    <button className="view-btn-engineering-contest">View Results</button>
                  </div>
                ))}

                {selectedTab === 'myContests' && contests.myContests.map(contest => (
                  <div key={contest.id} className="contest-card-engineering-contest">
                    <div className="contest-header-engineering-contest">
                      <h3>{contest.title}</h3>
                      <span className={`difficulty-badge ${contest.difficulty.toLowerCase()}`}>
                        {contest.difficulty}
                      </span>
                    </div>
                    
                    <p className="contest-description">{contest.description}</p>
                    
                    <div className="contest-details-engineering-contest">
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">📅 Date:</span>
                        <span>{contest.date}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">⏰ Time:</span>
                        <span>{contest.time}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">⌛ Duration:</span>
                        <span>{contest.duration}</span>
                      </div>
                      <div className="detail-item-engineering-contest">
                        <span className="detail-label">Status:</span>
                        <span className="status-badge-engineering-contest">{contest.status}</span>
                      </div>
                    </div>

                    <button className="view-details-btn-engineering-contest">View Details</button>
                  </div>
                ))}
              </div>
            </div>

            <div className="leaderboard-section-engineering-contest">
              <h2>Leaderboard</h2>
              <div className="leaderboard-list-engineering-contest">
                {leaderboard.map((user) => (
                  <div key={user.rank} className="leaderboard-item-engineering-contest">
                    <div className="rank-engineering-contest">#{user.rank}</div>
                    <div className="user-info-engineering-contest">
                      <span className="username-engineering-contest">
                        {user.badge && <span className="badge-engineering-contest">{user.badge}</span>}
                        {user.username}
                      </span>
                      <span className="points-engineering-contest">{user.points} pts</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JoinContests;
