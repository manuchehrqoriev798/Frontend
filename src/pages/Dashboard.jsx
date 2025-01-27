import React from 'react';
import NavbarDashboard from '../components/common/NavbarDashboard';
import NotificationsPanel from '../components/dashboard/NotificationsPanel';
import ProfileOverview from '../components/dashboard/ProfileOverview';
import StructuredCoursePanel from '../features/structuredLearning/StructuredCoursePanel';
import EngineeringMindsetPanel from '../features/engineeringMindset/EngineeringMindsetPanel';
import StartupCoursePanel from '../features/startupSimulation/StartupCoursePanel';

const Dashboard = () => {
  return (
    <div className="dashboard-container" style={{ background: 'transparent' }}>
      <NavbarDashboard />
      
      <div className="dashboard-content">
        {/* Search Bar */}
        <div className="search-bar">
          <input type="text" placeholder="Search courses, problems, or resources..." />
          <button>Search</button>
        </div>

        {/* Notifications Panel */}
        <NotificationsPanel />

        {/* Profile Overview */}
        <ProfileOverview />

        {/* Feature Panels */}
        <section className="feature-panels-section">
          <h2 className="section-title">Our Key Features</h2>
          <div className="feature-panels-grid">
            <StructuredCoursePanel />
            <EngineeringMindsetPanel />
            <StartupCoursePanel />
          </div>
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
