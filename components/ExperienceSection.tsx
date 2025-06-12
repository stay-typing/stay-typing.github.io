
import React from 'react';
import { SectionProps, Project } from '../types';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const ExperienceSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Experience Highlights" className="bg-primary-bg">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS_DATA.map((project: Project, index: number) => (
          <div 
            key={project.id} 
            className="animate-pop-in" 
            style={{ animationDelay: `${index * 150}ms`, opacity: 0 }} // Initial opacity for animation
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;
