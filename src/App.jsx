import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import ParticleBackground from './components/common/ParticleBackground';
import './styles/variables.css';
import './styles/components/buttons.css';
import './styles/components/featurePanels.css';
import './styles/components/sectionTitle.css';
import './styles/components/navbarDashboard.css';
import './styles/components/navbarHome.css';
import './styles/components/particles.css';
import './styles/components/heroSection.css';

function App() {
  return (
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div style={{ position: 'relative', minHeight: '100vh' }}>
        <ParticleBackground />
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
