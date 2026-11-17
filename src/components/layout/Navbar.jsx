import React, { useState, useEffect, useRef } from 'react';
import Container from './Container';
import ThemeToggle from '../common/ThemeToggle';
import { siteConfig } from '../../data';
import {
  Menu,
  X,
  MapPin,
  Github,
  Linkedin,
  ArrowRight,
  Code2,
} from 'lucide-react';

/**
 * Responsive Navigation Bar
 * - Sticky header with glassmorphism backdrop blur
 * - Brand wordmark & initials
 * - Desktop navigation links + Theme Toggle
 * - Mobile responsive drawer with accessible keyboard & click-outside handling
 */
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        setIsOpen(false);
        menuButtonRef.current?.focus();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // Close mobile menu if window resizes to desktop breakpoint
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-surface/85 border-b border-border transition-colors duration-normal">
      <Container className="h-16 flex items-center justify-between">
        {/* Personal Wordmark & Initials */}
        <a
          href="#"
          className="flex items-center gap-2.5 font-heading font-bold text-lg text-content hover:text-accent transition-colors duration-fast group"
          aria-label={`${siteConfig.wordmark} - Home`}
        >
          <div className="w-9 h-9 rounded-lg bg-accent-subtle border border-accent-border flex items-center justify-center text-accent group-hover:scale-105 motion-safe:transition-transform">
            <span className="font-mono text-sm font-bold tracking-tight">
              {siteConfig.initials}
            </span>
          </div>
          <span className="tracking-tight text-content font-heading font-bold">
            Elbek<span className="text-accent">.dev</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-1 lg:gap-2"
          aria-label="Main Navigation"
        >
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="px-3 py-1.5 rounded-lg text-sm font-medium text-content-secondary hover:text-content hover:bg-surface-hover transition-colors duration-fast focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop Right Actions: Theme Toggle & Contact Pill */}
        <div className="hidden md:flex items-center gap-3">
          <ThemeToggle />
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-sans bg-accent text-accent-contrast hover:bg-accent-hover shadow-xs transition-colors duration-fast motion-safe:hover:-translate-y-0.5"
          >
            <span>Get in touch</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Header Controls: Theme Toggle & Hamburger */}
        <div className="flex md:hidden items-center gap-2">
          <ThemeToggle size="sm" />
          <button
            ref={menuButtonRef}
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            className="w-9 h-9 rounded-lg border border-border bg-surface text-content hover:bg-surface-hover hover:text-accent flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </Container>

      {/* Mobile Drawer Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 top-16 bg-bg/80 backdrop-blur-sm z-40 md:hidden animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Drawer */}
      <div
        id="mobile-navigation"
        ref={mobileMenuRef}
        className={`fixed top-16 inset-x-0 bg-surface border-b border-border shadow-2xl z-50 md:hidden transition-all duration-normal ease-smooth overflow-y-auto max-h-[calc(100dvh-4rem)] ${
          isOpen
            ? 'opacity-100 translate-y-0 pointer-events-auto'
            : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        <div className="px-6 py-6 space-y-6">
          {/* Mobile Links */}
          <nav className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-between px-3.5 py-2.5 rounded-lg text-base font-heading font-medium text-content hover:text-accent hover:bg-surface-hover transition-colors"
              >
                <span>{item.label}</span>
                <ArrowRight className="w-4 h-4 text-content-muted" />
              </a>
            ))}
          </nav>

          {/* Location & Status in Mobile Drawer */}
          <div className="pt-4 border-t border-border flex items-center justify-between text-xs text-content-secondary font-mono">
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-accent" />
              {siteConfig.location}
            </span>
            <span className="flex items-center gap-1.5 text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Open to work
            </span>
          </div>

          {/* Social Links & Mobile Action */}
          <div className="pt-2 flex items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-surface-hover text-content hover:text-accent flex items-center justify-center transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-surface-hover text-content hover:text-accent flex items-center justify-center transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="flex-1 py-2 px-4 rounded-lg text-center text-xs font-semibold bg-accent text-accent-contrast hover:bg-accent-hover shadow-xs transition-colors"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
