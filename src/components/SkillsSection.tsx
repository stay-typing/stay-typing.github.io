
import React from 'react';
import { SectionProps, Skill } from '../types';
import { SKILLS_DATA } from '../constants';
import SkillItem from './SkillItem';
import SectionWrapper from './SectionWrapper';

const SkillsSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="My Expertise" className="bg-secondary-bg">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {SKILLS_DATA.map((skill: Skill, index: number) => (
          <div 
            key={skill.id} 
            className="animate-pop-in" 
            style={{ animationDelay: `${index * 100}ms`, opacity: 0 }} // Initial opacity for animation
          >
            <SkillItem skill={skill} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;
