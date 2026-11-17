import React from 'react';
import {
  Container,
  Button,
  Badge,
  Heading,
  Text,
  MonoLabel,
} from '../components';
import { ProfileAvatar } from '../components/common/ProfileAvatar';
import { siteConfig } from '../data';
import {
  MapPin,
  ArrowRight,
  ArrowDownRight,
  User,
  Github,
  Linkedin,
  Youtube,
  GraduationCap,
  Sparkles,
} from 'lucide-react';

/**
 * Hero Section — Elbek Ibragimov
 * - High-impact personal introduction for an ambitious high-school developer
 * - Dedicated Profile Avatar with Electric Orange accent frame
 * - Direct links to GitHub, LinkedIn, and YouTube
 */
export const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32 min-h-[calc(100vh-4rem)] flex items-center">
      {/* Subtle Animated Technical Background */}
      <div
        className="absolute inset-0 pointer-events-none select-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Ambient Electric Orange Glow Orbs */}
        <div
          className="absolute -top-32 -left-32 w-96 h-96 rounded-full bg-accent/15 blur-3xl opacity-60 motion-safe:animate-pulse"
          style={{ animationDuration: '6s' }}
        />
        <div
          className="absolute top-1/3 -right-32 w-80 h-80 rounded-full bg-accent/10 blur-3xl opacity-50 motion-safe:animate-pulse"
          style={{ animationDuration: '8s' }}
        />

        {/* Technical Grid Pattern with Radial Vignette */}
        <div
          className="absolute inset-0 opacity-[0.035] dark:opacity-[0.07]"
          style={{
            backgroundImage: `
              linear-gradient(to right, var(--color-text) 1px, transparent 1px),
              linear-gradient(to bottom, var(--color-text) 1px, transparent 1px)
            `,
            backgroundSize: '48px 48px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 95%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 40%, #000 50%, transparent 95%)',
          }}
        />

        {/* Technical Geographic Coordinates for Khorezm, Uzbekistan */}
        <div className="hidden lg:block absolute top-20 right-16 font-mono text-[10px] text-content-muted tracking-wider">
          LAT: 41.4789° N · LON: 60.7783° E [Khorezm, UZ]
        </div>
      </div>

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Personal Title, Bio & CTAs (7 columns on desktop) */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1">
            {/* Location & Academic Standing Badge */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2 mb-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface border border-border shadow-xs text-xs font-mono text-content-secondary">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{siteConfig.location}</span>
              </div>

              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
                <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
                <span>Fall 2027 CS Undergrad Applicant</span>
              </div>
            </div>

            {/* Author Name Eyebrow */}
            <span className="font-mono text-sm sm:text-base font-semibold text-accent tracking-wide uppercase mb-2 block">
              {siteConfig.fullName}
            </span>

            {/* Main Headline */}
            <h1 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-content tracking-tight leading-[1.1] mb-6">
              I build things that{' '}
              <span className="text-accent underline decoration-accent/30 underline-offset-8">
                make a difference.
              </span>
            </h1>

            {/* Supporting Bio Text */}
            <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed max-w-2xl mb-8">
              {siteConfig.bio}
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 mb-10 w-full sm:w-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button
                  variant="primary"
                  size="lg"
                  rightIcon={ArrowDownRight}
                  className="w-full sm:w-auto font-semibold"
                >
                  Explore my work
                </Button>
              </a>

              <a href="#about" className="w-full sm:w-auto">
                <Button
                  variant="secondary"
                  size="lg"
                  leftIcon={User}
                  className="w-full sm:w-auto"
                >
                  About me
                </Button>
              </a>
            </div>

            {/* Real Social Links & Academic Focus Pills */}
            <div className="pt-6 border-t border-border/80 w-full flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* GitHub, LinkedIn, and YouTube Links */}
              <div className="flex items-center gap-2">
                <a
                  href={siteConfig.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-content-secondary hover:text-content hover:border-accent hover:bg-surface-hover transition-colors duration-fast"
                  aria-label="GitHub Profile (ibragimove)"
                >
                  <Github className="w-3.5 h-3.5 text-accent" />
                  <span>GitHub</span>
                </a>

                <a
                  href={siteConfig.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-content-secondary hover:text-content hover:border-accent hover:bg-surface-hover transition-colors duration-fast"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-3.5 h-3.5 text-accent" />
                  <span>LinkedIn</span>
                </a>

                <a
                  href={siteConfig.links.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border bg-surface text-xs font-mono text-content-secondary hover:text-content hover:border-accent hover:bg-surface-hover transition-colors duration-fast"
                  aria-label="YouTube Channel (@talkwithdevs-g4s)"
                >
                  <Youtube className="w-3.5 h-3.5 text-accent" />
                  <span>YouTube</span>
                </a>
              </div>

              {/* Technical & Academic Badges */}
              <div className="flex flex-wrap items-center justify-center gap-1.5">
                <MonoLabel variant="muted">Software Engineering</MonoLabel>
                <MonoLabel variant="accent">Artificial Intelligence</MonoLabel>
              </div>
            </div>
          </div>

          {/* Right Column: Profile Avatar (5 columns on desktop) */}
          <div className="lg:col-span-5 flex justify-center items-center order-1 lg:order-2">
            <ProfileAvatar />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
