
import React from 'react';
import { SectionProps, Project } from '../types';
import { PROJECTS_DATA } from '../constants';
import ProjectCard from './ProjectCard';
import SectionWrapper from './SectionWrapper';

const PortfolioSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="My Portfolio">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {PROJECTS_DATA.map((project: Project, index: number) => (
          <div key={project.id} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`}}>
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default PortfolioSection;
