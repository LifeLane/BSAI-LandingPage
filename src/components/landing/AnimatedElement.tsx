"use client";

import type React from 'react';
import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedElementProps {
  children: React.ReactNode;
  className?: string;
  animationClass?: string;
  delay?: string; // e.g., 'delay-200'
  threshold?: number;
}

const AnimatedElement: React.FC<AnimatedElementProps> = ({
  children,
  className,
  animationClass = 'animate-fade-in-up',
  delay = '',
  threshold = 0.1,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return (
    <div
      ref={ref}
      className={cn(
        'opacity-0 transition-opacity duration-500',
        isVisible && `${animationClass} ${delay} opacity-100`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimatedElement;
