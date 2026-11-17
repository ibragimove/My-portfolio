/**
 * =========================================================================
 * ELBEK IBRAGIMOV — REAL FEATURED PROJECTS
 * =========================================================================
 * 1. SAT ALFA Landing Page Platform
 * 2. Learning Center Management System
 * 3. MedCare & Integrated AI Platform
 * =========================================================================
 */

export const projectsData = [
  {
    id: 'medcare-ai',
    isPlaceholder: false,
    title: 'MedCare & Integrated AI Platform',
    shortDescription:
      'A healthcare platform connecting community patronage nurses with patients in rural villages, integrating AI for accessible triage and health communication.',
    problem:
      'In rural areas, patients often experience communication delays and lack timely access to patronage nurses, leading to delayed medical attention for preventive and routine checkups.',
    contribution:
      'Engineered the core web application, designed patient-nurse communication workflows tailored for village health workers, and integrated AI assistance to help categorize health inquiries and clarify medical guidance.',
    technologies: ['Integrated AI', 'Python', 'JavaScript', 'HTML5', 'CSS3', 'Healthcare Tech'],
    githubUrl: 'https://github.com/ibragimove/MedCare',
    liveDemoUrl: null, // Completed locally, pending deployment
    image: null,
    status: 'Completed (Local Dev)',
    learning:
      'Learned how to design software specifically for users with limited digital experience and how AI can serve as a supportive tool in community healthcare.',
  },
  {
    id: 'sat-alfa',
    isPlaceholder: false,
    title: 'SAT ALFA Platform',
    shortDescription:
      'A modern web platform developed for SAT ALFA to attract students, present course curricula, and streamline preparation enrollment.',
    problem:
      'Students preparing for standardized exams often encounter fragmented course information and lack a clear overview of structured preparation resources.',
    contribution:
      'Developed the full-stack landing page using Python and Django, styled responsive components with Tailwind CSS and JavaScript, and organized course breakdowns and enrollment forms.',
    technologies: ['Python', 'Django', 'Tailwind CSS', 'JavaScript', 'Web Architecture'],
    githubUrl: 'https://github.com/ibragimove/SAT-ALFA',
    liveDemoUrl: null,
    image: null,
    status: 'Completed',
    learning:
      'Deepened practical understanding of Django request routing, template rendering, and building clean interfaces with Tailwind CSS.',
  },
  {
    id: 'learning-center-management',
    isPlaceholder: false,
    title: 'Learning Center Management System',
    shortDescription:
      'A full-stack administrative management platform built to simplify student accounting, fee tracking, and lesson scheduling for educational centers.',
    problem:
      'Educational centers struggle with manual record keeping across spreadsheets, creating scheduling collisions and billing discrepancies.',
    contribution:
      'Architected the relational database schema in MySQL, authored PHP backend business logic for tuition tracking and timetable organization, and utilized AI development tools to optimize workflows.',
    technologies: ['PHP', 'Blade', 'MySQL', 'Relational DB', 'AI Assistance'],
    githubUrl: 'https://github.com/ibragimove/Learning-Center-Management-system',
    liveDemoUrl: null,
    image: null,
    status: 'In Active Development',
    learning:
      'Mastered relational schema constraints, financial ledger integrity in MySQL, and integrating AI coding workflows into production logic.',
  },
];

export default projectsData;
