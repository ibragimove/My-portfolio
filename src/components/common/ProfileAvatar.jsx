import React, { useState } from 'react';
import { User, Code2, Sparkles } from 'lucide-react';

// Dynamic Vite asset glob — safely resolves avatar if it exists without crashing build if absent
const avatarModules = import.meta.glob(
  '/src/assets/images/avatar.{jpg,jpeg,png,webp,svg}',
  { eager: true }
);
const detectedAvatar = Object.values(avatarModules)[0]?.default || null;

/**
 * Hero Profile Avatar Component
 * - Reads from src/assets/images/avatar.jpg
 * - Gracefully falls back to an elegant developer placeholder if file is absent
 * - Electric Orange accent ring with ambient glow
 * - Circular frame with object-fit: cover
 * - Smooth desktop & mobile positioning
 */
export const ProfileAvatar = ({ className = '' }) => {
  // If no avatar module found at compile time, or if image fails to load at runtime
  const [imageError, setImageError] = useState(!detectedAvatar);
  const [imageLoaded, setImageLoaded] = useState(false);

  // Fallback to static URL path in case file was placed in src/assets/images/avatar.jpg after build
  const imageSrc = detectedAvatar || '/src/assets/images/avatar.jpg';

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Ambient Electric Orange Glow Backdrop */}
      <div
        className="absolute -inset-2 sm:-inset-3 rounded-full bg-gradient-to-tr from-accent/30 via-accent/15 to-transparent blur-xl opacity-75 motion-safe:animate-pulse"
        aria-hidden="true"
        style={{ animationDuration: '4s' }}
      />

      {/* Distinctive Electric Orange Frame */}
      <div className="relative w-44 h-44 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-72 lg:h-72 rounded-full p-1.5 bg-gradient-to-b from-accent via-accent/70 to-accent/30 shadow-2xl shadow-accent/20">
        {/* Inner Border Ring */}
        <div className="w-full h-full rounded-full overflow-hidden bg-surface border-2 border-border/80 flex items-center justify-center relative">
          {!imageError ? (
            <img
              src={imageSrc}
              alt="Profile photograph of Computer Science student"
              className={`w-full h-full object-cover transition-opacity duration-normal ${
                imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
              onLoad={() => setImageLoaded(true)}
              onError={() => setImageError(true)}
            />
          ) : null}

          {/* Elegant Placeholder (rendered when avatar.jpg is absent or fails) */}
          {(imageError || !imageLoaded) && (
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-surface via-surface-hover to-accent-subtle p-6 text-center select-none ${
                imageError ? 'opacity-100' : 'opacity-0'
              }`}
            >
              {/* Subtle Tech Pattern inside placeholder */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage:
                    'radial-gradient(var(--color-accent) 1px, transparent 1px)',
                  backgroundSize: '16px 16px',
                }}
                aria-hidden="true"
              />

              {/* Developer Monogram / User Icon */}
              <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-accent-subtle border border-accent-border flex items-center justify-center text-accent mb-3 shadow-inner">
                <User className="w-8 h-8 sm:w-10 sm:h-10 text-accent stroke-[1.75]" />
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-accent flex items-center justify-center">
                  <Sparkles className="w-2.5 h-2.5 text-accent-contrast" />
                </span>
              </div>

              {/* Placeholder text indicator */}
              <div className="relative z-10">
                <span className="font-heading font-bold text-xs sm:text-sm text-content block tracking-tight">
                  avatar.jpg
                </span>
                <span className="font-mono text-[10px] text-content-secondary block mt-0.5">
                  Drop image in assets
                </span>
              </div>
            </div>
          )}
        </div>

        {/* Floating Status Badge (Uzbekistan / CS Focus) */}
        <div className="absolute -bottom-2 sm:bottom-1 right-2 sm:right-4 bg-surface/95 backdrop-blur-md border border-accent-border px-3 py-1 rounded-full shadow-lg flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="font-mono text-xs font-semibold text-content">
            Elbek · UZ
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
