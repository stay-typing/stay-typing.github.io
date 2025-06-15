
import React from 'react';
import { SectionProps, Course } from '../types';
import { COURSES_DATA } from '../constants';
import CourseCard from './CourseCard';
import SectionWrapper from './SectionWrapper';

const CoursesSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Explore My Courses" className="bg-primary-bg">
      <div className="space-y-12 md:space-y-16">
        {COURSES_DATA.map((course: Course, index: number) => (
          <div 
            key={course.id} 
            className="animate-pop-in" 
            style={{ animationDelay: `${index * 150}ms`, opacity: 0 }} // Initial opacity for animation
          >
            <CourseCard course={course} />
          </div>
        ))}
      </div>
       <p className="mt-12 text-center text-secondary-text text-lg">
        Ready to start your Digital Marketing journey? <a href={`#${'contact'}`} className="text-accent-green hover:underline font-semibold">Contact me</a> to enroll or ask any questions!
      </p>
    </SectionWrapper>
  );
};

export default CoursesSection;
