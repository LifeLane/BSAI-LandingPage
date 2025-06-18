
"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import gsap from 'gsap';
import SplitType from 'split-type';

const hooks = [
  "🎯 PUBLIC TOKEN SALE BEGINS SOON",
  "🔓 EARLY ACCESS FOR BSAI BELIEVERS",
  "🔥 TOP SIGNAL PREDICTIVE AI, ON-CHAIN, IN REAL-TIME",
];

const HOOK_DISPLAY_DURATION = 3500; 
const ANIMATION_DURATION = 800; 

export default function PartnersSection() {
  const [currentHookIndex, setCurrentHookIndex] = useState(0);
  const h2Ref = useRef<HTMLHeadingElement>(null);
  const splitRef = useRef<SplitType | null>(null);

  useEffect(() => {
    const cycleHook = () => {
      setCurrentHookIndex((prevIndex) => (prevIndex + 1) % hooks.length);
    };
    const intervalId = setInterval(cycleHook, HOOK_DISPLAY_DURATION + ANIMATION_DURATION);
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (h2Ref.current) {
      if (splitRef.current) {
        splitRef.current.revert(); 
      }
      
      h2Ref.current.textContent = hooks[currentHookIndex]; 

      splitRef.current = new SplitType(h2Ref.current, { types: 'chars' });
      const chars = splitRef.current.chars;

      if (chars && chars.length > 0) {
        gsap.from(chars, {
          duration: ANIMATION_DURATION / 1000, 
          textContent: () => "!<>-_\\/[]{}—=+*^?#".charAt(Math.floor(Math.random() * "!<>-_\\/[]{}—=+*^?#".length)),
          opacity: 0,
          y: 20, // Increased y for more dramatic entry
          filter: 'blur(4px)', // Increased blur
          ease: 'power3.out',
          stagger: {
            each: 0.05, // Slightly slower stagger
            from: 'random',
          },
          onComplete: () => {
            if (h2Ref.current) {
              h2Ref.current.textContent = hooks[currentHookIndex];
            }
          }
        });
      }
    }
     return () => {
      if (splitRef.current) {
        splitRef.current.revert();
      }
      gsap.killTweensOf(h2Ref.current);
    };
  }, [currentHookIndex]);

  return (
    <AnimatedElement animationClass="animate-fade-in-up">
      <section id="animated-hooks-bar" className="relative py-10 md:py-12 border-y border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <HeroParticleAnimation />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-20 md:h-24 flex items-center justify-center overflow-hidden relative z-10">
          <h2
            ref={h2Ref}
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-headline text-center text-primary tracking-tight drop-shadow-[0_0_5px_hsl(var(--primary))]"
            )}
            aria-live="polite"
            aria-atomic="true"
          >
            {hooks[currentHookIndex]}
          </h2>
        </div>
      </section>
    </AnimatedElement>
  );
}
