import React from 'react';
import {
  Container,
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  Heading,
  Text,
  MonoLabel,
  Badge,
} from '../components';
import {
  Sparkles,
  MapPin,
  Database,
  Code2,
  Brain,
  Quote,
  Target,
  GraduationCap,
  Layers,
  Compass,
} from 'lucide-react';
import { siteConfig } from '../data';

/**
 * About Section
 * - Thoughtful editorial narrative
 * - Strict fidelity to verified background details
 * - Asymmetrical editorial grid with high-impact pull-quote
 * - Responsive design adhering to typography hierarchy
 */
export const About = () => {
  const verifiedTracks = [
    {
      icon: Database,
      title: 'Backend & Data Foundations',
      tags: ['PHP', 'MySQL', 'Relational DBs'],
      desc: 'Early focus on server-side logic, structured SQL queries, schema design, and data integrity.',
    },
    {
      icon: Code2,
      title: 'Scripting & Algorithmic Exploration',
      tags: ['Python (Beginner)', 'Automation'],
      desc: 'Building foundational experience with Python syntax, logical problem solving, and script design.',
    },
    {
      icon: Brain,
      title: 'Software Engineering & AI Focus',
      tags: ['Software Engineering', 'Human-Centric AI'],
      desc: 'Actively exploring artificial intelligence principles that amplify human thought and solve tangible problems.',
    },
  ];

  const profileFacts = [
    { label: 'Origin', value: 'Uzbekistan', icon: MapPin },
    { label: 'Status', value: 'Computer Science Student', icon: GraduationCap },
    { label: 'Primary Stack', value: 'PHP · MySQL · Python (Beginner)', icon: Layers },
    { label: 'Focus', value: 'Software Engineering & AI', icon: Compass },
    { label: 'Core Mission', value: 'Building meaningful technology', icon: Target },
  ];

  return (
    <section id="about" className="py-20 md:py-28 bg-surface/20 border-t border-border/60 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">01 // ABOUT ME</MonoLabel>
            <span className="text-xs font-mono text-content-muted">· Background & Perspective</span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Engineering with curiosity, honesty, and a human-first lens.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            A candid look into my journey from discovering programming in Uzbekistan to exploring software engineering and artificial intelligence.
          </p>
        </div>

        {/* Editorial Layout: Asymmetric 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 columns on desktop): Pull-Quote & Profile Facts */}
          <div className="lg:col-span-5 space-y-6">
            {/* Editorial Pull Quote Card */}
            <div className="relative rounded-2xl bg-surface border-2 border-accent/30 p-6 sm:p-8 shadow-xl shadow-accent/5 overflow-hidden">
              <div
                className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="w-10 h-10 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent mb-5">
                <Quote className="w-5 h-5 text-accent" />
              </div>

              <blockquote className="font-heading font-bold text-lg sm:text-xl text-content leading-snug tracking-tight mb-4">
                "I believe artificial intelligence should{' '}
                <span className="text-accent underline decoration-accent/40 underline-offset-4">
                  empower human thinking
                </span>{' '}
                rather than replace it."
              </blockquote>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-content-muted">
                <span>Core Engineering Philosophy</span>
                <span className="text-accent font-semibold">Human-First AI</span>
              </div>
            </div>

            {/* Verified Facts Side Panel */}
            <Card className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-mono text-xs font-bold uppercase text-content tracking-wider">
                  Profile Snapshot
                </span>
                <Badge variant="accent" size="sm">Verified</Badge>
              </div>

              <div className="space-y-3">
                {profileFacts.map((fact, idx) => {
                  const Icon = fact.icon;
                  return (
                    <div key={idx} className="flex items-start gap-3 text-xs">
                      <div className="w-6 h-6 rounded bg-surface-hover border border-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                        <Icon className="w-3.5 h-3.5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <span className="text-[11px] font-mono text-content-muted block">
                          {fact.label}
                        </span>
                        <span className="font-sans font-medium text-content text-xs sm:text-sm truncate block">
                          {fact.value}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>
          </div>

          {/* Right Column (7 columns on desktop): Editorial Narrative & Learning Milestones */}
          <div className="lg:col-span-7 space-y-8">
            {/* Editorial Narrative */}
            <div className="space-y-5 text-content-secondary font-sans leading-relaxed text-base sm:text-lg">
              <p className="text-content font-medium text-lg sm:text-xl leading-relaxed">
                I am a Computer Science student from Uzbekistan. My path in technology began with a fundamental curiosity: a desire to comprehend how software is constructed from scratch and how lines of code translate into systems that people rely on every day.
              </p>

              <p>
                My initial practical exposure centered around backend programming with{' '}
                <strong className="text-content font-semibold">PHP</strong> and relational data management using{' '}
                <strong className="text-content font-semibold">MySQL</strong>. Building applications with these tools gave me hands-on respect for server-side architecture, relational modeling, and the critical importance of disciplined data persistence.
              </p>

              <p>
                As my technical foundation grew, I expanded into{' '}
                <strong className="text-content font-semibold">Python</strong> at a beginner level. Working with Python has broadened my perspective on modern algorithmic problem-solving and clean engineering practices, providing a flexible playground for experimenting with scripts and automated tasks.
              </p>

              <p>
                Currently, I am actively immersing myself in{' '}
                <strong className="text-content font-semibold">software engineering principles</strong> and the evolving domain of{' '}
                <strong className="text-content font-semibold">artificial intelligence</strong>. I do not view AI as a novelty or a substitute for critical reasoning; rather, I am convinced that AI should serve as an intellectual multiplier—augmenting human creativity, clarity, and analytical capability.
              </p>

              <p className="border-l-2 border-accent pl-4 italic text-content font-sans text-base">
                My overarching motivation is to build practical, well-architected technology that solves meaningful problems and delivers genuine value to people.
              </p>
            </div>

            {/* Technical Tracks & Verified Skills Breakdown */}
            <div className="pt-6 border-t border-border">
              <div className="mb-4">
                <span className="font-heading font-bold text-base text-content block">
                  Technical Foundation & Active Explorations
                </span>
                <span className="font-sans text-xs text-content-secondary">
                  Transparent breakdown of tools I have worked with and areas I am studying.
                </span>
              </div>

              <div className="space-y-3">
                {verifiedTracks.map((track, idx) => {
                  const Icon = track.icon;
                  return (
                    <div
                      key={idx}
                      className="p-4 rounded-xl bg-surface border border-border hover:border-accent-border transition-colors duration-normal flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
                    >
                      <div className="flex items-start gap-3">
                        <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 mt-0.5">
                          <Icon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-heading font-semibold text-content text-sm sm:text-base">
                            {track.title}
                          </h4>
                          <p className="font-sans text-xs text-content-secondary leading-relaxed mt-0.5 max-w-md">
                            {track.desc}
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-1.5 self-start sm:self-auto shrink-0">
                        {track.tags.map((tag) => (
                          <MonoLabel key={tag} variant="default" className="text-[11px]">
                            {tag}
                          </MonoLabel>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
