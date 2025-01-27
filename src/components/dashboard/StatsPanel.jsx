import React from 'react';

const StatsPanel = () => {
  const stats = [
    { label: 'Hours Learned', value: '120' },
    { label: 'Courses Completed', value: '5' },
    { label: 'Current Streak', value: '7' },
    { label: 'Achievement Points', value: '850' }
  ];

  return (
    <div className="panel stats-panel">
      <h3>Learning Statistics</h3>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat">
            <div className="stat-number">{stat.value}</div>
            <div className="stat-label">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
