import React from 'react';
import '../../styles/components/aiToolsSection.css';
import { FaRobot, FaCode, FaTools } from 'react-icons/fa';

const AIToolsSection = () => {
  const tools = [
    {
      icon: <FaRobot />,
      title: "Personal Assistant",
      description: "Your AI-powered learning companion that adapts to your unique needs",
      capabilities: [
        "Natural Language Learning",
        "Personalized Study Paths",
        "24/7 Learning Support",
        "Progress Tracking",
        "Multi-Language Support"
      ]
    },
    {
      icon: <FaCode />,
      title: "Code Tools",
      description: "Advanced coding support with real-time analysis and suggestions",
      capabilities: [
        "Real-Time Code Analysis",
        "Interactive Debugging",
        "Error Prevention",
        "Solution Suggestions",
        "Best Practice Tips"
      ]
    },
    {
      icon: <FaTools />,
      title: "Smart Tools",
      description: "Productivity tools designed to maximize your learning potential",
      capabilities: [
        "Smart Summaries",
        "Auto-Organized Notes",
        "Study Planning",
        "Focus Timer",
        "Resource Management"
      ]
    }
  ];

  return (
    <section className="ai-tools-section">
      <div className="ai-tools-container">
        <h2 className="section-title">Advanced AI Integration & Features</h2>
        
        <div className="tools-grid">
          {tools.map((tool, index) => (
            <div key={index} className="tool-card">
              <div className="tool-icon">
                {tool.icon}
              </div>
              
              <h3 className="tool-title">{tool.title}</h3>
              <p className="tool-description">{tool.description}</p>
              
              <ul className="capabilities-list">
                {tool.capabilities.map((capability, capabilityIndex) => (
                  <li key={capabilityIndex} className="capability-item">
                    {capability}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AIToolsSection;
