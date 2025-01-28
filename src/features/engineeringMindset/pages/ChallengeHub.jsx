import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './ChallengeHub.css';

const ChallengeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    { id: 'all', name: 'All Challenges' },
    { id: 'algorithms', name: 'Algorithms' },
    { id: 'data-structures', name: 'Data Structures' },
    { id: 'system-design', name: 'System Design' },
    { id: 'optimization', name: 'Optimization' }
  ];

  const challenges = [
    {
      id: 1,
      title: 'Optimize Drone Delivery',
      category: 'optimization',
      difficulty: 'Hard',
      points: 100,
      completions: 245,
      description: 'Design an efficient algorithm for drone delivery route optimization.'
    },
    {
      id: 2,
      title: 'Load Balancer Design',
      category: 'system-design',
      difficulty: 'Medium',
      points: 75,
      completions: 412,
      description: 'Create a load balancer for distributed systems.'
    }
    // Add more challenges as needed
  ];

  return (
    <div className="challenge-hub-container">
      <NavbarDashboard />
      
      <main className="challenge-hub-content">
        <h1>Engineering Challenges</h1>

        {/* Search and Filter Section */}
        <div className="challenge-controls">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search challenges..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <div className="category-filters">
            {categories.map(category => (
              <button
                key={category.id}
                className={`category-btn ${selectedCategory === category.id ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>
        </div>

        {/* Challenges Grid */}
        <div className="challenges-grid">
          {challenges.map(challenge => (
            <div key={challenge.id} className="challenge-card">
              <div className="challenge-header">
                <h3>{challenge.title}</h3>
                <span className={`difficulty-badge ${challenge.difficulty.toLowerCase()}`}>
                  {challenge.difficulty}
                </span>
              </div>
              
              <p className="challenge-description">{challenge.description}</p>
              
              <div className="challenge-footer">
                <div className="challenge-stats">
                  <span>🏆 {challenge.points} points</span>
                  <span>👥 {challenge.completions} solved</span>
                </div>
                <button className="solve-btn">Solve Challenge</button>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChallengeHub;
