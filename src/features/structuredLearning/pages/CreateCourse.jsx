import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './CreateCourse.css';

const SUPPORTED_LANGUAGES = [
  'English',
  'Spanish',
  'French',
  'German',
  'Chinese',
  'Japanese',
  'Korean',
  'Russian',
  'Arabic',
  'Other'
];

const TIMELINE_OPTIONS = [
  '1-2 weeks',
  '1 month',
  '2-3 months',
  '3-6 months',
  '6-12 months',
  'More than 1 year'
];

const CreateCourse = () => {
  const [courseData, setCourseData] = useState({
    // Course Identity
    name: '',
    goal: '',
    timeline: '',
    language: '',
    depthPreference: 'foundational', // 'foundational', 'intermediate', 'advanced', 'expert'
    focusAreas: {
      theoreticalConcepts: false,
      practicalApplications: false,
      industryBestPractices: false,
      goalBasedLearning: false
    },
    
    // Course Requirements
    prerequisites: [
      { subject: '', proficiency: 'dont-know' }
    ],
    
    // Learning Preferences
    learningPreferences: {
      visualLearning: false,
      handsOnLearning: false,
      theoryBasedLearning: false,
      projectBasedLearning: false,
      custom: ''
    },
    
    // Course Objectives
    objectives: {
      theory: {
        selected: false,
        comprehensiveUnderstanding: false,
        conceptMastery: false
      },
      practical: {
        selected: false,
        handsOnProjects: false,
        realWorldImplementation: false
      },
      certification: {
        selected: false,
        examPreparation: false,
        professionalCertification: false
      },
      skillDevelopment: {
        selected: false,
        toolsMastery: false,
        technicalCapabilities: false
      }
    },
    
    // Resource Integration
    resources: {
      files: [],
      videos: [],
      codeExamples: [],
      interactiveExercises: false,
      documentation: false,
      practiceProblems: false,
      caseStudies: false
    },
    
    // Assessment Preferences
    assessments: {
      regularQuizzes: false,
      handsOnProjects: false,
      codeChallenges: false,
      peerReviews: false,
      finalAssessment: false
    }
  });

  const [currentStage, setCurrentStage] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle course creation logic here
    console.log('Course data:', courseData);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCourseData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleArrayInputChange = (section, field, index, value) => {
    setCourseData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].map((item, i) => 
          i === index ? value : item
        )
      }
    }));
  };

  const addNewItem = (section, field) => {
    setCourseData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: [...prev[section][field], '']
      }
    }));
  };

  const removeItem = (section, field, index) => {
    setCourseData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: prev[section][field].filter((_, i) => i !== index)
      }
    }));
  };

  const addPrerequisite = () => {
    setCourseData(prev => ({
      ...prev,
      prerequisites: [...prev.prerequisites, { subject: '', proficiency: 'dont-know' }]
    }));
  };

  const updatePrerequisite = (index, field, value) => {
    setCourseData(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.map((prereq, i) => 
        i === index ? { ...prereq, [field]: value } : prereq
      )
    }));
  };

  const removePrerequisite = (index) => {
    setCourseData(prev => ({
      ...prev,
      prerequisites: prev.prerequisites.filter((_, i) => i !== index)
    }));
  };

  const handleFileUpload = (type, files) => {
    setCourseData(prev => ({
      ...prev,
      resources: {
        ...prev.resources,
        [type]: [...prev.resources[type], ...Array.from(files)]
      }
    }));
  };

  const removeFile = (type, index) => {
    setCourseData(prev => ({
      ...prev,
      resources: {
        ...prev.resources,
        [type]: prev.resources[type].filter((_, i) => i !== index)
      }
    }));
  };

  const handleStageClick = (stageNumber) => {
    setCurrentStage(stageNumber);
  };

  return (
    <div className="create-course-container-structured-create-course">
      <NavbarDashboard />
      
      <main className="create-course-content-structured-create-course">
        <h1>Create Your Structured Learning Course</h1>
        
        <div className="course-creation-wrapper-structured-create-course">
          <form onSubmit={handleSubmit} className="course-form-structured-create-course">
            <div className="course-sections-wrapper-structured-create-course">
              {/* 1. COURSE IDENTITY */}
              <section className="form-section-structured-create-course">
                <h2>1. Course Identity</h2>
                <div className="form-group-structured-create-course">
                  <div>
                    <label>Course Title</label>
                    <input
                      type="text"
                      name="name"
                      value={courseData.name}
                      onChange={handleInputChange}
                      placeholder="e.g., Advanced Web Development"
                      required
                      minLength={3}
                      maxLength={100}
                    />
                  </div>

                  <div>
                    <label>Main Goal/Purpose</label>
                    <textarea
                      name="goal"
                      value={courseData.goal}
                      onChange={handleInputChange}
                      placeholder="What do you want to achieve with this course?"
                      required
                      rows={3}
                    />
                  </div>

                  <div>
                    <label>Target Timeline</label>
                    <div className="timeline-input-group-structured-create-course">
                      <select
                        name="timeline"
                        value={courseData.timeline}
                        onChange={handleInputChange}
                      >
                        <option value="">Choose from common timelines...</option>
                        {TIMELINE_OPTIONS.map(option => (
                          <option key={option} value={option}>{option}</option>
                        ))}
                      </select>
                      <span className="timeline-separator-structured-create-course">or</span>
                      <input
                        type="text"
                        name="timeline"
                        value={courseData.timeline}
                        onChange={handleInputChange}
                        placeholder="Type your own timeline"
                      />
                    </div>
                  </div>

                  <div>
                    <label>Course Language</label>
                    <select
                      name="language"
                      value={courseData.language}
                      onChange={handleInputChange}
                      required
                    >
                      <option value="">Select Language</option>
                      {SUPPORTED_LANGUAGES.map(lang => (
                        <option key={lang} value={lang}>{lang}</option>
                      ))}
                    </select>
                  </div>

                  <div className="depth-preference-structured-create-course">
                    <p>Depth Preference:</p>
                    <div className="radio-group-structured-create-course">
                      {['foundational', 'intermediate', 'advanced'].map(depth => (
                        <label key={depth} className="radio-label-structured-create-course">
                          <input
                            type="radio"
                            name="depthPreference"
                            value={depth}
                            checked={courseData.depthPreference === depth}
                            onChange={handleInputChange}
                            required
                          />
                          <div className="radio-content-structured-create-course">
                            <span className="radio-circle-structured-create-course"></span>
                            <span className="radio-text-structured-create-course">
                              {depth.charAt(0).toUpperCase() + depth.slice(1)}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="focus-areas-structured-create-course">
                    <p>Focus Areas:</p>
                    <div className="checkbox-group-structured-create-course">
                      {[
                        { id: 'theoreticalConcepts', label: 'Theoretical Concepts' },
                        { id: 'practicalApplications', label: 'Practical Applications' },
                        { id: 'goalBasedLearning', label: 'Goal Based Learning' }
                      ].map(area => (
                        <label key={area.id} className="checkbox-label-structured-create-course">
                          <input
                            type="checkbox"
                            name={`focusAreas.${area.id}`}
                            checked={courseData.focusAreas[area.id]}
                            onChange={e => {
                              setCourseData(prev => ({
                                ...prev,
                                focusAreas: {
                                  ...prev.focusAreas,
                                  [area.id]: e.target.checked
                                }
                              }));
                            }}
                          />
                          <div className="checkbox-content-structured-create-course">
                            <span className="checkbox-custom-structured-create-course"></span>
                            <span className="checkbox-text-structured-create-course">{area.label}</span>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 2. COURSE REQUIREMENTS */}
              <section className="form-section-structured-create-course">
                <h2>2. Requirements</h2>
                <div className="prerequisites-list-structured-create-course">
                  <button 
                    type="button" 
                    onClick={addPrerequisite}
                    className="add-prerequisite-button-structured-create-course"
                  >
                    <span className="button-icon">+</span>
                    Add Prerequisite
                  </button>
                  
                  {courseData.prerequisites.map((prereq, index) => (
                    <div key={index} className="prerequisite-card-structured-create-course">
                      <div className="prerequisite-content-structured-create-course">
                        <div className="prerequisite-row-structured-create-course">
                          <input
                            type="text"
                            value={prereq.subject}
                            onChange={e => updatePrerequisite(index, 'subject', e.target.value)}
                            placeholder="Enter prerequisite knowledge"
                            className="prerequisite-input-structured-create-course"
                          />
                          
                          <div className="proficiency-buttons-structured-create-course">
                            {[
                              { value: 'dont-know', label: 'Novice' },
                              { value: 'beginner', label: 'Beginner' },
                              { value: 'intermediate', label: 'Intermediate' },
                              { value: 'expert', label: 'Expert' }
                            ].map(level => (
                              <button
                                key={level.value}
                                type="button"
                                className={`proficiency-button-structured-create-course ${
                                  prereq.proficiency === level.value ? 'active' : ''
                                }`}
                                onClick={() => updatePrerequisite(index, 'proficiency', level.value)}
                              >
                                {level.label}
                              </button>
                            ))}
                          </div>

                          <button 
                            type="button" 
                            onClick={() => removePrerequisite(index)}
                            className="remove-prerequisite-button-structured-create-course"
                            aria-label="Remove prerequisite"
                          >
                            ×
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </section>

              {/* 3. LEARNING PREFERENCES */}
              <section className="form-section-structured-create-course">
                <h2>3. Learning Preferences</h2>
                <div className="learning-preferences-structured-create-course">
                  <div className="checkbox-group-structured-create-course">
                    {[
                      { id: 'visualLearning', label: 'Visual Learning' },
                      { id: 'theoryBasedLearning', label: 'Theory Based Learning' },
                      { id: 'projectBasedLearning', label: 'Project Based Learning' }
                    ].map(preference => (
                      <label key={preference.id} className="checkbox-label-structured-create-course">
                        <input
                          type="checkbox"
                          name={`learningPreferences.${preference.id}`}
                          checked={courseData.learningPreferences[preference.id]}
                          onChange={e => {
                            setCourseData(prev => ({
                              ...prev,
                              learningPreferences: {
                                ...prev.learningPreferences,
                                [preference.id]: e.target.checked
                              }
                            }));
                          }}
                        />
                        <div className="checkbox-content-structured-create-course">
                          <span className="checkbox-custom-structured-create-course"></span>
                          <span className="checkbox-text-structured-create-course">{preference.label}</span>
                        </div>
                      </label>
                    ))}
                  </div>
                  
                  <div className="custom-preference-structured-create-course">
                    <label className="input-label-structured-create-course">
                      Other Learning Preference
                    </label>
                    <input
                      type="text"
                      name="learningPreferences.custom"
                      value={courseData.learningPreferences.custom}
                      onChange={e => {
                        setCourseData(prev => ({
                          ...prev,
                          learningPreferences: {
                            ...prev.learningPreferences,
                            custom: e.target.value
                          }
                        }));
                      }}
                      placeholder="Add your own learning preference..."
                      className="input-field-structured-create-course"
                    />
                  </div>
                </div>
              </section>

              {/* 4. RESOURCE INTEGRATION */}
              <section className="form-section-structured-create-course">
                <h2>4. Resource Integration</h2>
                <div className="resources-structured-create-course">
                  <div className="resource-upload-structured-create-course">
                    <label className="resource-upload-label-structured-create-course">
                      <span className="resource-icon-structured-create-course">📚</span>
                      <span className="resource-text-structured-create-course">Files</span>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload('files', e.target.files)}
                        className="resource-input-structured-create-course"
                        accept=".pdf,.doc,.docx,.txt"
                      />
                    </label>
                    <div className="uploaded-files-structured-create-course">
                      {courseData.resources.files.map((file, index) => (
                        <div key={index} className="file-item-structured-create-course">
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile('files', index)}
                            className="remove-file-button-structured-create-course"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resource-upload-structured-create-course">
                    <label className="resource-upload-label-structured-create-course">
                      <span className="resource-icon-structured-create-course">🎥</span>
                      <span className="resource-text-structured-create-course">Videos</span>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload('videos', e.target.files)}
                        className="resource-input-structured-create-course"
                        accept="video/*"
                      />
                    </label>
                    <div className="uploaded-files-structured-create-course">
                      {courseData.resources.videos.map((file, index) => (
                        <div key={index} className="file-item-structured-create-course">
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile('videos', index)}
                            className="remove-file-button-structured-create-course"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="resource-upload-structured-create-course">
                    <label className="resource-upload-label-structured-create-course">
                      <span className="resource-icon-structured-create-course">💻</span>
                      <span className="resource-text-structured-create-course">Code Examples</span>
                      <input
                        type="file"
                        multiple
                        onChange={(e) => handleFileUpload('codeExamples', e.target.files)}
                        className="resource-input-structured-create-course"
                        accept=".js,.py,.java,.cpp,.html,.css"
                      />
                    </label>
                    <div className="uploaded-files-structured-create-course">
                      {courseData.resources.codeExamples.map((file, index) => (
                        <div key={index} className="file-item-structured-create-course">
                          <span>{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile('codeExamples', index)}
                            className="remove-file-button-structured-create-course"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              {/* 5. ASSESSMENT PREFERENCES */}
              <section className="form-section-structured-create-course">
                <h2>5. Assessment Preferences</h2>
                <div className="checkbox-group-structured-create-course">
                  {[
                    { id: 'regularQuizzes', label: 'Regular Quizzes' },
                    { id: 'handsOnProjects', label: 'Hands-on Projects' },
                    { id: 'peerReviews', label: 'Peer Reviews' },
                    { id: 'finalAssessment', label: 'Final Assessment' }
                  ].map(assessment => (
                    <label key={assessment.id} className="checkbox-label-structured-create-course">
                      <input
                        type="checkbox"
                        name={`assessments.${assessment.id}`}
                        checked={courseData.assessments[assessment.id]}
                        onChange={e => {
                          setCourseData(prev => ({
                            ...prev,
                            assessments: {
                              ...prev.assessments,
                              [assessment.id]: e.target.checked
                            }
                          }));
                        }}
                      />
                      <div className="checkbox-content-structured-create-course">
                        <span className="checkbox-custom-structured-create-course"></span>
                        <span className="checkbox-text-structured-create-course">{assessment.label}</span>
                      </div>
                    </label>
                  ))}
                </div>
              </section>
            </div>

            {/* Form Buttons */}
            <div className="button-group-structured-create-course">
              <div className="left-buttons-structured-create-course">
                <button type="button" className="cancel-button-structured-create-course">
                  Cancel
                </button>
              </div>
              <div className="right-buttons-structured-create-course">
                <button type="button" className="save-button-structured-create-course">
                  Save Draft
                </button>
                <button type="submit" className="create-button-structured-create-course">
                  Create Course
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

export default CreateCourse;
