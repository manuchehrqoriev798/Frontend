import React from 'react';
import StructuredCoursePanel from '../../features/structuredLearning/StructuredCoursePanel';
import EngineeringMindsetPanel from '../../features/engineeringMindset/EngineeringMindsetPanel';
import StartupCoursePanel from '../../features/startupSimulation/StartupCoursePanel';
import './FeaturedSection.css';

const FeaturedSection = () => {
  return (
    <section className="feature-panels-section">
      <div className="content-wrapper">
        <h2 className="section-title">Our Key Features</h2>
        <div className="feature-panels-grid">
          <StructuredCoursePanel />
          <EngineeringMindsetPanel />
          <StartupCoursePanel />
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
