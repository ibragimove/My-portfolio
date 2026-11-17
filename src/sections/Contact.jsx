import React, { useState } from 'react';
import {
  Container,
  Card,
  Heading,
  Text,
  MonoLabel,
  Badge,
  Button,
} from '../components';
import { siteConfig } from '../data';
import {
  Mail,
  Github,
  Linkedin,
  Youtube,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  GraduationCap,
} from 'lucide-react';

/**
 * Contact Section — Elbek Ibragimov
 * - Verified direct email, GitHub, LinkedIn, and YouTube channels
 * - Real location: Khanka, Khorezm, Uzbekistan (UTC+5)
 * - One-click email copy with instant feedback
 */
export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(siteConfig.contact.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const contactChannels = [
    {
      id: 'email',
      icon: Mail,
      title: 'Direct Email',
      display: siteConfig.contact.email,
      href: `mailto:${siteConfig.contact.email}`,
      actionLabel: 'Send Email',
      secondaryAction: {
        label: copied ? 'Copied' : 'Copy address',
        onClick: handleCopyEmail,
        icon: copied ? Check : Copy,
      },
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub Repositories',
      display: 'github.com/ibragimove',
      href: siteConfig.contact.github,
      actionLabel: 'Visit GitHub',
      isExternal: true,
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn Network',
      display: 'linkedin.com/in/elbek-ibragimov',
      href: siteConfig.contact.linkedin,
      actionLabel: 'Connect',
      isExternal: true,
    },
    {
      id: 'youtube',
      icon: Youtube,
      title: 'Talk With Devs Channel',
      display: 'youtube.com/@talkwithdevs-g4s',
      href: siteConfig.contact.youtube,
      actionLabel: 'Watch Podcast',
      isExternal: true,
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-28 bg-bg relative">
      <Container>
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 mb-3">
            <MonoLabel variant="accent">06 // GET IN TOUCH</MonoLabel>
            <span className="text-xs font-mono text-content-muted">
              · Communications & Inquiries
            </span>
          </div>

          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl md:text-4xl text-content tracking-tight mb-4">
            Let's build something meaningful together.
          </h2>

          <p className="font-sans text-base sm:text-lg text-content-secondary leading-relaxed">
            Whether you want to discuss software engineering, human-centered AI initiatives, university research, or collaborative projects, my inbox is always open.
          </p>
        </div>

        {/* 2-Column Responsive Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 columns on desktop): Status, Location & Profile */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-content">
                    Elbek Ibragimov
                  </h3>
                  <span className="font-mono text-xs text-content-muted">
                    Contact & Active Availability
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="p-3.5 rounded-xl bg-bg border border-border space-y-2">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-xs font-semibold text-content">
                    Status: Open for Collaboration
                  </span>
                </div>
                <p className="font-sans text-xs text-content-secondary leading-relaxed">
                  {siteConfig.contact.availability}
                </p>
              </div>

              {/* Location & Timezone Details */}
              <div className="space-y-2.5 pt-1 text-xs font-mono text-content-secondary">
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Location: {siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-2">
                  <GraduationCap className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>School No. 40 · Fall 2027 Undergrad Applicant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Timezone: Uzbekistan Time (UTC+5)</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Right Column (7 columns on desktop): Real Contact Channel Cards */}
          <div className="lg:col-span-7 space-y-4">
            {contactChannels.map((channel) => {
              const ChannelIcon = channel.icon;
              return (
                <article
                  key={channel.id}
                  className="rounded-2xl border border-border bg-surface p-6 transition-all duration-normal hover:border-accent-border hover:shadow-card hover:shadow-accent-glow flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0 group-hover:scale-105 motion-safe:transition-transform shadow-xs">
                      <ChannelIcon className="w-5 h-5 stroke-[1.75]" />
                    </div>

                    <div>
                      <span className="font-mono text-xs uppercase tracking-wider text-content-muted block">
                        {channel.title}
                      </span>
                      <span className="font-heading font-bold text-base sm:text-lg text-content group-hover:text-accent transition-colors duration-fast block mt-0.5 break-all sm:break-normal">
                        {channel.display}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2 self-stretch sm:self-auto justify-end w-full sm:w-auto pt-2 sm:pt-0 border-t sm:border-t-0 border-border">
                    {channel.secondaryAction && (
                      <button
                        type="button"
                        onClick={channel.secondaryAction.onClick}
                        title={channel.secondaryAction.label}
                        aria-label={channel.secondaryAction.label}
                        className="px-3 py-2 rounded-lg border border-border bg-surface-hover hover:border-accent hover:text-accent text-content-secondary text-xs font-mono transition-colors flex items-center gap-1.5"
                      >
                        <channel.secondaryAction.icon className="w-3.5 h-3.5 text-accent" />
                        <span>{copied ? 'Copied' : 'Copy'}</span>
                      </button>
                    )}

                    <a
                      href={channel.href}
                      target={channel.isExternal ? '_blank' : undefined}
                      rel={channel.isExternal ? 'noopener noreferrer' : undefined}
                      className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-lg text-xs font-mono font-medium text-accent-contrast bg-accent hover:bg-accent-hover shadow-xs transition-colors text-center"
                    >
                      <span>{channel.actionLabel}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
