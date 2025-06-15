
import React, { useState, useEffect } from 'react';
import { NAV_LINKS, PROFILE_INFO } from '../constants';
import { NavLink } from '../types';

// Heroicons SVGs
const Bars3Icon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
  </svg>
);

const XMarkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
  </svg>
);

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState<string>(NAV_LINKS[0]?.id || 'home');

  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      // setActiveLink(id); // Set active link on click, scroll spy will handle during scroll
    }
    setIsOpen(false); // Close mobile menu on link click
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Active link highlighting (Scroll Spy)
      let currentSectionId = NAV_LINKS[0]?.id || 'home';
      NAV_LINKS.forEach(link => {
        const section = document.getElementById(link.id);
        if (section) {
          const sectionTop = section.offsetTop - 150; // Adjusted offset
          const sectionBottom = sectionTop + section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            currentSectionId = link.id;
          }
        }
      });
      setActiveLink(currentSectionId);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navInitialBg = 'bg-primary-bg/80'; // Slightly transparent initially
  const navScrolledBg = 'bg-secondary-bg/95 backdrop-blur-lg shadow-lg';

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ease-in-out ${isScrolled ? navScrolledBg : navInitialBg}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <a href="#home" onClick={(e) => { e.preventDefault(); handleScrollTo('home');}} className="text-2xl font-bold text-accent-green hover:text-accent-green-hover transition-colors">
              {PROFILE_INFO.name.split(' ')[1] || PROFILE_INFO.name.split(' ')[0]}<span className="text-primary-text">.</span>
            </a>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-2">
              {NAV_LINKS.map((link: NavLink) => (
                <a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 hover:text-accent-green
                    ${activeLink === link.id ? 'text-accent-green bg-highlight-bg' : 'text-secondary-text'}`}
                  aria-current={activeLink === link.id ? 'page' : undefined}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-secondary-text hover:text-accent-green focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent-green transition-colors"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? <XMarkIcon className="block h-6 w-6" /> : <Bars3Icon className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block animate-fade-in-up' : 'hidden'} md:hidden absolute inset-x-0 top-20 bg-secondary-bg/95 backdrop-blur-sm shadow-xl`} id="mobile-menu"
           style={{ animationDuration: '0.3s' }}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {NAV_LINKS.map((link: NavLink) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => { e.preventDefault(); handleScrollTo(link.id); }}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 hover:text-accent-green hover:bg-highlight-bg
                ${activeLink === link.id ? 'text-accent-green bg-highlight-bg' : 'text-secondary-text'}`}
              aria-current={activeLink === link.id ? 'page' : undefined}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
