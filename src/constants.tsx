
import React from 'react';
import { NavLink, Project, Skill, Course, FAQItem, CourseTopic } from './types';

// --- EXISTING HEROICONS ---
const ChartBarIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z" />
  </svg>
);

const MagnifyingGlassIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
  </svg>
);

const MegaphoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 3.94A1.055 1.055 0 0 1 11.81 3H21a1 1 0 0 1 1 1v2.561a1.055 1.055 0 0 1-.303.748l-1.534 1.535a1.055 1.055 0 0 0-.303.748V17.25a1.055 1.055 0 0 1-1.055 1.055H11.81a1.055 1.055 0 0 1-.748-.303L3.303 10.34A1.055 1.055 0 0 1 3 9.592V6.031a1.055 1.055 0 0 1 .303-.748L4.838 3.75h2.31a1.055 1.055 0 0 0 .748-.303l2.444-2.444Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 17.25V19.5A.75.75 0 0 0 3.75 21H6" />
  </svg>
);

const PencilSquareIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
  </svg>
);

const CodeBracketIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
    </svg>
);

const UsersIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
  </svg>
);

// --- NEW SVG ICONS ---
/*const AcademicCapIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.627 48.627 0 0 1 12 20.904a48.627 48.627 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.57 50.57 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.902 59.902 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" />
  </svg>
);*/

/*const QuestionMarkCircleIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z" />
  </svg>
);*/

/*const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.249h-1.34c-1.247 0-1.623.772-1.623 1.562V12h2.828l-.455 2.89h-2.373v7.004A9.965 9.965 0 0022 12z" />
  </svg>
);*/

/*const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9v.01c0 1.83.5 3.55 1.38 5.05L2.57 22l5.25-1.52c1.45.78 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.44 9.9-9.9C21.94 6.44 17.5 2 12.04 2zm.01 1.62c4.55 0 8.26 3.71 8.26 8.27 0 4.55-3.71 8.27-8.26 8.27-1.52 0-2.96-.41-4.22-1.13l-.3-.18-3.12.9.92-3.03-.2-.32A8.193 8.193 0 013.77 11.9c0-4.56 3.71-8.27 8.28-8.27zm4.55 9.5c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97s-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.24s-1.45-1.95-1.62-2.28c-.17-.33-.01-.51.11-.63s.25-.29.37-.44c.12-.14.17-.25.25-.41s.04-.3-.02-.42c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.3s-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56s1.75 2.66 4.24 3.74c.59.26 1.05.41 1.41.52.59.18 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18s.2-.54.14-.66l-.09-.11z" />
  </svg>
);*/


export const PROFILE_INFO = {
  name: "MD Israk Jahin Tasin",
  dob: "20-08-2008", // For internal reference, decide if/how to display
  title: "Digital Marketing Instructor & Strategist",
  bio: "Hi, I'm Israk! I'm passionate about making Digital Marketing accessible and practical for everyone in Bangladesh. Forget confusing jargon and overpriced courses – I provide hands-on, real-world training in SEO, Content Creation, Social Media, Paid Ads, and more. My goal is to empower you with the skills to succeed online, whether you're a student, entrepreneur, or aspiring marketer. Let's learn and grow together!",
  profileImageUrl: "https://picsum.photos/seed/israktasin/300/300", // Replace with actual photo
  socialLinks: {
    linkedin: "#", // Add actual LinkedIn URL if available
    facebook: "https://www.facebook.com/mdisrakjahin.tasin", 
    whatsapp: "https://wa.me/8801894029784", // Pre-filled WhatsApp link
  }
};

export const CONTACT_INFO = {
  email: "mdisrakjahintasin20@gmail.com", 
  phone: "+8801894029784",
  facebook: PROFILE_INFO.socialLinks.facebook, 
  whatsapp: PROFILE_INFO.socialLinks.whatsapp,
  location: "Online | Based in Bangladesh",
  contactHours: "Available for calls/texts before 9 PM (Bangladesh Time)",
};

export const NAV_LINKS: NavLink[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'courses', label: 'Courses' },
  { id: 'experience', label: 'Experience' }, // Renamed from Portfolio
  { id: 'skills', label: 'Expertise' }, // Renamed from Skills
  { id: 'faq', label: 'FAQ' },
  { id: 'contact', label: 'Contact' },
];

const commonRegistrationInfo = {
  phone: CONTACT_INFO.phone,
  email: CONTACT_INFO.email,
  facebook: CONTACT_INFO.facebook,
  whatsapp: CONTACT_INFO.whatsapp,
  paymentMethods: "bKash, Nagad, or Direct Bank Transfer (Details shared upon registration).",
};

const baseCourseTopics: CourseTopic[] = [
    {id: 'topic1', name: "Introduction to Digital Marketing"},
    {id: 'topic2', name: "SEO (Search Engine Optimization) Basics"},
    {id: 'topic3', name: "Social Media Marketing Overview"},
    {id: 'topic4', name: "Content Creation Fundamentals"},
];

