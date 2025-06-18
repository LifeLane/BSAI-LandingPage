
import type React from 'react';
import { cn } from '@/lib/utils';

interface TerminalCardProps {
  title: string;
  titleBarContent?: React.ReactNode; // For additional elements in title bar like [ACCESS GRANTED]
  children: React.ReactNode;
  className?: string;
  contentClassName?: string;
  titleClassName?: string;
  footerContent?: React.ReactNode;
  titleIcon?: React.ReactNode;
}

const TerminalCard: React.FC<TerminalCardProps> = ({
  title,
  titleBarContent,
  children,
  className,
  contentClassName,
  titleClassName,
  footerContent,
  titleIcon,
}) => {
  return (
    <div
      className={cn(
        'border border-primary/60 bg-transparent backdrop-blur-[2px] shadow-neon-primary rounded-sm overflow-hidden',
        'flex flex-col', // Ensure flex column layout
        className
      )}
    >
      {/* Top Border Accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
      
      <div className={cn(
        'terminal-title-bar flex items-center justify-between text-sm font-terminal-heading text-primary px-3 py-1.5 border-b border-primary/40',
        titleClassName
      )}>
        <div className="flex items-center gap-2">
          {titleIcon}
          <span>┌─[ {title.toUpperCase()} ]</span>
        </div>
        {titleBarContent && <span className="text-xs text-accent-green">{titleBarContent}</span>}
      </div>
      
      {/* Left Border Accent */}
      <div className="flex flex-grow min-h-0"> {/* Ensure content area can grow */}
        <div className="w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>
        
        <div className={cn('terminal-content flex-grow p-3 sm:p-4 text-sm font-terminal-body text-foreground/90 leading-relaxed overflow-y-auto', contentClassName)}>
          {children}
        </div>
        
        {/* Right Border Accent */}
        <div className="w-[2px] bg-gradient-to-b from-transparent via-primary to-transparent opacity-50"></div>
      </div>

      {footerContent && (
        <div className={cn('terminal-footer-bar text-xs font-terminal-code text-primary/70 px-3 py-1 border-t border-primary/40')}>
          {footerContent}
        </div>
      )}
       {/* Bottom Border Accent */}
      <div className="h-[2px] bg-gradient-to-r from-transparent via-primary to-transparent opacity-75"></div>
      <div className="terminal-bottom-frame text-primary/80 font-terminal-code px-2 py-0.5 text-xs">
        └───────────────────────────────────────────────────────────┘
      </div>
    </div>
  );
};

export default TerminalCard;
