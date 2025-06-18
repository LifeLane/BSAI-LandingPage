
"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import gsap from 'gsap';
import SplitType from 'split-type';

const hooks = [
  "🎯 PUBLIC TOKEN SALE BEGINS SOON",
  "🔓 EARLY ACCESS FOR BSAI BELIEVERS",
  "🔥 TOP SIGNAL PREDICTIVE AI, ON-CHAIN, IN REAL-TIME",
];

const HOOK_DISPLAY_DURATION = 4000; 
const ANIMATION_DURATION = 1000;

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

      splitRef.current = new SplitType(h2Ref.current, { types: 'chars,words' });
      const chars = splitRef.current.chars;

      if (chars && chars.length > 0) {
        gsap.from(chars, {
          duration: ANIMATION_DURATION / 1000,
          textContent: () => "!<>-_\\/[]{}—=+*^?#$()".charAt(Math.floor(Math.random() * "!<>-_\\/[]{}—=+*^?#$()".length)),
          opacity: 0,
          filter: 'blur(2px)',
          ease: 'power2.inOut',
          stagger: {
            each: 0.04,
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
      if (h2Ref.current) {
        gsap.killTweensOf(h2Ref.current.childNodes); 
      }
    };
  }, [currentHookIndex]);

  return (
    <AnimatedElement animationClass="animate-fade-in-up">
      <section id="animated-hooks-bar" className="relative py-6 md:py-8 border-y border-primary/40 bg-transparent overflow-hidden">
        {/* Removed local HeroParticleAnimation */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 md:h-20 flex items-center justify-center overflow-hidden relative z-10">
          <h2
            ref={h2Ref}
            className={cn(
              "text-xl sm:text-2xl md:text-3xl font-bold font-terminal-heading text-center text-primary tracking-wider uppercase",
              "drop-shadow-[0_0_8px_hsl(var(--primary)/0.7)]"
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
