import React, { useState } from 'react';
import { FaCheck, FaInfoCircle, FaTimes } from 'react-icons/fa';
import '../../styles/components/pricingSection.css';

const PricingSection = () => {
  const [showComparison, setShowComparison] = useState(false);

  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <h2 className="section-title">Choose the Perfect Plan for You</h2>
        
        <div className="pricing-grid">
          {/* Free Plan */}
          <div className="pricing-card free">
            <div className="card-header">
              <h3>Free</h3>
              <div className="price">$0<span>/mo</span></div>
              <p className="subtitle">Start Your Journey</p>
            </div>
            
            <div className="features-list">
              <div className="feature-group">
                <h4>✦ Features</h4>
                <ul>
                  <li><FaCheck /> 5hr Speech-to-Speech</li>
                  <li><FaCheck /> Create 2 Course</li>
                  <li><FaCheck /> Basic Code Editor</li>
                </ul>
              </div>
              
              <div className="feature-group">
                <h4>✦ Support</h4>
                <ul>
                  <li><FaCheck /> Community Support (48hr Response)</li>
                </ul>
              </div>
            </div>
            
            <button className="plan-button">Try Free</button>
          </div>

          {/* Pro Plan */}
          <div className="pricing-card pro popular">
            <div className="popular-badge">Most Popular</div>
            <div className="card-header">
              <h3>Pro</h3>
              <div className="price">$29<span>/mo</span></div>
              <p className="subtitle">Most Popular</p>
            </div>
            
            <div className="features-list">
              <div className="feature-group">
                <h4>✦ Features</h4>
                <ul>
                  <li><FaCheck /> 20hr Speech-to-Speech</li>
                  <li><FaCheck /> Create 10 Courses</li>
                  <li><FaCheck /> Advanced Editor + Debugger</li>
                </ul>
              </div>
              
              <div className="feature-group">
                <h4>✦ Support</h4>
                <ul>
                  <li><FaCheck /> Priority Support (24hr Response)</li>
                </ul>
              </div>
            </div>
            
            <button className="plan-button">Get Started</button>
          </div>

          {/* Premium Plan */}
          <div className="pricing-card premium">
            <div className="card-header">
              <h3>Premium</h3>
              <div className="price">$49<span>/mo</span></div>
              <p className="subtitle">Ultimate Experience</p>
            </div>
            
            <div className="features-list">
              <div className="feature-group">
                <h4>✦ Features</h4>
                <ul>
                  <li><FaCheck /> Unlimited Speech-to-Speech</li>
                  <li><FaCheck /> Unlimited Courses</li>
                  <li><FaCheck /> Premium IDE + Advanced Debug</li>
                </ul>
              </div>
              
              <div className="feature-group">
                <h4>✦ Support</h4>
                <ul>
                  <li><FaCheck /> 24/7 Priority Support (2hr Response)</li>
                </ul>
              </div>
            </div>
            
            <button className="plan-button">Go Premium</button>
          </div>

          {/* Enterprise Plan */}
          <div className="pricing-card enterprise">
            <div className="card-header">
              <h3>Enterprise</h3>
              <div className="price">Custom</div>
              <p className="subtitle">Enterprise Solutions</p>
            </div>
            
            <div className="features-list">
              <div className="feature-group">
                <h4>✦ Features</h4>
                <ul>
                  <li><FaCheck /> Custom Usage Limits (1hr/$1)</li>
                  <li><FaCheck /> Custom Course Creation (1 course/$1)</li>
                  <li><FaCheck /> Debugger $3/month</li>
                </ul>
              </div>
              
              <div className="feature-group">
                <h4>✦ Support</h4>
                <ul>
                  <li><FaCheck /> Dedicated Support Team (from 5min Response)</li>
                </ul>
              </div>
            </div>
            
            <button className="plan-button">Contact Sales</button>
          </div>
        </div>

        <div className="compare-plans">
          <button 
            className="compare-button"
            onClick={() => setShowComparison(!showComparison)}
          >
            <FaInfoCircle /> View Full Feature Comparison Table
          </button>
        </div>

        {showComparison && (
          <div className="comparison-table">
            <h3>Detailed Feature Comparison</h3>
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Plans</th>
                    <th>Free</th>
                    <th>Pro</th>
                    <th>Premium</th>
                    <th>Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Speech-to-Speech</td>
                    <td>5hr</td>
                    <td>20hrs</td>
                    <td>Unlimited</td>
                    <td>1hr/$1</td>
                  </tr>
                  <tr>
                    <td>Course Creation</td>
                    <td>2</td>
                    <td>10</td>
                    <td>Unlimited</td>
                    <td>1 course/$1</td>
                  </tr>
                  <tr>
                    <td>Code Editor</td>
                    <td>Basic</td>
                    <td>Advanced + Debug</td>
                    <td>Premium IDE</td>
                    <td>Debugger $3/month</td>
                  </tr>
                  <tr>
                    <td>Support Response Time</td>
                    <td>Community (48hr)</td>
                    <td>Priority (24hr)</td>
                    <td>24/7 Priority (2hr)</td>
                    <td>Dedicated (from 5min)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default PricingSection;
