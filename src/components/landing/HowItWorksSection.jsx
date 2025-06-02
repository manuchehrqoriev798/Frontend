import React from 'react';
import { Link } from 'react-router-dom';
import { FiTarget, FiBookOpen, FiTool, FiZap } from 'react-icons/fi';
import './HowItWorks.css';

const HowItWorksSection = () => {
  return (
    <section className="how-it-works-section">
      <div className="content-wrapper-how-it-works">
        <h2 className="section-title">WHERE DO YOU WANT TO GO?</h2>
        
        <div className="journey-tree">
          <div className="tree-node main-goal">
            <span className="node-icon"><FiTarget className="icon-svg" /></span>
          </div>
          
          <div className="tree-branches">
            <div className="path-option">
              <div className="tree-node">
                <span className="node-icon"><FiBookOpen className="icon-svg" /></span>
                <span className="node-title">LEARN</span>
              </div>
              <div className="path-details">
                <h3>STRUCTURED LEARNING</h3>
                <p>"I want to master specific skills systematically through personalized learning paths and interactive courses tailored to my goals"</p>
              </div>
            </div>

            <div className="path-option">
              <div className="tree-node">
                <span className="node-icon"><FiTool className="icon-svg" /></span>
                <span className="node-title">PRACTICE</span>
              </div>
              <div className="path-details">
                <h3>ENGINEERING MINDSET</h3>
                <p>"I want to enhance my problem-solving skills through challenging exercises and participate in competitive programming contests"</p>
              </div>
            </div>

            <div className="path-option">
              <div className="tree-node">
                <span className="node-icon"><FiZap className="icon-svg" /></span>
                <span className="node-title">CREATE</span>
              </div>
              <div className="path-details">
                <h3>STARTUP BUILDER</h3>
                <p>"I want to develop entrepreneurial skills and bring my innovative ideas to life by building my own startup or joining exciting ventures"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
