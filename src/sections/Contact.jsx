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
  ArrowUpRight,
  Copy,
  Check,
  Send,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
} from 'lucide-react';

/**
 * Contact Section
 * - Clear headline & editorial invitation
 * - Explicit editable placeholders for Email, GitHub, LinkedIn
 * - Direct accessible mailto and social link actions
 * - One-click email copy functionality with feedback
 * - Midnight × Electric Orange aesthetic
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
      display: siteConfig.contact.emailDisplay,
      href: `mailto:${siteConfig.contact.email}`,
      actionLabel: 'Send an Email',
      secondaryAction: {
        label: copied ? 'Copied to clipboard' : 'Copy email address',
        onClick: handleCopyEmail,
        icon: copied ? Check : Copy,
      },
    },
    {
      id: 'github',
      icon: Github,
      title: 'GitHub Repositories',
      display: siteConfig.contact.githubDisplay,
      href: siteConfig.contact.github,
      actionLabel: 'View GitHub Profile',
      isExternal: true,
    },
    {
      id: 'linkedin',
      icon: Linkedin,
      title: 'LinkedIn Network',
      display: siteConfig.contact.linkedinDisplay,
      href: siteConfig.contact.linkedin,
      actionLabel: 'Connect on LinkedIn',
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
            Whether you want to discuss software engineering, explore human-centric AI initiatives, or talk about collaborative opportunities, my inbox is open.
          </p>
        </div>

        {/* 2-Column Responsive Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (5 columns on desktop): Status, Location & Config Notice */}
          <div className="lg:col-span-5 space-y-6">
            <Card className="space-y-5">
              <div className="flex items-center gap-3 pb-3 border-b border-border">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-base text-content">
                    Availability & Location
                  </h3>
                  <span className="font-mono text-xs text-content-muted">
                    Active Status
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
                  <Clock className="w-3.5 h-3.5 text-accent shrink-0" />
                  <span>Timezone: Uzbekistan Standard Time (UTC+5)</span>
                </div>
              </div>
            </Card>

            {/* Developer Notice for updating real URLs */}
            <div className="p-5 rounded-xl bg-surface/50 border border-border text-xs font-sans text-content-secondary space-y-2">
              <div className="flex items-center gap-2 font-mono font-semibold text-content">
                <Sparkles className="w-3.5 h-3.5 text-accent" />
                <span>Editable Contact Config</span>
              </div>
              <p>
                To bind your real email and profile links, update the{' '}
                <code className="font-mono text-accent bg-bg px-1.5 py-0.5 rounded border border-border">
                  contact
                </code>{' '}
                object in{' '}
                <code className="font-mono text-accent bg-bg px-1.5 py-0.5 rounded border border-border">
                  src/data/siteConfig.js
                </code>
                . No fake links were generated.
              </p>
            </div>
          </div>

          {/* Right Column (7 columns on desktop): Contact Channel Cards */}
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
                      <span className="font-heading font-bold text-lg text-content group-hover:text-accent transition-colors duration-fast block mt-0.5">
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
                        <span className="hidden sm:inline">
                          {copied ? 'Copied' : 'Copy'}
                        </span>
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
