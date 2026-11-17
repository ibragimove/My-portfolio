import React from 'react';
import { Container, MonoLabel, Badge, Heading, Text } from '../components';
import { ProjectCard } from '../components/projects/ProjectCard';
import { projectsData, siteConfig } from '../data';
import { Sparkles, FolderGit2, ArrowUpRight, Github } from 'lucide-react';

/**
 * Featured Projects Section — Elbek Ibragimov
 * - 2 Real Verified Projects (SAT ALFA, MedCare)
 * - Links to Elbek's actual GitHub repositories (github.com/ibragimove)
 * - Deep dive into problem addressed, contribution, and key learning
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
            Real software projects developed to address real functional problems—from community healthcare access in rural villages to educational management and standardized test preparation.
          </p>
        </div>

        {/* Responsive Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16 items-stretch">
          {projectsData.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* GitHub Repository Showcase Banner */}
        <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 mt-0.5">
              <FolderGit2 className="w-4 h-4" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading font-semibold text-content text-sm">
                  Open-Source Code on GitHub
                </span>
                <Badge variant="accent" size="sm">
                  Verified Repositories
                </Badge>
              </div>
              <p className="font-sans text-xs text-content-secondary mt-1">
                Explore the complete source code, commits, and implementation details for these projects at{' '}
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-mono text-accent hover:underline"
                >
                  github.com/ibragimove
                </a>
                .
              </p>
            </div>
          </div>

          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium text-accent-contrast bg-accent hover:bg-accent-hover shadow-xs transition-colors shrink-0"
          >
            <Github className="w-3.5 h-3.5" />
            <span>Browse GitHub Profile</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
