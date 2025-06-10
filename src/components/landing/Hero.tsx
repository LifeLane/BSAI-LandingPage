
"use client";

import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  return (
    <section id="hero" className="relative bg-background pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden min-h-screen flex items-center justify-center">
      {/* Background Visual - Simplified SVG Animation Placeholder */}
      <div
        className="absolute inset-0 opacity-30 filter brightness-75"
        data-ai-hint="live generative quantum sphere mouse-interactive"
      >
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          <defs>
            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          
          {/* Lilac Nodes */}
          <circle cx="100" cy="100" r="3" fill="hsl(var(--primary))" className="animate-node-pulse-lilac opacity-70" />
          <circle cx="150" cy="70" r="2.5" fill="hsl(var(--primary))" className="animate-node-pulse-lilac animation-delay-300 opacity-60" />
          <circle cx="90" cy="150" r="2" fill="hsl(var(--primary))" className="animate-node-pulse-lilac animation-delay-600 opacity-50" />

          {/* Mint Nodes */}
          <circle cx="300" cy="100" r="3" fill="hsl(var(--accent))" className="animate-node-pulse-mint opacity-70" />
          <circle cx="250" cy="130" r="2.5" fill="hsl(var(--accent))" className="animate-node-pulse-mint animation-delay-200 opacity-60" />
          <circle cx="310" cy="50" r="2" fill="hsl(var(--accent))" className="animate-node-pulse-mint animation-delay-500 opacity-50" />
          
          {/* Connecting Threads - Lilac */}
          <line x1="100" y1="100" x2="150" y2="70" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-thread-draw opacity-40" />
          <line x1="100" y1="100" x2="90" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.5" className="animate-thread-draw animation-delay-400 opacity-30" />
          <line x1="150" y1="70" x2="90" y2="150" stroke="hsl(var(--primary))" strokeWidth="0.3" className="animate-thread-draw animation-delay-800 opacity-20" />

          {/* Connecting Threads - Mint */}
          <line x1="300" y1="100" x2="250" y2="130" stroke="hsl(var(--accent))" strokeWidth="0.5" className="animate-thread-draw animation-delay-100 opacity-40" />
          <line x1="300" y1="100" x2="310" y2="50" stroke="hsl(var(--accent))" strokeWidth="0.5" className="animate-thread-draw animation-delay-500 opacity-30" />
          <line x1="250" y1="130" x2="310" y2="50" stroke="hsl(var(--accent))" strokeWidth="0.3" className="animate-thread-draw animation-delay-900 opacity-20" />

          {/* Cross Connections */}
          <line x1="100" y1="100" x2="300" y2="100" stroke="hsl(var(--muted))" strokeWidth="0.2" className="animate-thread-draw animation-delay-1200 opacity-10" />
          <line x1="150" y1="70" x2="250" y2="130" stroke="hsl(var(--muted))" strokeWidth="0.2" className="animate-thread-draw animation-delay-1500 opacity-10" />
        </svg>
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

