
"use client";

import type React from 'react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import AnimatedElement from './AnimatedElement';

const hooks = [
  "THE FUTURE OF TRADING. REVEALED.",
  "QUANTUM INSIGHTS. UNRIVALED EDGE.",
  "MARKET MASTERY. AT SUBATOMIC SPEED.",
];

const HOOK_DISPLAY_DURATION = 3500; // 3.5 seconds visible
const FADE_TRANSITION_DURATION = 500; // 0.5 seconds for fade in/out

export default function PartnersSection() { // Retaining original export name
  const [currentHookIndex, setCurrentHookIndex] = useState(0);
  const [textOpacity, setTextOpacity] = useState(1); // Start fully visible

  useEffect(() => {
    const cycleHook = () => {
      setTextOpacity(0); // Start fade out

      setTimeout(() => {
        setCurrentHookIndex((prevIndex) => (prevIndex + 1) % hooks.length);
        setTextOpacity(1); // Start fade in of new text
      }, FADE_TRANSITION_DURATION);
    };

    // Set an interval to cycle through hooks
    const intervalId = setInterval(cycleHook, HOOK_DISPLAY_DURATION + FADE_TRANSITION_DURATION);

    // Clear interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <AnimatedElement animationClass="animate-fade-in-up"> {/* For overall section appearance */}
      <section id="animated-hooks-bar" className="py-12 md:py-16 bg-card border-y border-border/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-24 flex items-center justify-center overflow-hidden"> {/* Increased height for better text presentation */}
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
