import React from 'react';
import NavbarHome from '../components/common/NavbarHome';
import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import FeaturedSection from '../components/landing/FeaturedSection';
import AIToolsSection from '../components/landing/AIToolsSection';
import PricingSection from '../components/landing/PricingSection';
import Footer from '../components/common/Footer';

const Home = () => {
  return (
    <div className="home-container">
      <NavbarHome />
      
      {/* Hero Section */}
      <div id="home">
        <HeroSection />
      </div>

      {/* How It Works Section */}
      <div id="how-it-works">
        <HowItWorksSection />
      </div>

      <div id="features">
        <FeaturedSection />
      </div>

      <div id="ai-tools">
        <AIToolsSection />
      </div>

      <div id="pricing">
        <PricingSection />
      </div>

      <div id="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
