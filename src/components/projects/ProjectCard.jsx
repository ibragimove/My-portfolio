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
} from 'lucide-react';

/**
 * Reusable Featured Project Card Component
 * - Large visual media header with graceful screenshot fallback
 * - Displays title, short description, problem, contribution, technologies
 * - GitHub repository & live demo links
 * - Electric Orange interactive highlights
 */
export const ProjectCard = ({ project, index }) => {
  const [imageError, setImageError] = useState(!project.image);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Derive a decorative icon based on primary technologies
  const getProjectIcon = () => {
    if (project.technologies.some((t) => t.toLowerCase().includes('sql')))
      return Database;
    if (project.technologies.some((t) => t.toLowerCase().includes('python')))
      return Terminal;
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

          {/* Elegant Architectural Screenshot Placeholder */}
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
                <span className="font-heading font-bold text-sm text-content block tracking-tight">
                  {project.title}
                </span>
                <span className="font-mono text-[11px] text-accent block">
                  {project.isPlaceholder ? 'Editable Project Placeholder' : 'Project Preview'}
                </span>
              </div>

              {/* Tag indicator */}
              <div className="absolute top-3 right-3">
                <Badge variant={project.isPlaceholder ? 'accent' : 'solid'} size="sm">
                  {project.isPlaceholder ? 'Template' : 'Active'}
                </Badge>
              </div>

              <div className="absolute bottom-3 left-3 font-mono text-[10px] text-content-muted">
                PROJECT_REF // 0{index + 1}
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
                Featured Work // 0{index + 1}
              </span>
              {project.isPlaceholder && (
                <MonoLabel variant="accent" className="text-[10px]">
                  Replaceable in data/projects.js
                </MonoLabel>
              )}
            </div>

            <h3 className="font-heading font-bold text-xl sm:text-2xl text-content tracking-tight group-hover:text-accent transition-colors duration-fast">
              {project.title}
            </h3>

            <p className="font-sans text-sm text-content-secondary leading-relaxed mt-2.5">
              {project.shortDescription}
            </p>
          </div>

          {/* Deep-Dive Problem & Contribution Callout Blocks */}
          <div className="space-y-3 pt-2">
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
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-mono text-content-muted bg-surface/50 border border-border-subtle cursor-not-allowed">
              <span>Demo Coming Soon</span>
            </span>
          )}
        </div>

        <div className="font-mono text-[11px] text-content-muted flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
          <span>Verified Specs</span>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
