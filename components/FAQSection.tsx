
import React from 'react';
import { SectionProps, FAQItem as FAQItemType } from '../types';
import { FAQ_DATA } from '../constants';
import FAQItem from './FAQItem';
import SectionWrapper from './SectionWrapper';

const FAQSection: React.FC<SectionProps> = ({ id }) => {
  return (
    <SectionWrapper id={id} title="Frequently Asked Questions" className="bg-secondary-bg">
      <div className="max-w-3xl mx-auto">
        <div className="space-y-6">
          {FAQ_DATA.map((faqItem: FAQItemType, index: number) => (
            <div 
              key={faqItem.id} 
              className="animate-pop-in" 
              style={{ animationDelay: `${index * 100}ms`, opacity: 0 }} // Initial opacity for animation
            >
              <FAQItem item={faqItem} />
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default FAQSection;
