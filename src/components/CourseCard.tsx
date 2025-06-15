
import React from 'react';
import { Course } from '../types';

// Icons (can be local or from constants)
const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" /></svg>
);
const TagIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 0 0 3 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 0 0 5.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 0 0 9.568 3Z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6Z" /></svg>
);
const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" /></svg>
);
const VideoCameraIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9A2.25 2.25 0 0 0 13.5 5.25h-9A2.25 2.25 0 0 0 2.25 7.5v9A2.25 2.25 0 0 0 4.5 18.75Z" /></svg>
);
const SparklesIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" /></svg>
);
const InformationCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z" /></svg>
);
const ListBulletIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 6.75h7.5M8.25 12h7.5m-7.5 5.25h7.5M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" /></svg>
);
/*const PhoneArrowUpRightIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V18m-7.5-14.25h10.5m0 0L12.75 9.75M18 1.5v7.5" />
  </svg>
);*/


interface CourseCardProps {
  course: Course;
}

const CourseCard: React.FC<CourseCardProps> = ({ course }) => {
  const contactLink = `#${'contact'}`; // Assuming 'contact' is the ID of your contact section

  return (
    <div className="bg-card-bg rounded-xl shadow-xl overflow-hidden flex flex-col md:flex-row transform transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
      {course.image && (
        <img 
          src={course.image} 
          alt={course.title} 
          className="w-full md:w-1/3 h-60 md:h-auto object-cover" 
        />
      )}
      <div className="p-6 md:p-8 flex flex-col flex-grow">
        <h3 className="text-2xl font-bold text-accent-green mb-3">{course.title}</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-3 mb-4 text-sm text-secondary-text">
          {course.batchTime && <p className="flex items-center"><ClockIcon className="w-5 h-5 mr-2 text-accent-blue flex-shrink-0" /> {course.batchTime}</p>}
          <p className="flex items-center"><TagIcon className="w-5 h-5 mr-2 text-accent-blue flex-shrink-0" /> {course.price} <span className="ml-1 text-xs">({course.priceDetails || 'per person'})</span></p>
          {course.batchLimit && <p className="flex items-center"><UsersIcon className="w-5 h-5 mr-2 text-accent-blue flex-shrink-0" /> {course.batchLimit}</p>}
          <p className="flex items-center"><VideoCameraIcon className="w-5 h-5 mr-2 text-accent-blue flex-shrink-0" /> {course.mode}</p>
        </div>

        <div className="mb-5">
          <h4 className="text-md font-semibold text-primary-text mb-2 flex items-center"><ListBulletIcon className="w-5 h-5 mr-2 text-accent-blue"/>Topics Covered:</h4>
          <ul className="list-inside list-disc marker:text-accent-green space-y-1 text-sm text-secondary-text pl-2">
            {course.topics.map(topic => <li key={topic.id}>{topic.name}</li>)}
          </ul>
        </div>

        {course.prerequisites && (
          <p className="text-sm text-secondary-text mb-3 flex items-start">
            <InformationCircleIcon className="w-5 h-5 mr-2 mt-0.5 text-accent-blue flex-shrink-0" />
            <strong>Prerequisites:</strong>&nbsp;{course.prerequisites}
          </p>
        )}
        {course.bonus && (
          <p className="text-sm text-accent-green mb-4 flex items-start">
            <SparklesIcon className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" />
            <strong>Bonus:</strong>&nbsp;{course.bonus}
          </p>
        )}

        <div className="mt-auto pt-4 border-t border-highlight-bg">
          <h4 className="text-md font-semibold text-primary-text mb-2">To Register or Inquire:</h4>
          <p className="text-sm text-secondary-text mb-3">
            Contact via Phone, Email, Facebook, or WhatsApp.
          </p>
          <p className="text-sm text-secondary-text mb-3">
            <strong>Payment:</strong> {course.registrationInfo.paymentMethods}
          </p>
           <a 
            href={contactLink}
            className="inline-block material-button material-button-accent !py-2.5 !px-6 !text-sm"
            aria-label={`Register for ${course.title}`}
            >
            Register Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
