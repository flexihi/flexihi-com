'use client';

import { memo } from 'react';

interface HamburgerIconProps {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerIcon = memo<HamburgerIconProps>(function HamburgerIcon({ 
  isOpen, 
  onClick 
}) {
  return (
    <button
      type="button"
      className="md:hidden p-2 text-text-primary hover:text-secondary transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded-md touch-target"
      onClick={onClick}
      aria-label={isOpen ? "Close menu" : "Open menu"}
      aria-expanded={isOpen}
    >
      <div className="w-6 h-6 sm:w-7 sm:h-7 flex flex-col justify-center items-center">
        {/* Top line */}
        <span
          className={`
            block w-6 sm:w-7 h-0.5 bg-current transition-all duration-300 ease-out
            ${isOpen 
              ? 'rotate-45 translate-y-1.5' 
              : 'translate-y-0'
            }
          `}
        />
        
        {/* Middle line */}
        <span
          className={`
            block w-6 sm:w-7 h-0.5 bg-current transition-all duration-200 ease-out my-1
            ${isOpen ? 'opacity-0' : 'opacity-100'}
          `}
        />
        
        {/* Bottom line */}
        <span
          className={`
            block w-6 sm:w-7 h-0.5 bg-current transition-all duration-300 ease-out
            ${isOpen 
              ? '-rotate-45 -translate-y-1.5' 
              : 'translate-y-0'
            }
          `}
        />
      </div>
    </button>
  );
});

export default HamburgerIcon;