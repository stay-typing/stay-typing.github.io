
import React from 'react';
import { SectionProps } from '../types';
import { PROFILE_INFO, NAV_LINKS } from '../constants';

const HeroSection: React.FC<SectionProps> = ({ id }) => {
  const coursesLinkId = NAV_LINKS.find(link => link.label === 'Courses')?.id || 'courses';
  const contactLinkId = NAV_LINKS.find(link => link.label === 'Contact')?.id || 'contact';
  
  const handleScrollTo = (targetId: string) => {
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id={id} 
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-bg via-secondary-bg to-primary-bg pt-20 relative overflow-hidden"
    >
      {/* Optional: Add subtle background elements like a pattern or shapes */}
      {/* <div className="absolute inset-0 opacity-5 bg-[url('path_to_subtle_pattern.svg')]"></div> */}
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        <div className="animate-fade-in-up" style={{ animationDelay: '100ms' }}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-4">
            <span className="block text-secondary-text text-2xl sm:text-3xl md:text-4xl tracking-wide">Hello, I'm</span>
            <span className="block text-accent-green mt-1">{PROFILE_INFO.name}</span>
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl text-primary-text max-w-3xl mx-auto mb-8 font-medium" style={{ animationDelay: '300ms' }}>
            Your Guide to Mastering <span className="text-accent-green">Digital Marketing</span> in Bangladesh.
          </p>
          <p className="text-md sm:text-lg text-secondary-text max-w-2xl mx-auto mb-10" style={{ animationDelay: '500ms' }}>
            Learn SEO, Ads, Content Strategy, and more in a practical, hands-on way. Let's build your skills and achieve your online goals together!
          </p>
          <div className="space-y-4 sm:space-y-0 sm:space-x-4" style={{ animationDelay: '700ms' }}>
            <button 
              onClick={() => handleScrollTo(coursesLinkId)}
              className="material-button material-button-accent w-full sm:w-auto"
              aria-label="Explore my courses"
            >
              Explore Courses
            </button>
            <button 
              onClick={() => handleScrollTo(contactLinkId)}
              className="material-button material-button-outlined w-full sm:w-auto"
              aria-label="Get in touch with me"
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
