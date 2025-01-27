import React from 'react';

const ProfileOverview = () => {
  const stats = {
    goal: "Complete Advanced AI Course",
    points: 2500,
    streak: 15,
    level: "Advanced",
    problemsSolved: "85/325",
    completedCourses: 12,
    inProgressCourses: 3
  };

  const rankings = {
    global: { rank: 1234, change: 12 },
    country: { rank: 89, change: 3 },
    division: "Gold II",
    contestRating: 1850,
    contestParticipation: 2,
    totalBadges: "28/50"
  };

  return (
    <div className="panel profile-overview">
      <div className="stats-section">
        <h3>📊 STATS:</h3>
        <div className="stats-grid">
          <div className="stat-item">Current Goal: {stats.goal}</div>
          <div className="stat-item">Points: {stats.points}</div>
          <div className="stat-item">Current Streak: {stats.streak} days</div>
          <div className="stat-item">Level: {stats.level}</div>
          <div className="stat-item">Problems Solved: {stats.problemsSolved}</div>
          <div className="stat-item">Completed courses: {stats.completedCourses}</div>
          <div className="stat-item">In Progress courses: {stats.inProgressCourses}</div>
        </div>
      </div>

      <div className="rankings-section">
        <h3>🏅 RANKINGS:</h3>
        <div className="rankings-grid">
          <div className="ranking-item">Global: #{rankings.global.rank} (↑{rankings.global.change})</div>
          <div className="ranking-item">Country: #{rankings.country.rank} (↑{rankings.country.change})</div>
          <div className="ranking-item">Division: {rankings.division}</div>
          <div className="ranking-item">Contest Rating: {rankings.contestRating}</div>
          <div className="ranking-item">Contests participation: {rankings.contestParticipation}</div>
          <div className="ranking-item">Total Badges: {rankings.totalBadges}</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview; 