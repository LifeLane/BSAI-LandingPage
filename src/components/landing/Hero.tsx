
"use client";

import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Visual - Placeholder for Generative Animation */}
      <div
        className="absolute inset-0 opacity-20 filter brightness-50"
        data-ai-hint="live generative quantum sphere mouse-interactive"
      >
        <div className="w-full h-full bg-transparent flex items-center justify-center">
          <p className="text-muted-foreground p-8 text-center text-lg max-w-3xl">
            [Live Generative Background Animation: Slowly rotating, complex sphere of interconnected nodes and glowing threads of light (in Quantum Lilac and Neon Mint). Subtly shifts perspective with mouse movement. Tech: Three.js/WebGL]
          </p>
        </div>
      </div>

      {/* Decorative shapes adapted for new theme */}
       <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-primary/5 rounded-full filter blur-3xl animate-quantum-orb-primary opacity-30"></div>
       <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/5 rounded-full filter blur-3xl animate-quantum-orb-accent opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center" animationClass="animate-fade-in-up">
          <p className="text-md sm:text-lg font-body text-accent mb-4 tracking-wider uppercase">
            For the 1% of Traders Ready for the 99% Advantage.
          </p>
        </AnimatedElement>
        <AnimatedElement className="text-center" delay="delay-100" animationClass="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground">
            QuantumTrader:
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
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
              className="px-10 py-6 text-lg font-headline bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 animate-pulse-lilac"
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
