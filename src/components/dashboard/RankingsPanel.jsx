import React from 'react';

const RankingsPanel = () => {
  const rankings = [
    { name: 'User 1', score: 980, position: 1 },
    { name: 'User 2', score: 875, position: 2 },
    { name: 'User 3', score: 750, position: 3 },
    { name: 'You', score: 650, position: 4 },
  ];

  return (
    <div className="panel rankings-panel">
      <h3>Leaderboard</h3>
      <div className="rankings-list">
        {rankings.map((rank, index) => (
          <div key={index} className={`ranking-item ${rank.name === 'You' ? 'current-user' : ''}`}>
            <span className="position">#{rank.position}</span>
            <span className="name">{rank.name}</span>
            <span className="score">{rank.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RankingsPanel;
