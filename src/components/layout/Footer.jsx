import React, { useState, useEffect } from 'react';
import Container from './Container';
import { siteConfig } from '../../data';
import {
  ArrowUp,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Terminal,
  Heart,
} from 'lucide-react';

/**
 * Global Footer Component
 * - Personal branding & dynamic copyright year
 * - Navigation and social link shortcuts
 * - Integrated Back-To-Top button (footer + floating scroll-aware trigger)
 * - Accessible external link attributes
 */
export const Footer = () => {
  const currentYear = new Date().getFullYear();
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Scroll listener to toggle floating back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      <footer className="border-t border-border bg-surface/70 mt-auto transition-colors duration-normal">
        <Container className="py-12 sm:py-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
            {/* Column 1: Brand & Bio (6 cols on desktop) */}
            <div className="md:col-span-6 space-y-4">
              <a
                href="#"
                onClick={scrollToTop}
                className="flex items-center gap-2.5 font-heading font-bold text-lg text-content hover:text-accent transition-colors duration-fast group inline-flex"
                aria-label="Back to top"
              >
                <div className="w-8 h-8 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent group-hover:scale-105 motion-safe:transition-transform">
                  <span className="font-mono text-xs font-bold">
                    {siteConfig.initials}
                  </span>
                </div>
                <span className="tracking-tight text-content font-heading font-bold">
                  {siteConfig.wordmark.slice(0, 2)}
                  <span className="text-accent">
                    {siteConfig.wordmark.slice(2)}
                  </span>
                </span>
              </a>

              <p className="font-sans text-xs sm:text-sm text-content-secondary leading-relaxed max-w-md">
                Computer Science student from Uzbekistan dedicated to building
                practical software, exploring artificial intelligence, and
                solving meaningful problems.
              </p>

              <div className="flex items-center gap-2 text-xs font-mono text-content-muted">
                <MapPin className="w-3.5 h-3.5 text-accent" />
                <span>{siteConfig.location}</span>
              </div>
            </div>

            {/* Column 2: Navigation Shortcuts (3 cols on desktop) */}
            <div className="md:col-span-3 space-y-3">
              <span className="font-mono text-xs font-semibold text-content uppercase tracking-wider block">
                Navigation
              </span>
              <ul className="space-y-2 text-xs font-sans">
                {siteConfig.navLinks.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      className="text-content-secondary hover:text-accent transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3: Connect & Social Channels (3 cols on desktop) */}
            <div className="md:col-span-3 space-y-3">
              <span className="font-mono text-xs font-semibold text-content uppercase tracking-wider block">
                Connect
              </span>
              <div className="flex items-center gap-2.5">
                <a
                  href={siteConfig.contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-hover text-content hover:text-accent hover:border-accent flex items-center justify-center transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-4 h-4" />
                </a>

                <a
                  href={siteConfig.contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-hover text-content hover:text-accent hover:border-accent flex items-center justify-center transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>

                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="w-9 h-9 rounded-lg border border-border bg-surface hover:bg-surface-hover text-content hover:text-accent hover:border-accent flex items-center justify-center transition-colors"
                  aria-label="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              <p className="font-mono text-[11px] text-content-muted pt-2">
                Replace placeholders in data/siteConfig.js
              </p>
            </div>
          </div>

          {/* Bottom Bar: Copyright & Back-to-Top Button */}
          <div className="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-content-secondary">
            <p>
              © {currentYear} {siteConfig.author} ·{' '}
              <span className="text-accent font-semibold">
                Midnight × Electric Orange
              </span>
            </p>

            <div className="flex items-center gap-4">
              <span className="text-content-muted hidden md:inline">
                Built with React, Vite & Tailwind CSS
              </span>

              <button
                type="button"
                onClick={scrollToTop}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-surface hover:bg-surface-hover text-content hover:text-accent hover:border-accent transition-colors"
                aria-label="Scroll back to top of the page"
              >
                <span>Back to top</span>
                <ArrowUp className="w-3.5 h-3.5 text-accent" />
              </button>
            </div>
          </div>
        </Container>
      </footer>

      {/* Floating Scroll-Aware Back-To-Top Button */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-6 right-6 z-40 w-11 h-11 rounded-full bg-accent text-accent-contrast shadow-lg shadow-accent/20 flex items-center justify-center hover:bg-accent-hover transition-all duration-normal ease-smooth motion-safe:hover:-translate-y-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg ${
          showScrollTop
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 translate-y-4 pointer-events-none'
        }`}
      >
        <ArrowUp className="w-5 h-5 stroke-[2.25]" />
      </button>
    </>
  );
};

export default Footer;
