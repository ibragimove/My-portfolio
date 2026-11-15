/**
 * =========================================================================
 * GLOBAL SITE & CONTACT CONFIGURATION
 * =========================================================================
 * EDITABLE CONTACT PLACEHOLDERS:
 * Replace the placeholder values in the 'contact' object below with your
 * real email address, GitHub profile URL, and LinkedIn profile URL.
 * All navigation and social links across the site dynamically bind to these.
 * =========================================================================
 */

export const siteConfig = {
  name: 'Portfolio',
  wordmark: 'CS.UZ',
  initials: 'CS',
  author: 'Computer Science Student',
  role: 'Computer Science Student & Software Engineer',
  location: 'Tashkent, Uzbekistan',
  country: 'Uzbekistan',
  headline: 'I build things that make a difference.',
  bio: "I'm a Computer Science student from Uzbekistan interested in software engineering, artificial intelligence, and technology that creates meaningful impact.",

  // EDITABLE CONTACT PLACEHOLDERS
  contact: {
    email: 'your.email@example.com', // Replace with your real email
    emailDisplay: 'your.email@example.com',
    github: 'https://github.com/your-username', // Replace with your GitHub profile
    githubDisplay: 'github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile', // Replace with your LinkedIn profile
    linkedinDisplay: 'linkedin.com/in/your-profile',
    location: 'Tashkent, Uzbekistan',
    availability: 'Open to software engineering opportunities & academic research',
  },

  // Direct link mapping for header and footer components
  links: {
    github: 'https://github.com/your-username',
    linkedin: 'https://linkedin.com/in/your-profile',
    email: 'mailto:your.email@example.com',
  },

  navLinks: [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Achievements', href: '#achievements' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default siteConfig;
