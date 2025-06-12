
import React from 'react';
import { Project } from '../types';

const ExternalLinkIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
  </svg>
);

// Assuming CodeBracketIcon is defined in constants or here if only used here
const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="bg-card-bg rounded-lg shadow-lg overflow-hidden transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full flex flex-col">
      <img src={project.imageUrl} alt={project.title} className="w-full h-52 object-cover" />
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-primary-text mb-2">{project.title}</h3>
        <p className="text-secondary-text text-sm mb-4 flex-grow">{project.description}</p>
        <div className="mb-4">
          {project.tags.map(tag => (
            <span key={tag} className="inline-block bg-highlight-bg text-accent-green text-xs font-semibold mr-2 mb-2 px-2.5 py-1 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <div className="mt-auto flex space-x-4">
          {project.liveUrl && (
            <a 
              href={project.liveUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent-green hover:text-accent-green-hover font-medium transition-colors text-sm"
              aria-label={`View live project: ${project.title}`}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-1.5" /> View Live
            </a>
          )}
          {project.repoUrl && (
            <a 
              href={project.repoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center text-accent-green hover:text-accent-green-hover font-medium transition-colors text-sm"
              aria-label={`View source code for: ${project.title}`}
            >
              <CodeBracketIcon className="w-4 h-4 mr-1.5" /> View Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
