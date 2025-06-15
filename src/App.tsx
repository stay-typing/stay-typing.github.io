
import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection'; // New
import ExperienceSection from './components/ExperienceSection'; // Renamed from PortfolioSection
import SkillsSection from './components/SkillsSection';
import FAQSection from './components/FAQSection'; // New
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import { NAV_LINKS } from './constants';

const App: React.FC = () => {
  // Ensure NAV_LINKS has the correct number of items for indexing
  const getNavLinkId = (label: string) => NAV_LINKS.find(link => link.label === label)?.id || '';

  return (
    <div className="min-h-screen flex flex-col bg-primary-bg">
      <Navbar />
      <main className="flex-grow">
        <HeroSection id={getNavLinkId('Home')} />
        <AboutSection id={getNavLinkId('About Me')} />
        <CoursesSection id={getNavLinkId('Courses')} />
        <ExperienceSection id={getNavLinkId('Experience')} />
        <SkillsSection id={getNavLinkId('Expertise')} />
        <FAQSection id={getNavLinkId('FAQ')} />
        <ContactSection id={getNavLinkId('Contact')} />
      </main>
      <Footer />
    </div>
  );
};

export default App;
