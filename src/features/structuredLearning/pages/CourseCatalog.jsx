import React from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';

const CourseCatalog = () => {
  return (
    <div className="course-catalog-container">
      <NavbarDashboard />
      <main className="course-catalog-content">
        <h1>Course Catalog</h1>
        {/* Course catalog content will go here */}
      </main>
      <Footer />
    </div>
  );
};

export default CourseCatalog;
