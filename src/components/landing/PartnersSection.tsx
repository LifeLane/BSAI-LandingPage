
"use client";

import type React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';

const hooks = [
  "THE FUTURE OF TRADING. REVEALED.",
  "QUANTUM INSIGHTS. UNRIVALED EDGE.",
  "MARKET MASTERY. AT SUBATOMIC SPEED.",
];

const HOOK_DISPLAY_DURATION = 3500;
const FADE_TRANSITION_DURATION = 500;

export default function PartnersSection() {
  const [currentHookIndex, setCurrentHookIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1);

  useEffect(() => {
    const cycleHook = () => {
      setTextOpacity(0);
      setTimeout(() => {
        setCurrentHookIndex((prevIndex) => (prevIndex + 1) % hooks.length);
        setTextOpacity(1);
      }, FADE_TRANSITION_DURATION);
    };
    const intervalId = setInterval(cycleHook, HOOK_DISPLAY_DURATION + FADE_TRANSITION_DURATION);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatedElement animationClass="animate-fade-in-up">
      <section id="animated-hooks-bar" className="relative py-12 md:py-16 border-y border-border/50 overflow-hidden">
        <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
          <HeroParticleAnimation />
        </div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-center overflow-hidden relative z-10">
          <h2
            className={cn(
              "text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-center text-primary tracking-tight",
              "transition-opacity ease-in-out",
            )}
            style={{
              opacity: textOpacity,
              transitionDuration: `${FADE_TRANSITION_DURATION}ms`,
            }}
          >
            {hooks[currentHookIndex]}
          </h2>
        </div>
      </section>
    </AnimatedElement>
  );
}
