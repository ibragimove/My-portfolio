import React from 'react';
import { Container, MonoLabel, Badge, Heading, Text } from '../components';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData } from '../data';
import { Sparkles, FolderGit2, ArrowUpRight, HelpCircle } from 'lucide-react';

/**
 * Featured Projects Section
 * - High-impact visual project cards
 * - Clear Problem and Technical Contribution breakdowns
 * - 3 Editable placeholders marked in data/projects.js
 * - Responsive grid with attractive Midnight × Electric Orange hover states
 */
export const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-surface/20 border-t border-border/60 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">03 // FEATURED PROJECTS</MonoLabel>
            <span className="text-xs font-mono text-content-muted">
              · Engineering Case Studies
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Selected engineering work, architectural problem solving, and software systems.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            A showcase of software projects developed to address real functional problems. Each entry details the challenge, architectural decisions, and specific technical contributions.
          </p>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16 items-stretch">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Developer Editing Note Callout */}
        <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 mt-0.5">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-semibold text-content text-sm">
                  Developer Notice: Ready for Custom Project Data
                </span>
                <Badge variant="accent" size="sm">
                  3 Placeholders Active
                </Badge>
              </div>
              <p className="font-sans text-xs text-content-secondary mt-1">
                To replace these templates with your real projects, update{' '}
                <code className="font-mono text-accent bg-bg px-1.5 py-0.5 rounded border border-border">
                  src/data/projects.js
                </code>{' '}
                and optionally add screenshot images.
              </p>
            </div>
          </div>

          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium text-content bg-surface-hover hover:bg-surface border border-border hover:border-accent hover:text-accent transition-colors shrink-0"
          >
            <span>Browse All Repositories</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
