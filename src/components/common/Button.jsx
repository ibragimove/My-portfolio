import React from 'react';

/**
 * Design System Button Component
 * Supports Midnight × Electric Orange color palette, high-contrast readability,
 * multiple variants, sizes, icon slots, and reduced-motion safety.
 */
export const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  disabled = false,
  type = 'button',
  ...props
}) => {
  const baseStyles =
    'inline-flex items-center justify-center font-sans font-medium transition-all duration-normal ease-smooth focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg disabled:opacity-50 disabled:cursor-not-allowed disabled:pointer-events-none select-none';

  const variants = {
    // Primary: Strong electric orange with high-contrast text
    primary:
      'bg-accent text-accent-contrast font-semibold hover:bg-accent-hover active:bg-accent-hover shadow-sm shadow-accent/20 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.98]',
    // Secondary: Elegant neutral surface
    secondary:
      'bg-surface text-content border border-border hover:bg-surface-hover hover:border-border-strong active:bg-surface-active motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.98]',
    // Outline: Accent border & text with subtle orange tint on hover
    outline:
      'border border-accent-border text-accent bg-transparent hover:bg-accent-subtle hover:border-accent active:bg-accent-subtle/80 motion-safe:hover:-translate-y-0.5 motion-safe:active:scale-[0.98]',
    // Ghost: Subtle transparent button
    ghost:
      'text-content-secondary hover:text-content hover:bg-surface-hover active:bg-surface-active',
  };

  const sizes = {
    sm: 'text-xs px-3 py-1.5 gap-1.5 rounded-md font-medium',
    md: 'text-sm px-4 py-2 gap-2 rounded-lg font-medium',
    lg: 'text-base px-5 py-2.5 gap-2.5 rounded-lg font-semibold',
  };

  return (
    <button
      type={type}
      className={`${baseStyles} ${variants[variant] || variants.primary} ${
        sizes[size] || sizes.md
      } ${className}`}
      disabled={disabled}
      {...props}
    >
      {LeftIcon && <LeftIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
      <span>{children}</span>
      {RightIcon && <RightIcon className="w-4 h-4 shrink-0" aria-hidden="true" />}
    </button>
  );
};

export default Button;
