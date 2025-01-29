import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './CreateStartup.css';

const INDUSTRY_SECTORS = [
  'Technology',
  'Healthcare',
  'Finance',
  'Education',
  'E-commerce',
  'Manufacturing',
  'Entertainment',
  'Other'
];

const FUNDING_STAGES = [
  'Pre-seed',
  'Seed',
  'Series A',
  'Series B',
  'Series C',
  'Growth Stage',
  'IPO Ready'
];

const CreateStartup = () => {
  const [startupData, setStartupData] = useState({
    // Basic Information
    name: '',
    vision: '',
    industry: '',
    fundingStage: '',
    targetMarket: '',
    businessModel: 'b2b', // 'b2b', 'b2c', 'b2b2c'
    
    // Market Analysis
    marketSize: {
      tam: '',
      sam: '',
      som: ''
    },
    competitors: [
      { name: '', strengths: '', weaknesses: '' }  // Single default empty competitor
    ],
    
    // Product/Service Details
    productDetails: {
      description: '',
      uniqueSellingPoints: [],
      developmentStage: 'concept', // 'concept', 'prototype', 'mvp', 'launched'
      intellectualProperty: false
    },
    
    // Team Structure
    teamStructure: {
      coFounders: false,
      technicalTeam: false,
      salesTeam: false,
      marketing: false,
      operations: false,
      advisors: false,
      custom: ''
    },
    
    // Financial Planning
    financials: {
      initialInvestment: '',
      monthlyBurnRate: '',
      revenueModel: [],
      breakEvenTimeline: '',
      fundingNeeds: ''
    },
    
    // Growth Strategy
    growthStrategy: {
      marketingChannels: [],
      expansionPlans: '',
      partnerships: [],
      scalabilityApproach: ''
    }
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setStartupData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleNestedInputChange = (category, field, value) => {
    setStartupData(prev => ({
      ...prev,
      [category]: {
        ...prev[category],
        [field]: value
      }
    }));
  };

  const addCompetitor = () => {
    setStartupData(prev => ({
      ...prev,
      competitors: [...prev.competitors, { name: '', strengths: '', weaknesses: '' }]
    }));
  };

  const updateCompetitor = (index, field, value) => {
    setStartupData(prev => ({
      ...prev,
      competitors: prev.competitors.map((comp, i) => 
        i === index ? { ...comp, [field]: value } : comp
      )
    }));
  };

  const removeCompetitor = (index) => {
    setStartupData(prev => ({
      ...prev,
      competitors: prev.competitors.filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Startup data:', startupData);
  };

  return (
    <div className="create-startup-container-startup-create">
      <NavbarDashboard />
      
      <main className="create-startup-content-startup-create">
        <h1>Create Your Startup</h1>
        
        <div className="startup-creation-wrapper-startup-create">
          <form onSubmit={handleSubmit} className="startup-form-startup-create">
            <div className="startup-sections-wrapper-startup-create">
              {/* 1. BASIC INFORMATION */}
              <section className="form-section-startup-create">
                <h2>1. Basic Information</h2>
                <div className="form-group-startup-create">
                  <div>
                    <label>Startup Name</label>
                    <input
                      type="text"
                      name="name"
                      value={startupData.name}
                      onChange={handleInputChange}
                      placeholder="Enter your startup name"
                      required
                    />
                  </div>

                  <div>
                    <label>Vision Statement</label>
                    <textarea
                      name="vision"
                      value={startupData.vision}
                      onChange={handleInputChange}
                      placeholder="What's your startup's vision?"
                      required
                      rows={3}
                    />
                  </div>

                  <div>
                    <label>Industry Sector</label>
                    <select
                      name="industry"
                      value={startupData.industry}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Industry</option>
                      {INDUSTRY_SECTORS.map(sector => (
                        <option key={sector} value={sector}>{sector}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Funding Stage</label>
                    <select
                      name="fundingStage"
                      value={startupData.fundingStage}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Funding Stage</option>
                      {FUNDING_STAGES.map(stage => (
                        <option key={stage} value={stage}>{stage}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label>Target Market</label>
                    <input
                      type="text"
                      name="targetMarket"
                      value={startupData.targetMarket}
                      onChange={handleInputChange}
                      placeholder="Describe your target market"
                      required
                    />
                  </div>

                  <div>
                    <label>Business Model</label>
                    <div className="radio-group-startup-create">
                      {[
                        { value: 'b2b', label: 'B2B' },
                        { value: 'b2c', label: 'B2C' },
                        { value: 'b2b2c', label: 'B2B2C' }
                      ].map(model => (
                        <label key={model.value} className="radio-label-startup-create">
                          <input
                            type="radio"
                            name="businessModel"
                            value={model.value}
                            checked={startupData.businessModel === model.value}
                            onChange={handleInputChange}
                          />
                          <div className="radio-content-startup-create">
                            <span className="radio-circle-startup-create"></span>
                            <span className="radio-text-startup-create">{model.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. MARKET ANALYSIS */}
              <section className="form-section-startup-create">
                <h2>2. Market Analysis</h2>
                <div className="form-group-startup-create">
                  <div className="market-size-inputs-startup-create">
                    <div>
                      <label>Total Addressable Market (TAM)</label>
                      <input
                        type="text"
                        value={startupData.marketSize.tam}
                        onChange={(e) => handleNestedInputChange('marketSize', 'tam', e.target.value)}
                        placeholder="Enter TAM size"
                      />
                    </div>
                    <div>
                      <label>Serviceable Addressable Market (SAM)</label>
                      <input
                        type="text"
                        value={startupData.marketSize.sam}
                        onChange={(e) => handleNestedInputChange('marketSize', 'sam', e.target.value)}
                        placeholder="Enter SAM size"
                      />
                    </div>
                    <div>
                      <label>Serviceable Obtainable Market (SOM)</label>
                      <input
                        type="text"
                        value={startupData.marketSize.som}
                        onChange={(e) => handleNestedInputChange('marketSize', 'som', e.target.value)}
                        placeholder="Enter SOM size"
                      />
                    </div>
                  </div>

                  <div className="competitors-section-startup-create">
                    <button 
                      type="button" 
                      onClick={addCompetitor}
                      className="add-competitor-button-startup-create"
                    >
                      Add Competitor
                    </button>
                    
                    {startupData.competitors.map((competitor, index) => (
                      <div key={index} className="competitor-card-startup-create">
                        <div className="competitor-inputs-startup-create">
                          <input
                            type="text"
                            value={competitor.name}
                            onChange={(e) => updateCompetitor(index, 'name', e.target.value)}
                            placeholder="Competitor name"
                          />
                          <input
                            type="text"
                            value={competitor.strengths}
                            onChange={(e) => updateCompetitor(index, 'strengths', e.target.value)}
                            placeholder="Strengths"
                          />
                          <input
                            type="text"
                            value={competitor.weaknesses}
                            onChange={(e) => updateCompetitor(index, 'weaknesses', e.target.value)}
                            placeholder="Weaknesses"
                          />
                          <button 
                            type="button"
                            onClick={() => removeCompetitor(index)}
                            className="remove-competitor-button-startup-create"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* 3. PRODUCT/SERVICE DETAILS */}
              <section className="form-section-startup-create">
                <h2>3. Product/Service Details</h2>
                <div className="form-group-startup-create">
                  <div>
                    <label>Product Description</label>
                    <textarea
                      value={startupData.productDetails.description}
                      onChange={(e) => handleNestedInputChange('productDetails', 'description', e.target.value)}
                      placeholder="Describe your product or service"
                      rows={4}
                    />
                  </div>

                  <div>
                    <label>Development Stage</label>
                    <div className="radio-group-startup-create">
                      {[
                        { value: 'concept', label: 'Concept' },
                        { value: 'prototype', label: 'Prototype' },
                        { value: 'mvp', label: 'MVP' },
                        { value: 'launched', label: 'Launched' }
                      ].map(stage => (
                        <label key={stage.value} className="radio-label-startup-create">
                          <input
                            type="radio"
                            name="developmentStage"
                            value={stage.value}
                            checked={startupData.productDetails.developmentStage === stage.value}
                            onChange={(e) => handleNestedInputChange('productDetails', 'developmentStage', e.target.value)}
                          />
                          <div className="radio-content-startup-create">
                            <span className="radio-circle-startup-create"></span>
                            <span className="radio-text-startup-create">{stage.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="checkbox-group-startup-create">
                    <label className="checkbox-label-startup-create">
                      <input
                        type="checkbox"
                        checked={startupData.productDetails.intellectualProperty}
                        onChange={(e) => handleNestedInputChange('productDetails', 'intellectualProperty', e.target.checked)}
                      />
                      <div className="checkbox-content-startup-create">
                        <span className="checkbox-custom-startup-create"></span>
                        <span className="checkbox-text-startup-create">Intellectual Property Protection</span>
                      </div>
                    </label>
                  </div>
                </div>
              </section>

              {/* 4. TEAM STRUCTURE */}
              <section className="form-section-startup-create">
                <h2>4. Team Structure</h2>
                <div className="form-group-startup-create">
                  <div className="checkbox-group-startup-create">
                    {[
                      { id: 'coFounders', label: 'Co-Founders' },
                      { id: 'technicalTeam', label: 'Technical Team' },
                      { id: 'salesTeam', label: 'Sales Team' },
                      { id: 'marketing', label: 'Marketing' },
                      { id: 'operations', label: 'Operations' },
                      { id: 'advisors', label: 'Advisors' }
                    ].map(role => (
                      <label key={role.id} className="checkbox-label-startup-create">
                        <input
                          type="checkbox"
                          checked={startupData.teamStructure[role.id]}
                          onChange={(e) => handleNestedInputChange('teamStructure', role.id, e.target.checked)}
                        />
                        <div className="checkbox-content-startup-create">
                          <span className="checkbox-custom-startup-create"></span>
                          <span className="checkbox-text-startup-create">{role.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>

                  <div>
                    <label>Additional Team Members</label>
                    <input
                      type="text"
                      value={startupData.teamStructure.custom}
                      onChange={(e) => handleNestedInputChange('teamStructure', 'custom', e.target.value)}
                      placeholder="Specify other team roles"
                    />
                  </div>
                </div>
              </section>

              {/* 5. FINANCIAL PLANNING */}
              <section className="form-section-startup-create">
                <h2>5. Financial Planning</h2>
                <div className="form-group-startup-create">
                  <div>
                    <label>Initial Investment Required</label>
                    <input
                      type="text"
                      value={startupData.financials.initialInvestment}
                      onChange={(e) => handleNestedInputChange('financials', 'initialInvestment', e.target.value)}
                      placeholder="Enter initial investment amount"
                    />
                  </div>

                  <div>
                    <label>Monthly Burn Rate</label>
                    <input
                      type="text"
                      value={startupData.financials.monthlyBurnRate}
                      onChange={(e) => handleNestedInputChange('financials', 'monthlyBurnRate', e.target.value)}
                      placeholder="Estimated monthly expenses"
                    />
                  </div>

                  <div>
                    <label>Break-even Timeline</label>
                    <input
                      type="text"
                      value={startupData.financials.breakEvenTimeline}
                      onChange={(e) => handleNestedInputChange('financials', 'breakEvenTimeline', e.target.value)}
                      placeholder="Expected time to break-even"
                    />
                  </div>

                  <div>
                    <label>Funding Needs</label>
                    <input
                      type="text"
                      value={startupData.financials.fundingNeeds}
                      onChange={(e) => handleNestedInputChange('financials', 'fundingNeeds', e.target.value)}
                      placeholder="Total funding required"
                    />
                  </div>
                </div>
              </section>

              {/* 6. GROWTH STRATEGY */}
              <section className="form-section-startup-create">
                <h2>6. Growth Strategy</h2>
                <div className="form-group-startup-create">
                  <div>
                    <label>Marketing Channels</label>
                    <textarea
                      value={startupData.growthStrategy.marketingChannels.join('\n')}
                      onChange={(e) => handleNestedInputChange('growthStrategy', 'marketingChannels', e.target.value.split('\n'))}
                      placeholder="List your marketing channels (one per line)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label>Expansion Plans</label>
                    <textarea
                      value={startupData.growthStrategy.expansionPlans}
                      onChange={(e) => handleNestedInputChange('growthStrategy', 'expansionPlans', e.target.value)}
                      placeholder="Describe your expansion strategy"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label>Key Partnerships</label>
                    <textarea
                      value={startupData.growthStrategy.partnerships.join('\n')}
                      onChange={(e) => handleNestedInputChange('growthStrategy', 'partnerships', e.target.value.split('\n'))}
                      placeholder="List potential partnerships (one per line)"
                      rows={3}
                    />
                  </div>

                  <div>
                    <label>Scalability Approach</label>
                    <textarea
                      value={startupData.growthStrategy.scalabilityApproach}
                      onChange={(e) => handleNestedInputChange('growthStrategy', 'scalabilityApproach', e.target.value)}
                      placeholder="Describe how you plan to scale"
                      rows={3}
                    />
                  </div>
                </div>
              </section>

            </div>

            {/* Form Buttons */}
            <div className="button-group-startup-create">
              <div className="left-buttons-startup-create">
                <button type="button" className="cancel-button-startup-create">
                  Cancel
                </button>
              </div>
              <div className="right-buttons-startup-create">
                <button type="button" className="save-button-startup-create">
                  Save Draft
                </button>
                <button type="submit" className="create-button-startup-create">
                  Create Startup
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CreateStartup;
