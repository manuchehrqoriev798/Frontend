import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './ChallengeHub.css';

const ChallengeHub = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showPopularCourses, setShowPopularCourses] = useState(true);
  const [likeRatioFilter, setLikeRatioFilter] = useState('');

  const subjects = [
    { id: 'all', name: 'All Subjects' },
    { id: 'coding', name: 'Coding' },
    { id: 'math', name: 'Mathematics' },
    { id: 'physics', name: 'Physics' },
    { id: 'chemistry', name: 'Chemistry' },
    { id: 'biology', name: 'Biology' }
  ];

  const challenges = [
    {
      id: 'C1',
      title: 'Optimize Drone Delivery',
      subject: 'coding',
      difficulty: 'Hard',
      points: 100,
      completions: 245,
      acceptanceRate: 45.2,
      companies: ['Amazon', 'Google', 'Uber'],
      tags: ['Algorithms', 'Graph Theory'],
      likes: 324,
      dislikes: 45
    },
    {
      id: 'M2',
      title: 'Linear Equation Systems',
      subject: 'math',
      difficulty: 'Medium',
      points: 75,
      completions: 412,
      acceptanceRate: 50.0,
      companies: ['Research Labs', 'Engineering Firms'],
      tags: ['Linear Algebra', 'Matrices'],
      likes: 256,
      dislikes: 32
    },
    {
      id: 'PH3',
      title: 'Projectile Motion Analysis',
      subject: 'physics',
      difficulty: 'Hard',
      points: 90,
      completions: 156,
      acceptanceRate: 30.0,
      companies: ['NASA', 'SpaceX', 'Boeing'],
      tags: ['Mechanics', 'Kinematics'],
      likes: 189,
      dislikes: 23
    },
    {
      id: 'CH4',
      title: 'Reaction Equilibrium',
      subject: 'chemistry',
      difficulty: 'Medium',
      points: 85,
      completions: 334,
      acceptanceRate: 70.0,
      companies: ['Pharmaceutical', 'Research Labs'],
      tags: ['Chemical Equilibrium', 'Thermodynamics'],
      likes: 287,
      dislikes: 37
    },
    {
      id: 'B5',
      title: 'Gene Expression Analysis',
      subject: 'biology',
      difficulty: 'Hard',
      points: 95,
      completions: 189,
      acceptanceRate: 20.0,
      companies: ['Biotech', 'Research Institutes'],
      tags: ['Genetics', 'Molecular Biology'],
      likes: 156,
      dislikes: 20
    }
  ];

  const studyPlans = [
    {
      id: 'top150',
      title: 'Top Interview 150',
      description: 'Essential problems for interview preparation',
      icon: '🎯',
      totalProblems: 150,
      completionRate: 0,
      duration: '12 weeks',
      students: 3240,
      rating: 4.8
    },
    {
      id: 'quadcode75',
      title: 'QuadCode 75',
      description: 'Structured learning path for coding mastery',
      icon: '💻',
      totalProblems: 75,
      completionRate: 0,
      duration: '8 weeks',
      students: 2156,
      rating: 4.9
    },
    {
      id: 'js30',
      title: 'JavaScript 30',
      description: 'JavaScript coding challenges and projects',
      icon: '⚡',
      totalProblems: 30,
      completionRate: 0,
      duration: '4 weeks',
      students: 1845,
      rating: 4.7
    }
  ];

  // Update the filter function to include like ratio filtering
  const filteredChallenges = challenges.filter(challenge => {
    const matchesSearch = challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    // Calculate like ratio
    const totalVotes = challenge.likes + challenge.dislikes;
    const ratio = totalVotes > 0 ? (challenge.likes / totalVotes) * 100 : 0;

    // Apply like ratio filter
    let matchesLikeRatio = true;
    if (likeRatioFilter) {
      switch (likeRatioFilter) {
        case 'high':
          matchesLikeRatio = ratio >= 80;
          break;
        case 'medium':
          matchesLikeRatio = ratio >= 50 && ratio < 80;
          break;
        case 'low':
          matchesLikeRatio = ratio < 50;
          break;
      }
    }

    return matchesSearch && matchesLikeRatio;
  });

  return (
    <div className="challenge-hub-container-engineering-challenge">
      <NavbarDashboard />
      
      <main className="challenge-hub-content-engineering-challenge">
        {/* Main Title Section - Simplified with blur effect */}
        <div className="main-title-wrapper-engineering-challenge">
          <h1>Practice & Master Coding Challenges</h1>
        </div>

        {/* Study Plans Section - with conditional rendering */}
        {showPopularCourses && (
          <div className="section-wrapper-engineering-challenge">
            <section className="study-plans-section-engineering-challenge">
              <div className="section-header-engineering-challenge">
                <h2>Most Popular Courses</h2>
                <div className="header-buttons-engineering-challenge">
                  <button 
                    className="close-button-engineering-challenge"
                    onClick={() => setShowPopularCourses(false)}
                  >
                    ×
                  </button>
                  <button className="see-all-btn-engineering-challenge">See All</button>
                </div>
              </div>
              <div className="study-plans-grid-engineering-challenge">
                {studyPlans.map(plan => (
                  <div key={plan.id} className="study-plan-card-engineering-challenge">
                    <div className="course-icon-engineering-challenge">{plan.icon}</div>
                    <h3>{plan.title}</h3>
                    <p>{plan.description}</p>
                    <div className="course-stats-engineering-challenge">
                      <div className="rating-engineering-challenge">
                        {'⭐'.repeat(Math.floor(plan.rating))}
                        <span>{plan.rating}</span>
                      </div>
                      <div className="students-engineering-challenge">
                        👥 {plan.students.toLocaleString()} students
                      </div>
                    </div>
                    <div className="progress-bar-engineering-challenge">
                      <div 
                        className="progress-fill-engineering-challenge" 
                        style={{width: `${plan.completionRate}%`}}
                      ></div>
                    </div>
                    <div className="course-meta-engineering-challenge">
                      <span>📚 {plan.totalProblems} problems</span>
                      <span>⏱️ {plan.duration}</span>
                    </div>
                    <button className="enroll-button-engineering-challenge">Start Plan</button>
                  </div>
                ))}
              </div>
            </section>
          </div>
        )}

        {/* Advanced Filters Section */}
        <div className="section-wrapper-engineering-challenge">
          <section className="filters-section-engineering-challenge">
            <div className="search-container-engineering-challenge">
              <div className="search-bar-engineering-challenge">
                <input
                  type="text"
                  placeholder="Search challenges..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button className="search-button-engineering-challenge">
                  Search
                </button>
              </div>
            </div>
            <div className="filters-container-engineering-challenge">
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Status</option>
                  <option value="solved">Solved</option>
                  <option value="unsolved">Unsolved</option>
                  <option value="attempted">Attempted</option>
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Difficulty</option>
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Subject</option>
                  {subjects.map(subject => (
                    <option key={subject.id} value={subject.id}>{subject.name}</option>
                  ))}
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Companies</option>
                  <option value="google">Google</option>
                  <option value="amazon">Amazon</option>
                  <option value="microsoft">Microsoft</option>
                  <option value="meta">Meta</option>
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Acceptance Rate</option>
                  <option value="high">High (&gt;70%)</option>
                  <option value="medium">Medium (30-70%)</option>
                  <option value="low">Low (&lt;30%)</option>
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select className="filter-select-engineering-challenge">
                  <option value="">Frequency</option>
                  <option value="most-asked">Most Asked</option>
                  <option value="recently-added">Recently Added</option>
                  <option value="trending">Trending</option>
                  <option value="most-solved">Most Solved</option>
                  <option value="least-solved">Least Solved</option>
                </select>
              </div>
              <div className="filter-group-engineering-challenge">
                <select 
                  className="filter-select-engineering-challenge"
                  value={likeRatioFilter}
                  onChange={(e) => setLikeRatioFilter(e.target.value)}
                >
                  <option value="">Like Ratio</option>
                  <option value="high">Highly Liked (≥80%)</option>
                  <option value="medium">Moderately Liked (50-79%)</option>
                  <option value="low">Less Liked (&lt;50%)</option>
                </select>
              </div>
            </div>
          </section>
        </div>

        {/* Challenges List Section */}
        <div className="section-wrapper-engineering-challenge">
          <section className="challenges-section-engineering-challenge">
            <div className="challenges-list-engineering-challenge">
              {filteredChallenges.map(challenge => {
                // Calculate the ratio
                const totalVotes = challenge.likes + challenge.dislikes;
                const ratio = totalVotes > 0 
                  ? ((challenge.likes / totalVotes) * 100).toFixed(1) 
                  : 0;

                return (
                  <div key={challenge.id} className="challenge-card-engineering-challenge">
                    <div className="challenge-main-content-engineering-challenge">
                      <h3>
                        <span className="challenge-number-engineering-challenge">{challenge.id}.</span>
                        {challenge.title}
                      </h3>
                      <div className="challenge-tags-engineering-challenge">
                        {challenge.tags.map(tag => (
                          <span key={tag} className="tag-badge-engineering-challenge">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="companies-badge-engineering-challenge">
                        Asked in: {challenge.companies.join(', ')}
                      </div>
                    </div>
                    <div className="challenge-meta-engineering-challenge">
                      <span className={`difficulty-badge-engineering-challenge ${challenge.difficulty.toLowerCase()}`}>
                        {challenge.difficulty}
                      </span>
                      <div className="challenge-stats-engineering-challenge">
                        <span>{challenge.points} points</span>
                        <span>👥 {challenge.completions} solved</span>
                        <span className="acceptance-rate-engineering-challenge">
                          {challenge.acceptanceRate}% acceptance
                        </span>
                        <div className="likes-container-engineering-challenge">
                          <span className="likes-engineering-challenge">
                            👍 {challenge.likes}
                          </span>
                          <span className="dislikes-engineering-challenge">
                            👎 {challenge.dislikes}
                          </span>
                          <span className="like-ratio-engineering-challenge">
                            {ratio}% liked
                          </span>
                        </div>
                      </div>
                      <button className="solve-btn-engineering-challenge">Solve</button>
                    </div>
                  </div>
                );
              })}
              {filteredChallenges.length === 0 && (
                <div className="no-results-engineering-challenge">
                  No challenges found matching "{searchQuery}"
                </div>
              )}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ChallengeHub;
