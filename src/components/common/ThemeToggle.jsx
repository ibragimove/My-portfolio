import React from 'react';
import { useTheme } from '../../hooks';
import { Sun, Moon } from 'lucide-react';

/**
 * Accessible Dark / Light Theme Toggle Button
 */
export const ThemeToggle = ({ className = '', size = 'md' }) => {
  const { theme, isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
      className={`relative inline-flex items-center justify-center rounded-lg border border-border bg-surface text-content hover:bg-surface-hover hover:border-border-strong hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg transition-colors duration-normal ${
        size === 'sm' ? 'w-8 h-8 p-1.5' : 'w-9 h-9 p-2'
      } ${className}`}
    >
      <span className="sr-only">Toggle theme</span>
      {isDark ? (
        <Sun className="w-4 h-4 text-accent transition-transform duration-normal motion-safe:hover:rotate-45" />
      ) : (
        <Moon className="w-4 h-4 text-accent transition-transform duration-normal motion-safe:hover:-rotate-12" />
      )}
    </button>
  );
};

export default ThemeToggle;
