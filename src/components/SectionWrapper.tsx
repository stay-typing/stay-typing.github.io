
import React from 'react';
import { SectionProps } from '../types';

const SectionWrapper: React.FC<SectionProps> = ({ id, title, children, className = '' }) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-text relative inline-block">
              {title}
              <span className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-accent-green rounded-full"></span>
            </h2>
          </div>
        )}
        {children}
      </div>
    </section>
  );
};

export default SectionWrapper;
