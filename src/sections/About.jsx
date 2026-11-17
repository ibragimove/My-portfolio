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
  Award,
} from 'lucide-react';
import { siteConfig } from '../data';

/**
 * About Section — Elbek Ibragimov
 * - Authentic high-school developer story in Elbek's own words
 * - Verified academic profile (School No. 40, GPA 4.9/5.0, SAT 1520, IELTS 7.0)
 * - Grounded, mature narrative focused on building practical, human-centered technology
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
      title: 'Web Architecture & Modern Interfaces',
      tags: ['HTML5', 'CSS3', 'JavaScript', 'Tailwind CSS'],
      desc: 'Building responsive, standards-compliant user interfaces with modern styling and semantic structure.',
    },
    {
      icon: Brain,
      title: 'Python, Django & AI Exploration',
      tags: ['Python (Beginner)', 'Django', 'Human-Centered AI'],
      desc: 'Actively exploring Python frameworks, algorithmic problem solving, and artificial intelligence that supports human thinking.',
    },
  ];

  const profileFacts = [
    { label: 'Origin', value: 'Khanka, Khorezm, Uzbekistan', icon: MapPin },
    { label: 'Education', value: 'School No. 40 in Khanka, Khorezm', icon: GraduationCap },
    { label: 'Academic Standing', value: 'GPA: 4.9 / 5.0 (Honors)', icon: Award },
    { label: 'Standardized Tests', value: 'SAT: 1520 (Math 800) · IELTS: 7.0', icon: Sparkles },
    { label: 'Target University', value: 'Fall 2027 Undergrad (CS / AI)', icon: Compass },
    { label: 'Core Mission', value: 'Building solutions that matter', icon: Target },
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
            Curiosity, craftsmanship, and a human-centered approach to technology.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            A candid perspective on my development journey from Khanka, Khorezm to exploring software engineering and artificial intelligence.
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
                "I want to become someone who doesn't simply use technology, but{' '}
                <span className="text-accent underline decoration-accent/40 underline-offset-4">
                  understands it deeply enough to build solutions that matter.
                </span>"
              </blockquote>

              <div className="pt-4 border-t border-border flex items-center justify-between text-xs font-mono text-content-muted">
                <span>Personal Engineering Philosophy</span>
                <span className="text-accent font-semibold">Elbek Ibragimov</span>
              </div>
            </div>

            {/* Verified Facts Side Panel */}
            <Card className="space-y-4">
              <div className="flex items-center justify-between pb-2 border-b border-border">
                <span className="font-mono text-xs font-bold uppercase text-content tracking-wider">
                  Academic & Personal Snapshot
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
            {/* Authentic Narrative in Elbek's Own Voice */}
            <div className="space-y-5 text-content-secondary font-sans leading-relaxed text-base sm:text-lg">
              <p className="text-content font-medium text-lg sm:text-xl leading-relaxed">
                My interest in programming grew from curiosity about how technology works and how software can solve problems beyond the screen. While studying in Khorezm, I began exploring web development, learning PHP and MySQL and gradually building my technical foundation.
              </p>

              <p>
                What motivates me most today is the opportunity to create practical technology that addresses real problems in people's everyday lives. Whether designing patient communication workflows for community nurses or building educational platforms for peers, I focus on systems that provide direct, measurable value.
              </p>

              <p>
                I am particularly interested in <strong className="text-content font-semibold">artificial intelligence</strong> and <strong className="text-content font-semibold">human-centered software</strong>: technologies that support people's thinking, improve productivity, and make useful knowledge more accessible. Rather than seeing AI as a replacement for human intellect, I believe its greatest potential lies in expanding human analytical and creative capacity.
              </p>

              <p>
                Currently a student at <strong className="text-content font-semibold">School No. 40 in Khanka, Khorezm</strong>, I am preparing for undergraduate university applications for <strong className="text-content font-semibold">Fall 2027</strong> in Computer Science. My goal is to immerse myself in rigorous university studies in software engineering or artificial intelligence, continuing to build technology that creates lasting impact.
              </p>
            </div>

            {/* Technical Tracks & Verified Skills Breakdown */}
            <div className="pt-6 border-t border-border">
              <div className="mb-4">
                <span className="font-heading font-bold text-base text-content block">
                  Technical Foundation & Active Explorations
                </span>
                <span className="font-sans text-xs text-content-secondary">
                  Transparent breakdown of tools I build with and areas I am actively studying.
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
