
import React, { useState } from 'react';
import { SectionProps } from '../types';
import SectionWrapper from './SectionWrapper';
import { CONTACT_INFO,} from '../constants'; // PROFILE_INFO for social fallback

// Icons (can be moved to constants if reused extensively)
const EnvelopeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
    </svg>
);
const PhoneIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 6.75Z" />
    </svg>
);
const FacebookIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.249h-1.34c-1.247 0-1.623.772-1.623 1.562V12h2.828l-.455 2.89h-2.373v7.004A9.965 9.965 0 0022 12z" />
  </svg>
);
const WhatsAppIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9v.01c0 1.83.5 3.55 1.38 5.05L2.57 22l5.25-1.52c1.45.78 3.08 1.21 4.79 1.21h.01c5.46 0 9.9-4.44 9.9-9.9C21.94 6.44 17.5 2 12.04 2zm.01 1.62c4.55 0 8.26 3.71 8.26 8.27 0 4.55-3.71 8.27-8.26 8.27-1.52 0-2.96-.41-4.22-1.13l-.3-.18-3.12.9.92-3.03-.2-.32A8.193 8.193 0 013.77 11.9c0-4.56 3.71-8.27 8.28-8.27zm4.55 9.5c-.25-.12-1.47-.72-1.7-.8s-.39-.12-.56.12-.64.8-.79.97s-.29.18-.54.06c-.25-.12-1.06-.39-2.02-1.24s-1.45-1.95-1.62-2.28c-.17-.33-.01-.51.11-.63s.25-.29.37-.44c.12-.14.17-.25.25-.41s.04-.3-.02-.42c-.06-.12-.56-1.34-.76-1.84s-.4-.42-.56-.42h-.48c-.17 0-.44.06-.67.3s-.87.85-.87 2.07c0 1.22.89 2.4 1.01 2.56s1.75 2.66 4.24 3.74c.59.26 1.05.41 1.41.52.59.18 1.13.16 1.56.1.47-.07 1.47-.6 1.67-1.18s.2-.54.14-.66l-.09-.11z" />
  </svg>
);
const MapPinIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
    </svg>
);


const ContactSection: React.FC<SectionProps> = ({ id }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setSubmitError(null); // Clear error on change
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitError(null);
    if (!formData.name || !formData.email || !formData.message) {
        setSubmitError("Please fill in all required fields.");
        return;
    }

    const subject = `Inquiry from ${formData.name} via Portfolio Website`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
    const mailtoLink = `mailto:${CONTACT_INFO.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Attempt to open mailto link
    window.location.href = mailtoLink;

    setIsSubmitted(true);
    setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: '', email: '', message: '' });
    }, 5000); // Increased timeout for user to see message
  };

  const inputClass = "w-full px-4 py-3 bg-highlight-bg border border-slate-600 rounded-md text-primary-text focus:ring-2 focus:ring-accent-green focus:border-accent-green placeholder-secondary-text transition-colors duration-200";
  const labelClass = "block text-sm font-medium text-secondary-text mb-1.5";

  return (
    <SectionWrapper id={id} title="Get In Touch" className="bg-primary-bg">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-10 md:gap-16 items-start">
        
        <div className="lg:w-2/5 space-y-8 animate-slide-in-left">
            <p className="text-secondary-text text-lg leading-relaxed">
                I'm always excited to discuss new projects, creative ideas, or opportunities to collaborate. If you want to learn seriously and get results, just text or call me anytime before 9 PM.
            </p>
             <blockquote className="border-l-4 border-accent-green pl-4 italic text-secondary-text">
                "All classes are handled by me directly — no middlemen. Your success is my priority."
            </blockquote>
            <div className="space-y-5">
                <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center group">
                    <EnvelopeIcon className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                    <span className="text-secondary-text group-hover:text-accent-green transition-colors">{CONTACT_INFO.email}</span>
                </a>
                {CONTACT_INFO.phone && (
                    <a href={`tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`} className="flex items-center group">
                        <PhoneIcon className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                        <span className="text-secondary-text group-hover:text-accent-green transition-colors">{CONTACT_INFO.phone}</span>
                    </a>
                )}
                {CONTACT_INFO.facebook && CONTACT_INFO.facebook !== "#" && (
                    <a href={CONTACT_INFO.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                        <FacebookIcon className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                        <span className="text-secondary-text group-hover:text-accent-green transition-colors">Facebook Profile</span>
                    </a>
                )}
                {CONTACT_INFO.whatsapp && CONTACT_INFO.whatsapp !== "#" && (
                    <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="flex items-center group">
                        <WhatsAppIcon className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                        <span className="text-secondary-text group-hover:text-accent-green transition-colors">WhatsApp</span>
                    </a>
                )}
                <div className="flex items-center">
                    <MapPinIcon className="w-6 h-6 text-accent-green mr-3 flex-shrink-0" />
                    <span className="text-secondary-text">{CONTACT_INFO.location}</span>
                </div>
                 <p className="text-xs text-slate-500 pt-2">Contact Hours: {CONTACT_INFO.contactHours}</p>
            </div>
        </div>

        <div className="lg:w-3/5 w-full animate-fade-in-up animation-delay-200">
            {isSubmitted ? (
                 <div className="bg-card-bg p-8 rounded-lg shadow-xl text-center">
                    <h3 className="text-2xl font-semibold text-accent-green mb-4">Thank You!</h3>
                    <p className="text-primary-text">Your email client should have opened with a pre-filled message. If not, please copy the details and email me at <a href={`mailto:${CONTACT_INFO.email}`} className="text-accent-green underline">{CONTACT_INFO.email}</a>.</p>
                    <p className="text-primary-text mt-2">I'll get back to you soon.</p>
                </div>
            ) : (
            <form onSubmit={handleSubmit} className="space-y-6 bg-card-bg p-8 rounded-lg shadow-xl">
                <div>
                  <label htmlFor="name" className={labelClass}>Full Name</label>
                  <input type="text" name="name" id="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Your Name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="you@example.com" />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea name="message" id="message" rows={5} value={formData.message} onChange={handleChange} required className={inputClass} placeholder="Your message, course inquiry, or collaboration idea..."></textarea>
                </div>
                {submitError && <p className="text-sm text-red-400">{submitError}</p>}
                <div>
                  <button type="submit" className="w-full material-button material-button-accent" aria-label="Send your message">
                    Send Message
                  </button>
                </div>
            </form>
            )}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ContactSection;
