
"use client";

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Visual - placeholder */}
      <div className="absolute inset-0 opacity-50">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Abstract quantum wave patterns or neural network"
          layout="fill"
          objectFit="cover"
          data-ai-hint="quantum data flow"
          priority
          className="filter brightness-50"
        />
      </div>

      {/* Decorative shapes from original hero, adapted for dark theme */}
       <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-primary/10 rounded-full filter blur-3xl animate-pulse opacity-30"></div>
       <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full filter blur-3xl animate-pulse animation-delay-2000 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center">
          <p className="text-md sm:text-lg font-body text-accent mb-4">
            For the 1% of Traders Ready for the 99% Advantage.
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground">
            QuantumTrader:
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Where Quantum Physics Meets Market Profits.
            </span>
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground font-body">
            BlocksmithAI is launching the world's first AI trade analyst powered by quantum computing. See the market moves before they happen.
          </p>
          <div className="mt-12 flex flex-col items-center">
            <Button
              size="lg"
              className="px-10 py-6 text-lg font-headline bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl transform hover:scale-105 transition-transform duration-300"
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
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
