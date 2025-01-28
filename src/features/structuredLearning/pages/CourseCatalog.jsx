import React, { useState } from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';
import './CourseCatalog.css';

const CourseCatalog = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filters, setFilters] = useState({
    subject: 'all',           // Primary filter
    academicLevel: 'all',     // Academic context
    skillLevel: 'all',        // Learning level
    institutionType: 'all',   // Provider type
    scheduleType: 'all',      // Time commitment
    duration: 'all',          // Time length
    language: 'all',          // Language
    certification: 'all',     // Outcome
    rating: 'all',           // Quality indicator
    price: 'all'             // Cost
  });

  const subjects = [
    'All Subjects',
    'Mathematics',
    'Physics',
    'Chemistry',
    'Biology',
    'Computer Science',
    'Literature',
    'History',
    'Geography',
    'Economics',
    'Psychology',
    'Sociology',
    'Philosophy',
    'Political Science',
    'Environmental Science',
    'Statistics',
    'Algebra',
    'Calculus',
    'Geometry',
    'Trigonometry',
    'Organic Chemistry',
    'Inorganic Chemistry',
    'Quantum Physics',
    'Classical Physics',
    'Molecular Biology',
    'Anatomy',
    'World History',
    'Art History',
    'Music Theory',
    'Linguistics'
  ];

  const academicLevels = [
    'All Academic Levels',
    'Elementary',
    'Middle School',
    'High School',
    'Undergraduate',
    'Graduate',
    'Doctoral',
    'Professional'
  ];

  const durations = [
    'Any Duration',
    '0-2 weeks',
    '2-4 weeks',
    '1-2 months',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Self-paced'
  ];

  const ratings = [
    'Any Rating',
    '4.5 & above',
    '4.0 & above',
    '3.5 & above',
    '3.0 & above'
  ];

  const prices = [
    'Any Price',
    'Free',
    'Free with Certificate',
    'Paid',
    'Under $25',
    'Under $50',
    'Under $100',
    'Under $200',
    'Subscription Based'
  ];

  const languages = [
    'Any Language',
    'English',
    'Spanish',
    'French',
    'German',
    'Chinese',
    'Japanese',
    'Korean',
    'Russian',
    'Arabic',
    'Portuguese',
    'Italian',
    'Hindi'
  ];

  const certifications = [
    'Any Certification',
    'Certificate of Completion',
    'Professional Certificate',
    'University Credit',
    'Accredited Certificate',
    'Industry Recognition',
    'No Certificate'
  ];

  const institutionTypes = [
    'Any Institution',
    'Universities',
    'Colleges',
    'Professional Schools',
    'Industry Partners',
    'Research Institutions',
    'Private Tutors',
    'Educational Companies',
    'Non-profit Organizations'
  ];

  const skillLevels = [
    'Any Level',
    'No Experience',
    'Basic',
    'Intermediate',
    'Advanced',
    'Expert',
    'Mixed Levels'
  ];

  const scheduleTypes = [
    'Any Schedule',
    'Self-paced',
    'Fixed Schedule',
    'Weekend Only',
    'Evening Classes',
    'Flexible Deadlines',
    'Part-time',
    'Full-time',
    'Accelerated'
  ];

  const handleFilterChange = (filterType, value) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: value
    }));
  };

  const popularCourses = [
    {
      id: 1,
      title: 'Machine Learning Fundamentals',
      description: 'Learn the basics of ML algorithms and implementations',
      lessons: 12,
      duration: '6 weeks',
      icon: '🤖',
      students: 2534,
      rating: 4.8
    },
    {
      id: 2,
      title: 'Web Development Bootcamp',
      description: 'Master full-stack development with modern technologies',
      lessons: 24,
      duration: '12 weeks',
      icon: '💻',
      students: 1845,
      rating: 4.9
    },
    {
      id: 3,
      title: 'Data Science Essentials',
      description: 'From data analysis to visualization and prediction',
      lessons: 16,
      duration: '8 weeks',
      icon: '📊',
      students: 2156,
      rating: 4.7
    },
    {
      id: 4,
      title: 'Mobile App Development',
      description: 'Build iOS and Android apps with React Native',
      lessons: 20,
      duration: '10 weeks',
      icon: '📱',
      students: 1632,
      rating: 4.6
    },
    {
      id: 5,
      title: 'Python Programming Mastery',
      description: 'From basics to advanced Python programming concepts',
      lessons: 22,
      duration: '11 weeks',
      icon: '🐍',
      students: 3241,
      rating: 4.9
    },
    {
      id: 6,
      title: 'Digital Marketing Strategy',
      description: 'Master modern digital marketing techniques',
      lessons: 18,
      duration: '9 weeks',
      icon: '📱',
      students: 2845,
      rating: 4.7
    }
  ];

  const recommendedCourses = [
    {
      id: 7,
      title: 'AI for Business',
      description: 'Implement AI solutions in business contexts',
      lessons: 14,
      duration: '7 weeks',
      icon: '🎯',
      students: 1243,
      rating: 4.5
    },
    {
      id: 8,
      title: 'Cloud Architecture',
      description: 'Master AWS, Azure, and Google Cloud platforms',
      lessons: 18,
      duration: '9 weeks',
      icon: '☁️',
      students: 1756,
      rating: 4.8
    },
    {
      id: 9,
      title: 'Cybersecurity Fundamentals',
      description: 'Protect systems and networks from cyber threats',
      lessons: 15,
      duration: '8 weeks',
      icon: '🔒',
      students: 1932,
      rating: 4.7
    },
    {
      id: 10,
      title: 'UI/UX Design Mastery',
      description: 'Create beautiful and functional user interfaces',
      lessons: 16,
      duration: '8 weeks',
      icon: '🎨',
      students: 1534,
      rating: 4.9
    },
    {
      id: 11,
      title: 'Blockchain Development',
      description: 'Build decentralized applications and smart contracts',
      lessons: 20,
      duration: '10 weeks',
      icon: '⛓️',
      students: 1432,
      rating: 4.6
    },
    {
      id: 12,
      title: 'Game Development Unity',
      description: 'Create 3D games with Unity engine',
      lessons: 25,
      duration: '12 weeks',
      icon: '🎮',
      students: 2156,
      rating: 4.8
    }
  ];

  const trendingCourses = [
    {
      id: 13,
      title: 'DevOps Engineering',
      description: 'Master CI/CD pipelines and cloud deployment',
      lessons: 16,
      duration: '8 weeks',
      icon: '🔄',
      students: 1876,
      rating: 4.7
    },
    {
      id: 14,
      title: 'Flutter App Development',
      description: 'Build cross-platform mobile apps',
      lessons: 20,
      duration: '10 weeks',
      icon: '📱',
      students: 2234,
      rating: 4.8
    },
    {
      id: 15,
      title: 'Data Analytics with R',
      description: 'Statistical analysis and data visualization',
      lessons: 18,
      duration: '9 weeks',
      icon: '📊',
      students: 1654,
      rating: 4.6
    },
    {
      id: 16,
      title: 'Software Architecture',
      description: 'Design scalable software systems',
      lessons: 15,
      duration: '8 weeks',
      icon: '🏗️',
      students: 1987,
      rating: 4.9
    },
    {
      id: 17,
      title: 'Ethical Hacking',
      description: 'Learn penetration testing and security',
      lessons: 22,
      duration: '11 weeks',
      icon: '🔐',
      students: 2543,
      rating: 4.8
    },
    {
      id: 18,
      title: 'Docker & Kubernetes',
      description: 'Container orchestration mastery',
      lessons: 19,
      duration: '10 weeks',
      icon: '🐳',
      students: 1876,
      rating: 4.7
    }
  ];

  const newReleases = [
    {
      id: 19,
      title: 'Web3 Development',
      description: 'Build next-gen decentralized applications',
      lessons: 16,
      duration: '8 weeks',
      icon: '🌐',
      students: 876,
      rating: 4.5
    },
    {
      id: 20,
      title: 'AR/VR Development',
      description: 'Create immersive experiences',
      lessons: 20,
      duration: '10 weeks',
      icon: '👓',
      students: 654,
      rating: 4.6
    },
    {
      id: 21,
      title: 'GraphQL API Design',
      description: 'Modern API development with GraphQL',
      lessons: 14,
      duration: '7 weeks',
      icon: '🔗',
      students: 543,
      rating: 4.7
    },
    {
      id: 22,
      title: 'IoT Programming',
      description: 'Connect and program IoT devices',
      lessons: 18,
      duration: '9 weeks',
      icon: '🤖',
      students: 432,
      rating: 4.4
    },
    {
      id: 23,
      title: 'Quantum Computing Basics',
      description: 'Introduction to quantum algorithms',
      lessons: 12,
      duration: '6 weeks',
      icon: '⚛️',
      students: 321,
      rating: 4.5
    },
    {
      id: 24,
      title: 'Swift UI Development',
      description: 'Modern iOS app development',
      lessons: 16,
      duration: '8 weeks',
      icon: '📱',
      students: 765,
      rating: 4.6
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="course-card-structured-catalog">
      <div className="course-icon-structured-catalog">{course.icon}</div>
      <h3>{course.title}</h3>
      <p>{course.description}</p>
      <div className="course-stats-structured-catalog">
        <div className="rating-structured-catalog">
          {'⭐'.repeat(Math.floor(course.rating))}
          <span>{course.rating}</span>
        </div>
        <div className="students-structured-catalog">
          👥 {course.students.toLocaleString()} students
        </div>
      </div>
      <div className="course-meta-structured-catalog">
        <span>📚 {course.lessons} Lessons</span>
        <span>⏱️ {course.duration}</span>
      </div>
      <button className="enroll-button-structured-catalog">Enroll Now</button>
    </div>
  );

  // Modified filter function to search across all course arrays
  const getSearchResults = () => {
    if (!searchQuery.trim()) {
      return []; // Return empty array if no search query
    }
    
    const query = searchQuery.toLowerCase().trim();
    const allCourses = [
      ...popularCourses,
      ...recommendedCourses,
      ...trendingCourses,
      ...newReleases
    ];
    
    return allCourses.filter(course => 
      course.title.toLowerCase().includes(query) ||
      course.description.toLowerCase().includes(query)
    );
  };

  // Handle search
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  // Get search results
  const searchResults = getSearchResults();

  return (
    <div className="course-catalog-container-structured-catalog">
      <NavbarDashboard />
      <main className="course-catalog-content-structured-catalog">
        <div className="panel-container-structured-catalog">
          <div className="search-section-structured-catalog">
            <h1>Explore Courses</h1>
            <form 
              className="search-bar-structured-catalog"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="text"
                placeholder="Search for courses..."
                value={searchQuery}
                onChange={handleSearch}
              />
              <button 
                type="submit"
                className="search-button-structured-catalog"
              >
                🔍
              </button>
            </form>
            
            <div className="filters-section-structured-catalog">
              {/* Primary Filter */}
              <div className="filter-group-structured-catalog">
                <label>Subject</label>
                <select 
                  value={filters.subject}
                  onChange={(e) => handleFilterChange('subject', e.target.value)}
                >
                  {subjects.map(subject => (
                    <option key={subject} value={subject.toLowerCase()}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              {/* Academic Context */}
              <div className="filter-group-structured-catalog">
                <label>Academic Level</label>
                <select 
                  value={filters.academicLevel}
                  onChange={(e) => handleFilterChange('academicLevel', e.target.value)}
                >
                  {academicLevels.map(level => (
                    <option key={level} value={level.toLowerCase()}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Learning Level */}
              <div className="filter-group-structured-catalog">
                <label>Skill Level</label>
                <select 
                  value={filters.skillLevel}
                  onChange={(e) => handleFilterChange('skillLevel', e.target.value)}
                >
                  {skillLevels.map(level => (
                    <option key={level} value={level.toLowerCase()}>
                      {level}
                    </option>
                  ))}
                </select>
              </div>

              {/* Provider Type */}
              <div className="filter-group-structured-catalog">
                <label>Institution Type</label>
                <select 
                  value={filters.institutionType}
                  onChange={(e) => handleFilterChange('institutionType', e.target.value)}
                >
                  {institutionTypes.map(type => (
                    <option key={type} value={type.toLowerCase()}>
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Commitment */}
              <div className="filter-group-structured-catalog">
                <label>Schedule Type</label>
                <select 
                  value={filters.scheduleType}
                  onChange={(e) => handleFilterChange('scheduleType', e.target.value)}
                >
                  {scheduleTypes.map(schedule => (
                    <option key={schedule} value={schedule.toLowerCase()}>
                      {schedule}
                    </option>
                  ))}
                </select>
              </div>

              {/* Time Length */}
              <div className="filter-group-structured-catalog">
                <label>Duration</label>
                <select 
                  value={filters.duration}
                  onChange={(e) => handleFilterChange('duration', e.target.value)}
                >
                  {durations.map(duration => (
                    <option key={duration} value={duration.toLowerCase()}>
                      {duration}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language */}
              <div className="filter-group-structured-catalog">
                <label>Language</label>
                <select 
                  value={filters.language}
                  onChange={(e) => handleFilterChange('language', e.target.value)}
                >
                  {languages.map(language => (
                    <option key={language} value={language.toLowerCase()}>
                      {language}
                    </option>
                  ))}
                </select>
              </div>

              {/* Outcome */}
              <div className="filter-group-structured-catalog">
                <label>Certification</label>
                <select 
                  value={filters.certification}
                  onChange={(e) => handleFilterChange('certification', e.target.value)}
                >
                  {certifications.map(cert => (
                    <option key={cert} value={cert.toLowerCase()}>
                      {cert}
                    </option>
                  ))}
                </select>
              </div>

              {/* Quality Indicator */}
              <div className="filter-group-structured-catalog">
                <label>Rating</label>
                <select 
                  value={filters.rating}
                  onChange={(e) => handleFilterChange('rating', e.target.value)}
                >
                  {ratings.map(rating => (
                    <option key={rating} value={rating.toLowerCase()}>
                      {rating}
                    </option>
                  ))}
                </select>
              </div>

              {/* Cost */}
              <div className="filter-group-structured-catalog">
                <label>Price</label>
                <select 
                  value={filters.price}
                  onChange={(e) => handleFilterChange('price', e.target.value)}
                >
                  {prices.map(price => (
                    <option key={price} value={price.toLowerCase()}>
                      {price}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="active-filters-structured-catalog">
              {Object.entries(filters).map(([key, value]) => (
                value !== 'all' && (
                  <span key={key} className="filter-tag-structured-catalog">
                    {value}
                    <button onClick={() => handleFilterChange(key, 'all')}>×</button>
                  </span>
                )
              ))}
            </div>
          </div>
        </div>

        <section className="courses-section-structured-catalog">
          {/* Search Results Panel with distinct design */}
          {searchQuery.trim() && (
            <div className="search-results-structured-catalog">
              <h2>🔍 Search Results</h2>
              <div className="search-results-count">
                {searchResults.length} {searchResults.length === 1 ? 'course' : 'courses'} found
              </div>
              <div className="course-grid-structured-catalog">
                {searchResults.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
              {searchResults.length === 0 && (
                <div className="no-results-structured-catalog">
                  <h3>No courses found</h3>
                  <p>Try adjusting your search terms or filters</p>
                </div>
              )}
            </div>
          )}

          {/* Original Panels - Always visible */}
          <div className="panel-container-structured-catalog">
            <div className="popular-courses-structured-catalog">
              <h2>Most Popular Courses</h2>
              <div className="course-grid-structured-catalog">
                {popularCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          <div className="panel-container-structured-catalog">
            <div className="recommended-courses-structured-catalog">
              <h2>Courses For You</h2>
              <div className="course-grid-structured-catalog">
                {recommendedCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          <div className="panel-container-structured-catalog">
            <div className="trending-courses-structured-catalog">
              <h2>Trending Courses</h2>
              <div className="course-grid-structured-catalog">
                {trendingCourses.map(course => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
            </div>
          </div>

          <div className="panel-container-structured-catalog">
            <div className="new-releases-structured-catalog">
              <h2>New Releases</h2>
              <div className="course-grid-structured-catalog">
                {newReleases.map(course => (
                  <CourseCard key={course.id} course={course} />
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

export default CourseCatalog;
