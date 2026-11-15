import React from 'react';
import {
  Container,
  Card,
  Heading,
  Text,
  MonoLabel,
  Badge,
} from '../components';
import {
  Server,
  Database,
  Code2,
  FileCode,
  Palette,
  Layers,
  Sparkles,
  Cpu,
  ShieldCheck,
  CheckCircle2,
  Terminal,
} from 'lucide-react';

/**
 * Technical Skills Section
 * - Grouped logically into Backend & Databases, Web Architecture, and Algorithmic Scripting
 * - Features PHP, MySQL, Python, HTML, CSS
 * - Zero artificial percentage bars or exaggerated claims
 * - Accessible semantic <article> cards with Midnight × Electric Orange styling
 */
export const Skills = () => {
  const skillGroups = [
    {
      id: 'backend',
      title: 'Backend & Relational Data Systems',
      subtitle: 'Server-side application logic and structured database management',
      icon: Server,
      skills: [
        {
          name: 'PHP',
          icon: Server,
          role: 'Backend Engineering',
          status: 'Working Knowledge',
          statusVariant: 'accent',
          description:
            'Server-side application development, handling incoming HTTP requests, session lifecycle, and creating dynamic data-driven web pages.',
          concepts: [
            'Server-Side Logic',
            'Form Handling & Validation',
            'Session Management',
            'CRUD Workflows',
            'API Integration',
          ],
        },
        {
          name: 'MySQL',
          icon: Database,
          role: 'Relational Database',
          status: 'Relational Modeling',
          statusVariant: 'accent',
          description:
            'Structured database design, establishing relational integrity across tables, formulating optimized SQL queries, and handling data persistence.',
          concepts: [
            'Relational Schemas',
            'Primary & Foreign Keys',
            'Complex JOIN Queries',
            'Data Normalization',
            'ACID Principles',
          ],
        },
      ],
    },
    {
      id: 'web',
      title: 'Core Web Architecture',
      subtitle: 'Semantic document structure and responsive visual styling',
      icon: Layers,
      skills: [
        {
          name: 'HTML',
          icon: FileCode,
          role: 'Document Semantics',
          status: 'Core Standard',
          statusVariant: 'secondary',
          description:
            'Constructing robust, accessible document outlines using modern semantic elements, clean DOM hierarchies, and standards-compliant markup.',
          concepts: [
            'Semantic Landmarks',
            'Document Outlines',
            'Accessible Forms',
            'DOM Structure',
            'Clean Metadata',
          ],
        },
        {
          name: 'CSS',
          icon: Palette,
          role: 'Visual Architecture',
          status: 'Modern Layouts',
          statusVariant: 'secondary',
          description:
            'Crafting responsive user interfaces using Flexbox and CSS Grid, implementing design tokens and CSS variables, and building fluid layouts.',
          concepts: [
            'Flexbox & CSS Grid',
            'Design Tokens & Variables',
            'Responsive Breakpoints',
            'State & Transitions',
            'Reduced Motion Safety',
          ],
        },
      ],
    },
    {
      id: 'scripting',
      title: 'Algorithmic Scripting & Horizons',
      subtitle: 'Problem solving, automation, and foundational AI exploration',
      icon: Cpu,
      skills: [
        {
          name: 'Python',
          icon: Code2,
          role: 'Scripting & Problem Solving',
          status: 'Beginner · Active Exploration',
          statusVariant: 'accent',
          description:
            'Developing foundational programming fluency, writing automation scripts, studying core data structures, and laying the groundwork for software engineering and AI.',
          concepts: [
            'Core Python Syntax',
            'Data Structures (Lists, Dicts)',
            'Algorithmic Logic',
            'Automation Scripts',
            'AI Exploration Groundwork',
          ],
        },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 md:py-28 bg-bg relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">02 // TECHNICAL SKILLS</MonoLabel>
            <span className="text-xs font-mono text-content-muted">
              · Practical Toolkit
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Disciplined foundations, honest proficiency, and ongoing growth.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            A transparent inventory of my technical stack. No artificial progress bars or inflated claims—just the technologies I actively build with and the concepts I practice.
          </p>
        </div>

        {/* Skill Groups */}
        <div className="space-y-12 mb-16">
          {skillGroups.map((group) => {
            const GroupIcon = group.icon;
            return (
              <div key={group.id} className="space-y-6">
                {/* Group Header */}
                <div className="flex items-center gap-3 pb-3 border-b border-border/80">
                  <div className="w-8 h-8 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0">
                    <GroupIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-content tracking-tight">
                      {group.title}
                    </h3>
                    <p className="font-sans text-xs text-content-secondary">
                      {group.subtitle}
                    </p>
                  </div>
                </div>

                {/* Skill Cards Grid (Semantic <article> elements) */}
                <div
                  className={`grid grid-cols-1 ${
                    group.skills.length > 1
                      ? 'md:grid-cols-2'
                      : 'md:grid-cols-1 max-w-2xl'
                  } gap-6`}
                >
                  {group.skills.map((skill) => {
                    const SkillIcon = skill.icon;
                    return (
                      <article
                        key={skill.name}
                        className="rounded-xl border border-border bg-surface p-6 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between group"
                      >
                        <div>
                          {/* Card Top: Name, Icon, and Level Tag */}
                          <div className="flex items-start justify-between gap-4 mb-4">
                            <div className="flex items-center gap-3">
                              <div className="w-11 h-11 rounded-lg bg-surface-hover border border-border group-hover:border-accent/40 group-hover:bg-accent-subtle flex items-center justify-center text-accent transition-colors duration-normal shrink-0">
                                <SkillIcon className="w-5 h-5 stroke-[1.75]" />
                              </div>
                              <div>
                                <h4 className="font-heading font-bold text-xl text-content tracking-tight">
                                  {skill.name}
                                </h4>
                                <span className="font-mono text-xs text-content-muted block mt-0.5">
                                  {skill.role}
                                </span>
                              </div>
                            </div>

                            <Badge
                              variant={skill.statusVariant}
                              size="sm"
                              className="shrink-0"
                            >
                              {skill.status}
                            </Badge>
                          </div>

                          {/* Description */}
                          <p className="font-sans text-sm text-content-secondary leading-relaxed mb-6">
                            {skill.description}
                          </p>
                        </div>

                        {/* Concepts & Application Highlights */}
                        <div className="pt-4 border-t border-border">
                          <span className="font-mono text-[11px] uppercase tracking-wider text-content-muted block mb-2.5">
                            Key Focus & Concepts
                          </span>
                          <div className="flex flex-wrap gap-1.5">
                            {skill.concepts.map((concept) => (
                              <span
                                key={concept}
                                className="inline-flex items-center text-xs font-mono px-2 py-1 rounded bg-bg border border-border text-content-secondary group-hover:text-content transition-colors duration-fast"
                              >
                                {concept}
                              </span>
                            ))}
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Competence & Growth Statement Panel */}
        <div className="p-6 sm:p-8 rounded-2xl bg-surface border border-accent-border/50 relative overflow-hidden">
          <div
            className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none"
            aria-hidden="true"
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-accent" />
                <h4 className="font-heading font-bold text-lg text-content tracking-tight">
                  Why No Arbitrary Skill Percentages?
                </h4>
              </div>
              <p className="font-sans text-sm text-content-secondary leading-relaxed">
                Rating human competence on a scale of "85% Python" or "90% MySQL" is an artificial illusion. In engineering, true capability is proven through clean logic, system architecture, data integrity, and the humility to continuously solve harder problems.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto shrink-0 font-mono text-xs text-content-secondary">
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg border border-border w-full sm:w-auto justify-center">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Verified Stack</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-bg border border-border w-full sm:w-auto justify-center">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Active Learner</span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
