import React from 'react';
import { Skill } from '../types';

interface SkillItemProps {
  skill: Skill;
}

const SkillItem: React.FC<SkillItemProps> = ({ skill }) => {
  return (
    <div className="bg-card-bg p-6 rounded-lg shadow-lg flex flex-col items-center text-center transform hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
      <div className="mb-4 text-accent-green">
        {/* Ensure skill.icon has className prop passed down or applied if it's a component */}
        {React.isValidElement(skill.icon) && React.cloneElement(skill.icon as React.ReactElement<{ className?: string }>, { className: "w-10 h-10 text-accent-green" })}
      </div>
      <h3 className="text-lg font-semibold text-primary-text mb-2">{skill.name}</h3>
      {skill.level !== undefined && (
         <div className="w-full mt-2" aria-label={`${skill.name} proficiency: ${skill.level}%`}>
            <div className="flex justify-between mb-1">
                <span className="text-xs font-medium text-accent-green">{skill.level}%</span>
            </div>
            <div className="w-full bg-highlight-bg rounded-full h-2.5">
                <div 
                    className="bg-accent-green h-2.5 rounded-full transition-all duration-500 ease-out" 
                    style={{ width: `${skill.level}%` }}
                    role="progressbar"
                    aria-valuenow={skill.level}
                    aria-valuemin={0}
                    aria-valuemax={100}
                ></div>
            </div>
        </div>
      )}
    </div>
  );
};

export default SkillItem;