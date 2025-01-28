import React from 'react';
import NavbarDashboard from '../../../components/common/NavbarDashboard';
import Footer from '../../../components/common/Footer';

const CreateStartup = () => {
  return (
    <div className="create-startup-container">
      <NavbarDashboard />
      <main className="create-startup-content">
        <h1>Create Startup</h1>
        {/* Startup creation form will go here */}
      </main>
      <Footer />
    </div>
  );
};

export default CreateStartup;
