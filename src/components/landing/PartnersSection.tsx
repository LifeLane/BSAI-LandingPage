
"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import gsap from 'gsap';
import SplitType from 'split-type';

const hooks = [
  "THE FUTURE OF TRADING. REVEALED.",
  "QUANTUM INSIGHTS. UNRIVALED EDGE.",
  "MARKET MASTERY. AT SUBATOMIC SPEED.",
];

const HOOK_DISPLAY_DURATION = 3500; // Time each hook is fully visible
const ANIMATION_DURATION = 800; // Duration of the GSAP scramble animation in ms (0.8s)

export default function PartnersSection() {
  const [currentHookIndex, setCurrentHookIndex] = useState(0);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    // Effect for cycling through hooks
    const cycleHook = () => {
      setCurrentHookIndex((prevIndex) => (prevIndex + 1) % hooks.length);
    };
    const intervalId = setInterval(cycleHook, HOOK_DISPLAY_DURATION + ANIMATION_DURATION);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    // Effect for animating the text when currentHookIndex changes
    if (h2Ref.current) {
      if (splitRef.current) {
        splitRef.current.revert(); // Clean up previous split
      }
      
      // Set new text content before splitting for animation
      h2Ref.current.textContent = hooks[currentHookIndex]; 

      splitRef.current = new SplitType(h2Ref.current, { types: 'chars' });
      const chars = splitRef.current.chars;

      if (chars && chars.length > 0) {
        gsap.from(chars, {
          duration: ANIMATION_DURATION / 1000, // Convert ms to seconds for GSAP
          textContent: () => "!<>-_\\/[]{}—=+*^?#".charAt(Math.floor(Math.random() * "!<>-_\\/[]{}—=+*^?#".length)),
          opacity: 0,
          y: 15,
          filter: 'blur(3px)',
          ease: 'power3.out',
          stagger: {
            each: 0.04,
            from: 'random',
          },
          onComplete: () => {
            // Ensure final text is accurately set, especially if animations are rapid or complex
            if (h2Ref.current) {
              h2Ref.current.textContent = hooks[currentHookIndex];
            }
          }
        });
      }
    }
  }, [currentHookIndex]);

  return (
    <AnimatedElement animationClass="animate-fade-in-up">
      <section id="animated-hooks-bar" className="relative py-12 md:py-16 border-y border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <HeroParticleAnimation />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-center overflow-hidden relative z-10">
          <h2
            ref={h2Ref}
            className={cn(
              "text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-center text-primary tracking-tight drop-shadow-[0_0_4px_hsl(var(--primary))]"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {/* Initial text rendered here, will be animated by useEffect */}
            {hooks[currentHookIndex]}
          </h2>
        </div>
      </section>
    </AnimatedElement>
  );
}
