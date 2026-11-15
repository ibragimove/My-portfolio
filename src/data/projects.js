/**
 * =========================================================================
 * FEATURED PROJECTS DATA SOURCE
 * =========================================================================
 * EDITABLE PLACEHOLDERS:
 * Replace the placeholder values below with your real project details.
 *
 * Each project entry supports:
 * - id: unique string identifier
 * - title: Project name
 * - shortDescription: 1-2 sentence overview
 * - problem: The core problem the project solves
 * - contribution: Specific architecture, modules, or features you built
 * - technologies: Array of technology strings
 * - githubUrl: Link to repository (or null / '#' if pending)
 * - liveDemoUrl: Link to live deployment (or null / '#' if pending)
 * - image: Path to local asset or image URL (leave null to show placeholder)
 * - isPlaceholder: Boolean flag (set false once replaced with your project)
 * =========================================================================
 */

export const projectsData = [
  {
    id: 'project-1',
    isPlaceholder: true,
    title: '[Project 1: Database-Driven Web Application]',
    shortDescription:
      'A full-stack web application developed to handle structured data workflows, user inputs, and dynamic server-side rendering.',
    problem:
      'Users frequently face disjointed, manual data entry processes that lead to fragmented records and lack of centralized validation.',
    contribution:
      'Designed the relational schema in MySQL, implemented PHP server-side validation and CRUD endpoints, and built a clean, responsive HTML/CSS interface.',
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3'],
    githubUrl: 'https://github.com/your-username/project-one',
    liveDemoUrl: 'https://demo.example.com/project-one',
    image: null, // Replace with '/src/assets/images/projects/project-1.jpg' or external URL
  },
  {
    id: 'project-2',
    isPlaceholder: true,
    title: '[Project 2: Relational Data Management System]',
    shortDescription:
      'A structured database management tool engineered for reliable record organization, complex querying, and data consistency.',
    problem:
      'Managing multi-table relational data without structured indexing and foreign key constraints leads to orphan records and query bottlenecks.',
    contribution:
      'Structured normalized relational tables, authored optimized JOIN queries, enforced foreign key cascades, and implemented administrative search filters.',
    technologies: ['MySQL', 'PHP', 'SQL Optimization', 'Database Modeling'],
    githubUrl: 'https://github.com/your-username/project-two',
    liveDemoUrl: null, // Set to demo URL or leave null if only repo exists
    image: null, // Replace with image path or leave null
  },
  {
    id: 'project-3',
    isPlaceholder: true,
    title: '[Project 3: Python Automation & Logic Script]',
    shortDescription:
      'An algorithmic Python tool developed to automate repetitive data parsing tasks and practice structured problem solving.',
    problem:
      'Manually processing repetitive data files or recurring calculations is error-prone, time-consuming, and difficult to audit.',
    contribution:
      'Engineered core Python algorithmic functions, structured modular data handling with dictionaries and lists, and integrated robust error trapping.',
    technologies: ['Python', 'Algorithmic Logic', 'Data Parsing', 'Automation'],
    githubUrl: 'https://github.com/your-username/project-three',
    liveDemoUrl: 'https://demo.example.com/project-three',
    image: null, // Replace with image path or leave null
  },
];

export default projectsData;
