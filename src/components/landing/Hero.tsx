"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Visual - placeholder */}
      <div className="absolute inset-0 opacity-30">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract quantum generative art background with flowing nodes and light threads"
          layout="fill"
          objectFit="cover"
          data-ai-hint="quantum generative art dark" 
          priority
          className="filter brightness-75"
        />
      </div>

      {/* Decorative shapes adapted for new theme */}
       <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-primary/5 rounded-full filter blur-3xl animate-pulse opacity-50"></div>
       <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/5 rounded-full filter blur-3xl animate-pulse animation-delay-2000 opacity-50"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center" animationClass="animate-fade-in-up">
          <p className="text-md sm:text-lg font-body text-accent mb-4 tracking-wider">
            FOR THE 1% OF TRADERS READY FOR THE 99% ADVANTAGE.
          </p>
        </AnimatedElement>
        <AnimatedElement className="text-center" delay="delay-100" animationClass="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground">
            QuantumTrader:
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-400">
              Where Quantum Physics Meets Market Profits.
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement className="text-center" delay="delay-200" animationClass="animate-fade-in-up">
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground font-body">
            BlockSmithAI is launching the world's first AI trade analyst powered by quantum computing. See the market moves before they happen.
          </p>
        </AnimatedElement>
        <AnimatedElement className="mt-12 flex flex-col items-center" delay="delay-300" animationClass="animate-fade-in-up">
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-headline bg-gradient-to-r from-primary to-purple-600 hover:from-primary/90 hover:to-purple-600/90 text-primary-foreground shadow-xl hover:shadow-primary/40 transform hover:scale-105 transition-all duration-300 animate-pulse-lilac"
              style={{ backgroundSize: '200% 200%' }}
              onClick={() => {
                const whitelistSection = document.getElementById('whitelist-gate');
                if (whitelistSection) {
                  whitelistSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Whitelisted for Early Access
            </Button>
            <p className="mt-4 text-sm text-muted-foreground font-body">
              Limited spots available. For BSAI holders only.
            </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
