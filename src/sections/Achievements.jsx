import React from 'react';
import {
  Container,
  Card,
  Heading,
  Text,
  MonoLabel,
  Badge,
} from '../components';
import { achievementsData } from '../data';
import {
  Trophy,
  Award,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  Medal,
  Star,
  FileCheck,
} from 'lucide-react';

/**
 * Achievements Section — Elbek Ibragimov
 * Separated into two distinct, verified groups:
 * 1. Competition Achievements (IT Park [2026] & Muhammad Al-Xorazmiy [2024])
 * 2. Academic Profile (SAT: 1520 [Math: 800], IELTS: 7.0, GPA: 4.9/5.0)
 * Styled with Midnight × Electric Orange cards and zero invented metrics.
 */
export const Achievements = () => {
  return (
    <section id="achievements" className="py-20 md:py-28 bg-surface/20 border-t border-border/60 relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">05 // ACHIEVEMENTS & METRICS</MonoLabel>
            <span className="text-xs font-mono text-content-muted">
              · Verified Competitions & Academic Rigor
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Competitive recognition and standardized academic rigor.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            Verified outcomes spanning national web development and algorithmic competitions, alongside top-tier standardized academic examinations.
          </p>
        </div>

        {/* Group 1: Competition Achievements */}
        <div className="mb-16">
          <div className="flex items-center gap-3 pb-3 border-b border-border mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0">
              <Trophy className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-content tracking-tight">
                Competition Achievements & Awards
              </h3>
              <p className="font-sans text-xs text-content-secondary">
                Verified podium placements in technology and algorithmic competitions in Uzbekistan
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.competitions.map((item) => (
              <article
                key={item.id}
                className="rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between group"
              >
                <div>
                  {/* Top Bar: Award Badge & Organization */}
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="flex items-center gap-2">
                      <span className="w-10 h-10 rounded-xl bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 group-hover:scale-105 motion-safe:transition-transform">
                        <Medal className="w-5 h-5 stroke-[1.75]" />
                      </span>
                      <div>
                        <span className="font-mono text-xs font-semibold text-accent block">
                          {item.award} · {item.year}
                        </span>
                        <span className="font-mono text-[11px] text-content-muted block">
                          {item.organization}
                        </span>
                      </div>
                    </div>

                    <Badge variant="solid" size="sm">
                      {item.rankHighlight}
                    </Badge>
                  </div>

                  {/* Title & Description */}
                  <h4 className="font-heading font-bold text-xl text-content tracking-tight mb-2.5 group-hover:text-accent transition-colors duration-fast">
                    {item.title}
                  </h4>

                  <p className="font-sans text-sm text-content-secondary leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <MonoLabel key={tag} variant="default" className="text-xs">
                      {tag}
                    </MonoLabel>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Group 2: Academic Profile */}
        <div>
          <div className="flex items-center gap-3 pb-3 border-b border-border mb-6">
            <div className="w-8 h-8 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0">
              <GraduationCap className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-heading font-bold text-lg text-content tracking-tight">
                Academic Profile & Standardized Testing
              </h3>
              <p className="font-sans text-xs text-content-secondary">
                Quantitative academic benchmarks validating mathematical aptitude, English communication, and high school excellence
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* SAT Card */}
            <article className="rounded-2xl border border-accent-border/60 bg-gradient-to-br from-surface via-surface to-accent-subtle/20 p-6 sm:p-7 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                      Standardized Exam
                    </span>
                  </div>
                  <Badge variant="accent" size="sm">
                    SAT Official
                  </Badge>
                </div>

                <h4 className="font-heading font-bold text-xl text-content tracking-tight mb-1">
                  SAT Examination
                </h4>
                <p className="font-sans text-xs text-content-secondary leading-relaxed mb-6">
                  Standardized test assessing mathematical problem solving and evidence-based reading.
                </p>

                {/* Composite Score Display */}
                <div className="p-4 rounded-xl bg-bg border border-border mb-5 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-content-muted block uppercase tracking-wider">
                      Composite Score
                    </span>
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-content tracking-tight">
                      1520{' '}
                      <span className="text-sm font-mono text-content-muted font-normal">
                        / 1600
                      </span>
                    </span>
                  </div>
                  <Badge variant="solid" size="sm">
                    Top 1% Global
                  </Badge>
                </div>

                {/* Subscore Breakdown */}
                <div className="space-y-2.5 mb-6">
                  <div className="p-2.5 rounded-lg bg-surface border border-border flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-semibold text-content block">
                        Mathematics
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">
                        Perfect Score
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-bold text-base text-accent">
                        800
                      </span>
                      <span className="text-xs font-mono text-content-muted"> / 800</span>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-lg bg-surface border border-border flex items-center justify-between text-xs">
                    <div>
                      <span className="font-mono font-semibold text-content block">
                        Reading & Writing (EBRW)
                      </span>
                      <span className="text-[10px] text-content-secondary font-mono">
                        Advanced Reasoning
                      </span>
                    </div>
                    <div className="text-right">
                      <span className="font-heading font-bold text-base text-content">
                        720
                      </span>
                      <span className="text-xs font-mono text-content-muted"> / 800</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                <MonoLabel variant="accent">Math: 800/800</MonoLabel>
                <MonoLabel variant="default">EBRW: 720</MonoLabel>
              </div>
            </article>

            {/* IELTS Card */}
            <article className="rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                      Language Exam
                    </span>
                  </div>
                  <Badge variant="accent" size="sm">
                    IELTS Official
                  </Badge>
                </div>

                <h4 className="font-heading font-bold text-xl text-content tracking-tight mb-1">
                  IELTS Academic
                </h4>
                <p className="font-sans text-xs text-content-secondary leading-relaxed mb-6">
                  International English Language Testing System certifying advanced operational fluency.
                </p>

                {/* Overall Score Display */}
                <div className="p-4 rounded-xl bg-bg border border-border mb-5 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-content-muted block uppercase tracking-wider">
                      Overall Band
                    </span>
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-content tracking-tight">
                      7.0{' '}
                      <span className="text-sm font-mono text-content-muted font-normal">
                        / 9.0
                      </span>
                    </span>
                  </div>
                  <Badge variant="solid" size="sm">
                    C1 Proficient
                  </Badge>
                </div>

                {/* Competency summary */}
                <div className="p-3.5 rounded-lg bg-surface-hover/70 border border-border text-xs font-sans text-content-secondary leading-relaxed mb-6 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-content font-semibold text-xs">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Operational Command</span>
                  </div>
                  <p className="text-[11px]">
                    Handles complex language, technical reading, and academic reasoning fluently for undergraduate study.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                <MonoLabel variant="accent">Overall: 7.0</MonoLabel>
                <MonoLabel variant="default">C1 Equivalent</MonoLabel>
              </div>
            </article>

            {/* GPA & School Academic Card */}
            <article className="rounded-2xl border border-border bg-surface p-6 sm:p-7 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold uppercase text-accent tracking-wider">
                      School Academic Standing
                    </span>
                  </div>
                  <Badge variant="accent" size="sm">
                    School No. 40
                  </Badge>
                </div>

                <h4 className="font-heading font-bold text-xl text-content tracking-tight mb-1">
                  High School GPA
                </h4>
                <p className="font-sans text-xs text-content-secondary leading-relaxed mb-6">
                  School No. 40, Khanka, Khorezm · Rigorous academic coursework in mathematics and sciences.
                </p>

                {/* GPA Display */}
                <div className="p-4 rounded-xl bg-bg border border-border mb-5 flex items-baseline justify-between">
                  <div>
                    <span className="font-mono text-[11px] text-content-muted block uppercase tracking-wider">
                      Cumulative GPA
                    </span>
                    <span className="font-heading font-extrabold text-3xl sm:text-4xl text-content tracking-tight">
                      4.9{' '}
                      <span className="text-sm font-mono text-content-muted font-normal">
                        / 5.0
                      </span>
                    </span>
                  </div>
                  <Badge variant="solid" size="sm">
                    Academic Honors
                  </Badge>
                </div>

                {/* Target Admission Box */}
                <div className="p-3.5 rounded-lg bg-surface-hover/70 border border-border text-xs font-sans text-content-secondary leading-relaxed mb-6 space-y-1.5">
                  <div className="flex items-center gap-1.5 text-content font-semibold text-xs">
                    <GraduationCap className="w-3.5 h-3.5 text-accent" />
                    <span>Fall 2027 Undergrad Target</span>
                  </div>
                  <p className="text-[11px]">
                    Preparing for university admission in Computer Science with a focus on Software Engineering or Artificial Intelligence.
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border flex flex-wrap gap-1.5">
                <MonoLabel variant="accent">GPA: 4.9/5.0</MonoLabel>
                <MonoLabel variant="default">Fall 2027</MonoLabel>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Achievements;
