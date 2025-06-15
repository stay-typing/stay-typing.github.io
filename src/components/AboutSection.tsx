
import React from 'react';
import { SectionProps } from '../types';
import SectionWrapper from './SectionWrapper';
import { PROFILE_INFO, CONTACT_INFO } from '../constants';

// Placeholder icons, consider adding to constants.tsx if used elsewhere
const LinkedInIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" fill="currentColor" viewBox="0 0 24 24" {...props}><path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.594-11.018-3.714v-2.155z"/></svg>
);
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.249h-1.34c-1.247 0-1.623.772-1.623 1.562V12h2.828l-.455 2.89h-2.373v7.004A9.965 9.965 0 0022 12z" />
  </svg>
);
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" {...props}>
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9v.01c0 1.83.5 3.55 1.38 5.05L2.57 22l5.25-1.52c1.45.78 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.44 9.9-9.9C21.94 6.44 17.5 2 12.04 2zm.01 1.62c4.55 0 8.26 3.71 8.26 8.27 0 4.55-3.71 8.27-8.26 8.27-1.52 0-2.96-.41-4.22-1.13l-.3-.18-3.12.9.92-3.03-.2-.32A8.193 8.193 0 013.77 11.9c0-4.56 3.71-8.27 8.28-8.27zm4.55 9.5c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97s-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.24s-1.45-1.95-1.62-2.28c-.17-.33-.01-.51.11-.63s.25-.29.37-.44c.12-.14.17-.25.25-.41s.04-.3-.02-.42c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.3s-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56s1.75 2.66 4.24 3.74c.59.26 1.05.41 1.41.52.59.18 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18s.2-.54.14-.66l-.09-.11z" />
  </svg>
);

const AboutSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="About Me" className="bg-secondary-bg">
      <div className="flex flex-col md:flex-row items-center gap-10 md:gap-16 animate-fade-in-up animation-delay-200">
        <div className="md:w-1/3 flex-shrink-0">
          <img 
            src={PROFILE_INFO.profileImageUrl} 
            alt={PROFILE_INFO.name} 
            className="rounded-lg shadow-xl w-60 h-60 sm:w-72 sm:h-72 md:w-full md:max-w-sm md:h-auto object-cover mx-auto border-4 border-accent-green"
          />
        </div>
        <div className="md:w-2/3 text-center md:text-left">
          <h3 className="text-2xl sm:text-3xl font-semibold text-primary-text mb-3">
            {PROFILE_INFO.name}
          </h3>
          <p className="text-lg text-accent-green font-medium mb-6">{PROFILE_INFO.title}</p>
          
          <p className="text-secondary-text text-md sm:text-lg leading-relaxed mb-6">
            {PROFILE_INFO.bio}
          </p>
          <div className="mb-6">
            <h4 className="text-xl font-semibold text-primary-text mb-3">Why Learn With Me?</h4>
            <ul className="list-disc list-inside text-secondary-text space-y-1 text-md sm:text-lg text-left marker:text-accent-green">
                <li>Practical, hands-on training relevant to Bangladesh.</li>
                <li>Clear explanations, no confusing jargon.</li>
                <li>Focus on real-world application and results.</li>
                <li>Supportive learning environment for all levels.</li>
                <li>Direct mentorship and guidance.</li>
            </ul>
          </div>
          
          <div className="flex justify-center md:justify-start space-x-5">
            {PROFILE_INFO.socialLinks.linkedin && PROFILE_INFO.socialLinks.linkedin !== "#" && (
              <a href={PROFILE_INFO.socialLinks.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn Profile" className="text-secondary-text hover:text-accent-green transition-colors duration-200">
                <LinkedInIcon />
              </a>
            )}
            {PROFILE_INFO.socialLinks.facebook && PROFILE_INFO.socialLinks.facebook !== "#" && (
              <a href={PROFILE_INFO.socialLinks.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook Profile" className="text-secondary-text hover:text-accent-green transition-colors duration-200">
                <FacebookIcon />
              </a>
            )}
            {PROFILE_INFO.socialLinks.whatsapp && PROFILE_INFO.socialLinks.whatsapp !== "#" && (
              <a href={PROFILE_INFO.socialLinks.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp Contact" className="text-secondary-text hover:text-accent-green transition-colors duration-200">
                <WhatsAppIcon />
              </a>
            )}
            <a href={`mailto:${CONTACT_INFO.email}`} aria-label="Email Contact" className="text-secondary-text hover:text-accent-green transition-colors duration-200">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutSection;
