import React from 'react';

/**
 * Design System Card Component
 * Surface elevation container with consistent spacing, border radius, and hover interactions.
 */
export const Card = ({
  children,
  className = '',
  hoverEffect = false,
  accentBorder = false,
  ...props
}) => {
  return (
    <div
      className={`bg-surface border rounded-xl p-6 transition-all duration-normal ease-smooth ${
        accentBorder ? 'border-accent-border' : 'border-border'
      } ${
        hoverEffect
          ? 'hover:border-accent-border hover:shadow-card hover:shadow-accent-glow motion-safe:hover:-translate-y-1'
          : ''
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader = ({ children, className = '', ...props }) => (
  <div className={`mb-4 flex flex-col gap-1.5 ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle = ({ children, className = '', ...props }) => (
  <h3 className={`text-lg sm:text-xl font-bold font-heading text-content tracking-tight ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription = ({ children, className = '', ...props }) => (
  <p className={`text-sm text-content-secondary leading-relaxed font-sans ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent = ({ children, className = '', ...props }) => (
  <div className={`text-sm text-content-secondary ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter = ({ children, className = '', ...props }) => (
  <div className={`mt-6 pt-4 border-t border-border flex items-center justify-between ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
