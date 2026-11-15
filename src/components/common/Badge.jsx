import React from 'react';

/**
 * Design System Badge Component
 * Used for technical labels, skill tags, status indicators, and categorization.
 */
export const Badge = ({
  children,
  variant = 'accent',
  size = 'md',
  className = '',
  icon: Icon,
  ...props
}) => {
  const variants = {
    // Electric Orange accent badge with high-contrast text and subtle tinted background
    accent:
      'bg-accent-subtle text-accent border-accent-border',
    // Neutral surface badge
    secondary:
      'bg-surface text-content-secondary border-border',
    // Solid accent badge
    solid:
      'bg-accent text-accent-contrast border-transparent font-semibold shadow-xs',
    // Subtle outline badge
    outline:
      'bg-transparent text-content-secondary border-border hover:border-border-strong',
    // Success badge
    success:
      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
  };

  const sizes = {
    sm: 'text-[11px] px-2 py-0.5 gap-1 rounded font-mono',
    md: 'text-xs px-2.5 py-1 gap-1.5 rounded-md font-mono',
    lg: 'text-sm px-3 py-1.5 gap-2 rounded-lg font-mono',
  };

  return (
    <span
      className={`inline-flex items-center font-medium border transition-colors duration-fast ${
        variants[variant] || variants.accent
      } ${sizes[size] || sizes.md} ${className}`}
      {...props}
    >
      {Icon && <Icon className="w-3.5 h-3.5 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
    </span>
  );
};

export default Badge;
