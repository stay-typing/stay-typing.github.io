
import React, { useState } from 'react';
import { FAQItem as FAQItemType } from '../types';

interface FAQItemProps {
  item: FAQItemType;
}

const ChevronDownIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
  </svg>
);

const FAQItem: React.FC<FAQItemProps> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-card-bg rounded-lg shadow-md overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center p-5 text-left focus:outline-none focus-visible:ring focus-visible:ring-accent-green focus-visible:ring-opacity-75"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className="text-lg font-medium text-primary-text">{item.question}</h3>
        <ChevronDownIcon 
          className={`w-6 h-6 text-accent-green transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      {isOpen && (
        <div 
          id={`faq-answer-${item.id}`}
          className="px-5 pb-5 pt-2 text-secondary-text text-sm leading-relaxed animate-fade-in-up"
          style={{animationDuration: '0.3s'}}
        >
          <p>{item.answer}</p>
        </div>
      )}
    </div>
  );
};

export default FAQItem;
