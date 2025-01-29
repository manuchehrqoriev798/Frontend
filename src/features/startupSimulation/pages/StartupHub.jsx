import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './StartupHub.css';

const StartupHub = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    industry: 'all',
    stage: 'all',
    teamSize: 'all',
    location: 'all',
    fundingStatus: 'all',
    joinStatus: 'all',
    expertise: 'all'
  });

  // Sample data for startups
  const openStartups = [
    {
      id: 1,
      name: "EcoTech Solutions",
      description: "Developing sustainable energy solutions for urban environments",
      industry: "Clean Technology",
      stage: "Seed",
      teamSize: 5,
      location: "San Francisco, CA",
      fundingStatus: "Pre-seed",
      openRoles: ["Software Engineer", "Product Manager"],
      icon: "🌱"
    },
    {
      id: 2,
      name: "FinFlow",
      description: "Next-gen financial management platform for SMEs",
      industry: "Finance",
      stage: "Series A",
      teamSize: 12,
      location: "New York, NY",
      fundingStatus: "$2M Raised",
      openRoles: ["Full Stack Developer", "UX Designer"],
      icon: "💰"
    },
    {
      id: 3,
      name: "EduTech Pro",
      description: "AI-powered personalized learning platform",
      industry: "Education",
      stage: "Seed",
      teamSize: 8,
      location: "Austin, TX",
      fundingStatus: "$800K Raised",
      openRoles: ["ML Engineer", "Content Strategist"],
      icon: "📚"
    },
    {
      id: 4,
      name: "SpaceVR",
      description: "Virtual reality solutions for space exploration training",
      industry: "Technology",
      stage: "Pre-seed",
      teamSize: 4,
      location: "Houston, TX",
      fundingStatus: "Bootstrapped",
      openRoles: ["VR Developer", "3D Artist"],
      icon: "🚀"
    },
    {
      id: 5,
      name: "GreenCommute",
      description: "Sustainable transportation solutions for urban areas",
      industry: "Clean Technology",
      stage: "Seed",
      teamSize: 6,
      location: "Portland, OR",
      fundingStatus: "$1M Raised",
      openRoles: ["Mobile Developer", "Growth Marketer"],
      icon: "🚲"
    },
    {
      id: 6,
      name: "CyberShield",
      description: "AI-powered cybersecurity for small businesses",
      industry: "Technology",
      stage: "Seed",
      teamSize: 7,
      location: "Seattle, WA",
      fundingStatus: "$1.5M Raised",
      openRoles: ["Security Engineer", "DevOps Engineer"],
      icon: "🛡️"
    }
  ];

  const privateStartups = [
    {
      id: 101,
      name: "HealthAI",
      description: "AI-powered healthcare diagnostics platform",
      industry: "Healthcare",
      stage: "Series A",
      teamSize: 15,
      location: "Boston, MA",
      fundingStatus: "$5M Raised",
      requiredExpertise: ["Machine Learning", "Healthcare"],
      icon: "🏥"
    },
    {
      id: 102,
      name: "BlockChainX",
      description: "Enterprise blockchain solutions for supply chain",
      industry: "Blockchain",
      stage: "Series B",
      teamSize: 25,
      location: "Miami, FL",
      fundingStatus: "$12M Raised",
      requiredExpertise: ["Blockchain", "Supply Chain"],
      icon: "⛓️"
    },
    {
      id: 103,
      name: "MetaVerse Pro",
      description: "Professional metaverse development platform",
      industry: "Technology",
      stage: "Series A",
      teamSize: 18,
      location: "Los Angeles, CA",
      fundingStatus: "$7M Raised",
      requiredExpertise: ["3D Graphics", "VR/AR"],
      icon: "🎮"
    },
    {
      id: 104,
      name: "AgriTech Solutions",
      description: "Smart farming solutions using IoT and AI",
      industry: "Agriculture",
      stage: "Series A",
      teamSize: 20,
      location: "Denver, CO",
      fundingStatus: "$4M Raised",
      requiredExpertise: ["IoT", "Agriculture"],
      icon: "🌾"
    },
    {
      id: 105,
      name: "QuantumCompute",
      description: "Quantum computing solutions for businesses",
      industry: "Technology",
      stage: "Series B",
      teamSize: 30,
      location: "Chicago, IL",
      fundingStatus: "$15M Raised",
      requiredExpertise: ["Quantum Computing", "Physics"],
      icon: "⚛️"
    },
    {
      id: 106,
      name: "Robotics Plus",
      description: "Advanced robotics for manufacturing",
      industry: "Robotics",
      stage: "Series A",
      teamSize: 22,
      location: "Detroit, MI",
      fundingStatus: "$8M Raised",
      requiredExpertise: ["Robotics", "Manufacturing"],
      icon: "🤖"
    }
  ];

  // Add closed startups array after privateStartups
  const closedStartups = [
    {
      id: 201,
      name: "Stealth Mode Tech",
      industry: "Technology",
      stage: "Series B",
      icon: "🔒",
      isLocked: true
    },
    {
      id: 202,
      name: "Secret AI Labs",
      industry: "AI/ML",
      stage: "Series A",
      icon: "🔒",
      isLocked: true
    }
    // Add more closed startups...
  ];

  // Add myStartups array
  const myStartups = [
    {
      id: 1,
      name: "Quad",
      description: "Empowering learners through AI-driven personalized education",
      industry: "Education Technology",
      stage: "Seed",
      teamSize: 2,
      location: "San Francisco, CA",
      fundingStatus: "Pre-seed",
      openRoles: ["AI Engineer", "Full Stack Developer", "Education Specialist"],
      icon: "🎓"
    }
  ];

  const industries = [
    "All Industries",
    "Technology",
    "Healthcare",
    "Finance",
    "Education",
    "Clean Technology",
    "E-commerce",
    "AI/ML",
    "Blockchain"
  ];

  const stages = [
    "All Stages",
    "Idea",
    "Pre-seed",
    "Seed",
    "Series A",
    "Series B",
    "Series C+"
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const StartupCard = ({ startup, isPrivate, isClosed }) => (
    <div className={`startup-card-startup-join ${isClosed ? 'locked' : ''}`}>
      <div className="startup-icon-startup-join">{startup.icon}</div>
      <h3>{startup.name}</h3>
      {!isClosed ? (
        <>
          <p>{startup.description}</p>
          <div className="startup-stats-startup-join">
            <span>🏢 {startup.industry}</span>
            <span>📈 {startup.stage}</span>
          </div>
          <div className="startup-meta-startup-join">
            <span>👥 Team: {startup.teamSize}</span>
            <span>📍 {startup.location}</span>
          </div>
          <button 
            className={`join-button-startup-join ${isPrivate ? 'private' : ''}`}
          >
            {isPrivate ? 'Request to Join' : 'Join Now'}
          </button>
        </>
      ) : (
        <>
          <div className="locked-content-startup-join">
            <p>🔒 Information Locked</p>
            <span>This startup's details are not publicly available</span>
          </div>
          <button className="join-button-startup-join locked">
            Locked
          </button>
        </>
      )}
    </div>
  );

  const getSearchResults = () => {
    if (!searchQuery.trim()) return [];
    
    const query = searchQuery.toLowerCase().trim();
    const allStartups = [...openStartups, ...privateStartups, ...closedStartups];
    
    return allStartups.filter(startup => 
      startup.name.toLowerCase().includes(query) ||
      (!startup.isLocked && startup.description?.toLowerCase().includes(query))
    );
  };

  const searchResults = getSearchResults();

  return (
    <div className="startup-hub-container-startup-join">
      <NavbarDashboard />
      <main className="startup-hub-content-startup-join">
        <div className="panel-container-startup-join">
          <div className="search-section-startup-join">
            <h1>Find Your Next Startup Adventure</h1>
            <form 
              className="search-bar-startup-join"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for startups..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button type="submit" className="search-button-startup-join">
                🔍
              </button>
            </form>

            <div className="filters-section-startup-join">
              {/* Add filter groups here similar to CourseCatalog */}
            </div>
          </div>
        </div>

        <section className="startups-section-startup-join">
          {/* Search Results */}
          {searchQuery.trim() && (
            <div className="search-results-startup-join">
              <h2>🔍 Search Results</h2>
              <div className="search-results-count-startup-join">
                {searchResults.length} {searchResults.length === 1 ? 'startup' : 'startups'} found
              </div>
              <div className="startup-grid-startup-join">
                {searchResults.map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={startup.id >= 100}
                    isClosed={startup.id >= 200}
                  />
                ))}
              </div>
            </div>
          )}

          {/* My Startups Panel */}
          <div className="panel-container-startup-join">
            <div className="my-startups-startup-join">
              <h2>🌟 My Startups</h2>
              <div className="startup-grid-startup-join">
                {myStartups.map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={false}
                    isClosed={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Recommended Startups Panel */}
          <div className="panel-container-startup-join">
            <div className="recommended-startups-startup-join">
              <h2>🎯 Recommended For You</h2>
              <div className="startup-grid-startup-join">
                {openStartups.slice(0, 3).map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={false}
                    isClosed={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Open Startups Panel */}
          <div className="panel-container-startup-join">
            <div className="open-startups-startup-join">
              <h2>🚀 Open Startups</h2>
              <div className="startup-grid-startup-join">
                {openStartups.map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={false}
                    isClosed={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Private Startups Panel */}
          <div className="panel-container-startup-join">
            <div className="private-startups-startup-join">
              <h2>🔒 Private Startups</h2>
              <div className="startup-grid-startup-join">
                {privateStartups.map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={true}
                    isClosed={false}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Closed Startups Section */}
          <div className="panel-container-startup-join">
            <div className="closed-startups-startup-join">
              <h2>🔒 Stealth Mode Startups</h2>
              <div className="startup-grid-startup-join">
                {closedStartups.map(startup => (
                  <StartupCard 
                    key={startup.id} 
                    startup={startup} 
                    isPrivate={false}
                    isClosed={true}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default StartupHub;
