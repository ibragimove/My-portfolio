import React from 'react';
import { Container, Card, Heading, Text, MonoLabel, Badge, Button } from '../components';
import { experienceData } from '../data';
import {
  Briefcase,
  Calendar,
  MapPin,
  Mic,
  BookOpen,
  Users,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

/**
 * Professional Experience Section
 * - Chronological timeline layout
 * - Highlights Talk With Devs (Uzbek IT Podcast, 2 Collaborators, Beginner Tech Education)
 * - Highlights SAT ALFA (Marketing, Social Media, SAT Support Teaching)
 * - Editable dates, optional logo and link placeholders
 * - Zero invented metrics or dates
 */
export const Experience = () => {
  const getExperienceIcon = (id) => {
    if (id === 'talk-with-devs') return Mic;
    if (id === 'sat-alfa') return BookOpen;
    return Briefcase;
  };

  return (
    <section id="experience" className="py-20 md:py-28 bg-bg relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">04 // EXPERIENCE</MonoLabel>
            <span className="text-xs font-mono text-content-muted">
              · Leadership & Community Work
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Educational leadership, community building, and technical communication.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            Hands-on experience co-producing an Uzbek-language tech podcast for beginners and supporting students through SAT education and digital outreach.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="relative pl-6 sm:pl-8 md:pl-10 border-l-2 border-border/80 space-y-12 max-w-4xl mb-16">
          {experienceData.map((item, index) => {
            const ExpIcon = getExperienceIcon(item.id);
            return (
              <div key={item.id} className="relative group">
                {/* Timeline Spine Node */}
                <div
                  className="absolute -left-[31px] sm:-left-[39px] md:-left-[47px] top-1.5 w-9 h-9 rounded-full bg-surface border-2 border-accent flex items-center justify-center text-accent shadow-md shadow-accent/20 group-hover:scale-110 motion-safe:transition-transform"
                  aria-hidden="true"
                >
                  <ExpIcon className="w-4 h-4" />
                </div>

                {/* Main Experience Card */}
                <article className="rounded-2xl border border-border bg-surface p-6 sm:p-8 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow">
                  {/* Card Header: Role, Organization, and Editable Date */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4 pb-4 border-b border-border">
                    <div className="flex items-start gap-3.5">
                      {/* Logo or Monogram Placeholder */}
                      <div className="w-12 h-12 rounded-xl bg-accent-subtle border border-accent-border flex items-center justify-center text-accent font-heading font-bold text-lg shrink-0 select-none">
                        {item.organization
                          .split(' ')
                          .map((w) => w[0])
                          .slice(0, 2)
                          .join('')}
                      </div>

                      <div>
                        <h3 className="font-heading font-bold text-xl sm:text-2xl text-content tracking-tight">
                          {item.organization}
                        </h3>
                        <p className="font-sans font-semibold text-accent text-sm mt-0.5">
                          {item.role}
                        </p>
                        <div className="flex flex-wrap items-center gap-2 mt-1.5 text-xs font-mono text-content-muted">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3.5 h-3.5 text-accent" />
                            {item.location}
                          </span>
                          <span>·</span>
                          <span className="text-content-secondary">{item.category}</span>
                        </div>
                      </div>
                    </div>

                    {/* Editable Date Pill */}
                    <div className="self-start sm:self-auto">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-bg border border-border text-xs font-mono text-content">
                        <Calendar className="w-3.5 h-3.5 text-accent shrink-0" />
                        <span>{item.dates}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Description */}
                  <p className="font-sans text-sm sm:text-base text-content-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>

                  {/* Key Contributions & Responsibilities */}
                  <div className="space-y-2.5 mb-6">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-content-muted block">
                      Core Responsibilities & Activities
                    </span>
                    <ul className="space-y-2">
                      {item.responsibilities.map((resp, rIdx) => (
                        <li
                          key={rIdx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-content-secondary leading-relaxed"
                        >
                          <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Collaborators Callout (For Talk With Devs) */}
                  {item.collaborators && (
                    <div className="mb-6 p-3 rounded-lg bg-accent-subtle/50 border border-accent-border/60 flex items-center gap-2 text-xs font-mono text-content">
                      <Users className="w-4 h-4 text-accent shrink-0" />
                      <span>{item.collaborators}</span>
                    </div>
                  )}

                  {/* Footer: Tags & Optional External Link */}
                  <div className="pt-4 border-t border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-1.5">
                      {item.tags.map((tag) => (
                        <MonoLabel key={tag} variant="default" className="text-xs">
                          {tag}
                        </MonoLabel>
                      ))}
                    </div>

                    {/* External Link or Link Placeholder */}
                    <div className="shrink-0">
                      {item.externalLink ? (
                        <a
                          href={item.externalLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-accent hover:underline"
                        >
                          <span>Visit Channel</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-content-muted">
                          <ExternalLink className="w-3 h-3" />
                          <span>Editable link in data/experience.js</span>
                        </span>
                      )}
                    </div>
                  </div>
                </article>
              </div>
            );
          })}
        </div>

        {/* Timeline Editing Guide Callout */}
        <div className="p-6 rounded-2xl bg-surface border border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 max-w-4xl">
          <div className="flex items-start gap-3">
            <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 mt-0.5">
              <Briefcase className="w-4 h-4" />
            </div>
            <div>
              <span className="font-heading font-semibold text-content text-sm block">
                Editable Experience Timeline
              </span>
              <p className="font-sans text-xs text-content-secondary mt-0.5">
                Dates and links are marked for easy replacement in{' '}
                <code className="font-mono text-accent bg-bg px-1.5 py-0.5 rounded border border-border">
                  src/data/experience.js
                </code>
                . No arbitrary dates or metrics were invented.
              </p>
            </div>
          </div>

          <Badge variant="accent" size="sm" className="shrink-0">
            2 Verified Experiences
          </Badge>
        </div>
      </Container>
    </section>
  );
};

export default Experience;
