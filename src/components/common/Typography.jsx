import React from 'react';

/**
 * Reusable Heading component using Space Grotesk typography
 */
export const Heading = ({
  as: Component = 'h2',
  level = 2,
  children,
  className = '',
  ...props
}) => {
  const sizes = {
    1: 'text-3xl sm:text-4xl lg:text-5xl font-bold font-heading tracking-tight text-content',
    2: 'text-2xl sm:text-3xl font-bold font-heading tracking-tight text-content',
    3: 'text-xl sm:text-2xl font-semibold font-heading tracking-tight text-content',
    4: 'text-lg sm:text-xl font-semibold font-heading tracking-tight text-content',
    5: 'text-base font-semibold font-heading text-content',
    6: 'text-sm font-semibold font-heading uppercase tracking-wider text-content-secondary',
  };

  const ResolvedTag = Component || `h${level}`;

  return (
    <ResolvedTag
      className={`${sizes[level] || sizes[2]} ${className}`}
      {...props}
    >
      {children}
    </ResolvedTag>
  );
};

/**
 * Reusable Text component using Inter typography
 */
export const Text = ({
  as: Component = 'p',
  variant = 'secondary',
  size = 'base',
  children,
  className = '',
  ...props
}) => {
  const variants = {
    primary: 'text-content',
    secondary: 'text-content-secondary',
    muted: 'text-content-muted',
    accent: 'text-accent font-medium',
  };

  const sizes = {
    xs: 'text-xs leading-normal',
    sm: 'text-sm leading-relaxed',
    base: 'text-base leading-relaxed',
    lg: 'text-lg leading-relaxed',
    xl: 'text-xl leading-relaxed',
  };

  return (
    <Component
      className={`font-sans ${variants[variant] || variants.secondary} ${
        sizes[size] || sizes.base
      } ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

/**
 * Technical / Mono label component using JetBrains Mono typography
 */
export const MonoLabel = ({
  children,
  className = '',
  variant = 'default',
  ...props
}) => {
  const variants = {
    default: 'text-content-secondary bg-surface border-border',
    accent: 'text-accent bg-accent-subtle border-accent-border',
    muted: 'text-content-muted bg-surface/50 border-border-subtle',
  };

  return (
    <span
      className={`font-mono text-xs px-2 py-0.5 rounded border inline-flex items-center gap-1.5 transition-colors duration-fast ${
        variants[variant] || variants.default
      } ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};

export default { Heading, Text, MonoLabel };
