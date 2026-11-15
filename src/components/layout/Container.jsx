import React from 'react';

/**
 * Design System Container Component
 * Establishes consistent horizontal rhythm and responsive max-width boundaries.
 */
export const Container = ({
  children,
  size = 'lg',
  className = '',
  as: Component = 'div',
  ...props
}) => {
  const sizes = {
    sm: 'max-w-3xl',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  };

  return (
    <Component
      className={`w-full mx-auto px-4 sm:px-6 lg:px-8 ${sizes[size] || sizes.lg} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};

export default Container;
