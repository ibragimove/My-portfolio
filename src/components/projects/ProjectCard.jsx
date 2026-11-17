import React, { useState } from 'react';
import { MonoLabel } from '../common/Typography';
import { Badge } from '../common/Badge';
import { Button } from '../common/Button';
import {
  Github,
  ExternalLink,
  Target,
  Wrench,
  Layers,
  Code2,
  Sparkles,
  ArrowUpRight,
  Database,
  Terminal,
  HeartPulse,
  GraduationCap,
  Lightbulb,
} from 'lucide-react';

/**
 * Reusable Featured Project Card Component — Elbek Ibragimov
 * - Real project presentations with Problem, Contribution, and Learning
 * - Direct GitHub links to ibragimove repositories
 * - Electric Orange visual highlights and responsive styling
 */
export const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(!project.image);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Derive decorative icon based on project theme
  const getProjectIcon = () => {
    if (project.id === 'medcare-ai') return HeartPulse;
    if (project.id === 'sat-alfa') return GraduationCap;
    if (project.technologies.some((t) => t.toLowerCase().includes('sql')))
      return Database;
    return Layers;
  };

  const ProjectIcon = getProjectIcon();

  return (
    <article className="rounded-2xl border border-border bg-surface overflow-hidden transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between group">
      <div>
        {/* Project Screenshot / Media Area */}
        <div className="relative aspect-video w-full bg-gradient-to-br from-surface-hover via-surface to-bg border-b border-border overflow-hidden select-none">
          {project.image && !imageError ? (
            <img
              src={project.image}
              alt={`Screenshot of ${project.title}`}
              className={`w-full h-full object-cover transition-all duration-normal group-hover:scale-105 ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : null}

          {/* Architectural Project Graphic */}
          {(!project.image || imageError) && (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
              {/* Subtle Tech Grid Pattern */}
              <div
                className="absolute inset-0 opacity-[0.06] dark:opacity-[0.12]"
                style={{
                  backgroundImage:
                    'radial-gradient(var(--color-accent) 1px, transparent 1px)',
                  backgroundSize: '20px 20px',
                }}
                aria-hidden="true"
              />

              {/* Central Technical Mockup Box */}
              <div className="relative z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-xl bg-accent-subtle border border-accent-border flex items-center justify-center text-accent mb-3 group-hover:scale-110 motion-safe:transition-transform shadow-xs">
                <ProjectIcon className="w-7 h-7 stroke-[1.75]" />
              </div>

              <div className="relative z-10 space-y-1">
                <span className="font-heading font-bold text-sm sm:text-base text-content block tracking-tight">
                  {project.title}
                </span>
                <span className="font-mono text-[11px] text-accent block">
                  {project.status || 'Verified Repository'}
                </span>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-3 right-3">
                <Badge variant="solid" size="sm">
                  {project.status ? project.status.split('(')[0].trim() : 'Active'}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-content-muted">
                PROJECT // 0{index + 1}
              </div>
            </div>
          )}
        </div>

        {/* Project Content Area */}
        <div className="p-6 sm:p-7 space-y-5">
          {/* Header & Title */}
          <div>
            <div className="flex items-center justify-between gap-2 mb-2">
              <span className="font-mono text-xs font-semibold text-accent uppercase tracking-wider">
                Case Study // 0{index + 1}
              </span>
              <MonoLabel variant="accent" className="text-[10px]">
                {project.status ? project.status.split('(')[0].trim() : 'Live'}
              </MonoLabel>
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-content tracking-tight group-hover:text-accent transition-colors duration-fast">
              {project.title}
            </h3>

            <p className="font-sans text-sm text-content-secondary leading-relaxed mt-2.5">
              {project.shortDescription}
            </p>
          </div>

          {/* Deep-Dive Problem & Contribution Callout Blocks */}
          <div className="space-y-3 pt-1">
            {/* Problem Box */}
            <div className="p-3.5 rounded-lg bg-bg/80 border border-border/80 text-xs font-sans">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-content uppercase tracking-wider mb-1">
                <Target className="w-3.5 h-3.5 text-accent" />
                <span>Problem Being Addressed</span>
              </div>
              <p className="text-content-secondary leading-relaxed">
                {project.problem}
              </p>
            </div>

            {/* Contribution Box */}
            <div className="p-3.5 rounded-lg bg-bg/80 border border-border/80 text-xs font-sans">
              <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-content uppercase tracking-wider mb-1">
                <Wrench className="w-3.5 h-3.5 text-accent" />
                <span>My Technical Contribution</span>
              </div>
              <p className="text-content-secondary leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* What I Learned Box */}
            {project.learning && (
              <div className="p-3.5 rounded-lg bg-accent-subtle/30 border border-accent-border/40 text-xs font-sans">
                <div className="flex items-center gap-1.5 font-mono text-[11px] font-bold text-accent uppercase tracking-wider mb-1">
                  <Lightbulb className="w-3.5 h-3.5 text-accent" />
                  <span>Key Engineering Takeaway</span>
                </div>
                <p className="text-content-secondary leading-relaxed">
                  {project.learning}
                </p>
              </div>
            )}
          </div>

          {/* Technology Badges */}
          <div className="pt-2">
            <span className="font-mono text-[11px] uppercase tracking-wider text-content-muted block mb-2">
              Technologies Used
            </span>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <MonoLabel key={tech} variant="default" className="text-xs">
                  {tech}
                </MonoLabel>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Card Action Footer: GitHub & Live Demo */}
      <div className="px-6 pb-6 pt-4 border-t border-border bg-surface/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-content bg-surface hover:bg-surface-hover border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label={`View ${project.title} source code on GitHub`}
            >
              <Github className="w-3.5 h-3.5 text-accent" />
              <span>Source Code</span>
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-content-muted bg-surface/50 border border-border-subtle cursor-not-allowed">
              <Github className="w-3.5 h-3.5" />
              <span>Private Repo</span>
            </span>
          )}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono font-medium text-accent-contrast bg-accent hover:bg-accent-hover shadow-xs transition-colors"
              aria-label={`Open live demonstration for ${project.title}`}
            >
              <span>Live Demo</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-content-muted bg-surface/50 border border-border-subtle">
              <span>{project.status || 'Active Codebase'}</span>
            </span>
          )}
        </div>

        <div className="font-mono text-[11px] text-content-muted flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Verified Repository</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
