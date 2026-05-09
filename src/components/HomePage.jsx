import React from 'react';
import HeroSection from './section/HeroSection';
import WhoWeAreSection from './section/WhoWeAreSection';
import CoreServicesSection from './section/CoreServicesSection';
// import other sections similarly

const HomePage = ({ setCurrentPage, services }) => {
  return (
    <>
      <HeroSection setCurrentPage={setCurrentPage} />
      <WhoWeAreSection />
      <CoreServicesSection services={services} setCurrentPage={setCurrentPage} />
      {/* Add IndustriesSection, WhyChooseUsSection, ProjectsSection, CTASection here */}
    </>
  );
};

export default HomePage;