export const COURSES_DATA: Course[] = [
  {
    id: 'basic-pm',
    title: 'Basic Digital Marketing Course (Night Batch)',
    batchTime: '10:00 PM – 12:00 AM (Midnight)',
    price: '500 ৳',
    priceDetails: 'per person',
    batchLimit: 'Max 5 students per batch',
    mode: 'Live on Google Meet',
    topics: baseCourseTopics,
    image: 'https://picsum.photos/seed/basiccourse/600/400', // Replace this
    registrationInfo: commonRegistrationInfo,
  },
  {
    id: 'basic-am',
    title: 'Basic Digital Marketing Course (Afternoon Batch)',
    batchTime: '3:00 PM – 5:00 PM',
    price: '500 ৳',
    priceDetails: 'per person',
    batchLimit: 'Max 5 students per batch',
    mode: 'Live on Google Meet',
    topics: baseCourseTopics,
    image: 'https://picsum.photos/seed/basiccoursePM/600/400', // Replace this
    registrationInfo: commonRegistrationInfo,
  },
  {
    id: 'advanced',
    title: 'Advanced Digital Marketing Course',
    batchTime: 'Schedule Flexible (To be discussed)',
    price: '1000 ৳',
    priceDetails: 'per person',
    mode: 'Live on Google Meet',
    topics: [
        {id: 'advTopic1', name: "In-depth SEO Strategies & Audits"},
        {id: 'advTopic2', name: "Paid Advertising (Google Ads, Facebook Ads)"},
        {id: 'advTopic3', name: "Web Analytics & Data Interpretation"},
        {id: 'advTopic4', name: "Marketing Funnels & Conversion Optimization"},
        {id: 'advTopic5', name: "Comprehensive Digital Marketing Strategy"},
    ],
    prerequisites: 'Completion of Basic Course or demonstrated equivalent experience.',
    image: 'https://picsum.photos/seed/advancedcourse/600/400', // Replace this
    registrationInfo: commonRegistrationInfo,
  },
  {
    id: 'full-combo',
    title: 'Full Course Combo (Basic + Advanced)',
    price: '1300 ৳',
    priceDetails: 'total (Discounted)',
    mode: 'Live on Google Meet',
    topics: [
        {id: 'comboTopic0', name: "All topics from Basic & Advanced courses"},
    ],
    bonus: 'Includes an extra 1-on-1 mentorship session after course completion.',
    image: 'https://picsum.photos/seed/fullcourse/600/400', // Replace this
    registrationInfo: commonRegistrationInfo,
  },
];

export const PROJECTS_DATA: Project[] = [ // Kept as "Experience Highlights"
  {
    id: 'exp1',
    title: 'E-commerce SEO Growth',
    description: 'Contributed to an SEO strategy for an e-commerce platform, improving organic traffic by 50% and enhancing keyword rankings for key products.',
    imageUrl: 'https://picsum.photos/seed/ecomseoexp/600/400', // Replace this
    tags: ['SEO', 'E-commerce', 'Keyword Research'],
  },
  {
    id: 'exp2',
    title: 'Social Media Engagement Boost',
    description: 'Managed social media channels for a local business, increasing engagement rates by 80% through targeted content and community management.',
    imageUrl: 'https://picsum.photos/seed/socialcampexp/600/400', // Replace this
    tags: ['Social Media Marketing', 'Content Creation', 'Analytics'],
  },
  {
    id: 'exp3',
    title: 'PPC Campaign Setup',
    description: 'Assisted in setting up and monitoring PPC campaigns, focusing on optimizing ad spend and improving click-through rates for lead generation.',
    imageUrl: 'https://picsum.photos/seed/ppcsaasexp/600/400', // Replace this
    tags: ['PPC', 'Google Ads', 'Campaign Management'],
  },
];

export const SKILLS_DATA: Skill[] = [
  { id: 'skill1', name: 'SEO & SEM', icon: <MagnifyingGlassIcon className="w-8 h-8 text-accent-green" />, level: 90 },
  { id: 'skill2', name: 'Social Media Marketing', icon: <UsersIcon className="w-8 h-8 text-accent-green" />, level: 95 },
  { id: 'skill3', name: 'Content Creation & Strategy', icon: <PencilSquareIcon className="w-8 h-8 text-accent-green" />, level: 85 },
  { id: 'skill4', name: 'PPC Campaigns (Google & Facebook Ads)', icon: <MegaphoneIcon className="w-8 h-8 text-accent-green" />, level: 88 },
  { id: 'skill5', name: 'Data Analytics & Reporting', icon: <ChartBarIcon className="w-8 h-8 text-accent-green" />, level: 80 },
  { id: 'skill6', name: 'Basic Web Design Principles', icon: <CodeBracketIcon className="w-8 h-8 text-accent-green" />, level: 70 },
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq1',
    question: 'Do I need a laptop for the course?',
    answer: 'Yes, a laptop or desktop computer with a stable internet connection is highly recommended to participate fully in the live sessions and practice exercises.',
  },
  {
    id: 'faq2',
    question: 'Can I pay after the class or in installments?',
    answer: 'Full payment is required before the course starts to confirm your slot. For specific financial concerns, please contact me directly to discuss possibilities.',
  },
  {
    id: 'faq3',
    question: 'Will I get a certificate upon completion?',
    answer: 'Yes, upon successful completion of any course, you will receive a certificate of completion. For the Full Course Combo, you get a combined certificate as well.',
  },
  {
    id: 'faq4',
    question: 'Are the classes recorded if I miss one?',
    answer: 'Classes are live and interactive for the best learning experience. While recordings might be available under special circumstances, attendance is highly encouraged. Please discuss with me if you anticipate any issues.',
  },
    {
    id: 'faq5',
    question: 'What makes your course different from free YouTube videos?',
    answer: 'My courses offer structured learning paths, personalized guidance, live Q&A, practical assignments relevant to the Bangladeshi market, and direct mentorship. This interactive environment is designed to help you apply concepts effectively, which is often missing in self-paced online videos.',
  },
];
