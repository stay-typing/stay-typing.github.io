
import React from 'react';

export interface NavLink {
  id: string;
  label: string;
  icon?: React.ReactNode; // Optional: for icons in nav if needed
}

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export interface Skill {
  id: string;
  name: string;
  icon: React.ReactNode;
  level?: number; // Optional: 0-100 for progress bar
}

export interface SectionProps {
  id: string;
  className?: string;
  children?: React.ReactNode;
  title?: string; // Added title directly to SectionProps
}

export interface CourseTopic {
  id: string;
  name: string;
}
export interface Course {
  id: string;
  title: string;
  batchTime?: string; // e.g., "10:00 PM – 12:00 AM" or "3:00 PM – 5:00 PM"
  price: string; // e.g., "500 BDT" or "1000 ৳"
  priceDetails?: string; // e.g., "per person"
  batchLimit?: string; // e.g., "Max 5 students"
  mode: string; // e.g., "Google Meet"
  topics: CourseTopic[];
  prerequisites?: string;
  bonus?: string;
  image?: string; // Optional image for the course card
  registrationInfo: {
    phone: string;
    email: string;
    facebook?: string;
    whatsapp?: string;
    paymentMethods: string;
  };
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
