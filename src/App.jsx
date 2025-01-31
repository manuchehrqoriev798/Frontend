import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import CreateCourse from './features/structuredLearning/pages/CreateCourse';
import CourseCatalog from './features/structuredLearning/pages/CourseCatalog';
import CreateStartup from './features/startupSimulation/pages/CreateStartup';
import StartupHub from './features/startupSimulation/pages/StartupHub';
import ChallengeHub from './features/engineeringMindset/pages/ChallengeHub';
import JoinContests from './features/engineeringMindset/pages/JoinContests';
import ChallengeCoding from './features/engineeringMindset/pages/challengeCoding/ChallengeCoding';
import ParticleBackground from './components/common/ParticleBackground';
import './styles/variables.css';
import './styles/components/buttons.css';
import './styles/components/sectionTitle.css';
import './styles/components/particles.css';
import './styles/global.css';
import './styles/theme.css';
import './styles/components/cards.css';

function App() {
  return (
    <Router>
      <div className="app">
        <ParticleBackground />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-course" element={<CreateCourse />} />
            <Route path="/course-catalog" element={<CourseCatalog />} />
            <Route path="/create-startup" element={<CreateStartup />} />
            <Route path="/startup-hub" element={<StartupHub />} />
            <Route path="/challenge-hub" element={<ChallengeHub />} />
            <Route path="/join-contests" element={<JoinContests />} />
            <Route path="/challenge-coding/:challengeId" element={<ChallengeCoding />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
