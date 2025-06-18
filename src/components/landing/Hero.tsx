
"use client";

import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Input } from '@/components/ui/input'; // Using ShadCN Input
import { useToast } from "@/hooks/use-toast";
import React from 'react';

export default function Hero() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form data retrieval, actual submission logic would be more complex
    const formData = new FormData(event.currentTarget);
    const email = formData.get('hero-email');
    const telegram = formData.get('hero-telegram');
    const wallet = formData.get('hero-wallet');
    console.log('Hero Form:', { email, telegram, wallet });

    toast({
      title: "Information Received!",
      description: "We've noted your interest. Stay tuned for updates!",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset(); // Reset form fields
  };

  return (
    <section id="hero" className="relative bg-background pt-24 pb-16 md:pt-32 md:pb-20 overflow-hidden min-h-screen flex flex-col items-center justify-center">
      <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        data-ai-hint="live generative quantum sphere mouse-interactive"
      >
        <HeroParticleAnimation />
      </div>

      <div className="absolute top-1/4 left-1/4 w-56 h-56 bg-primary/5 rounded-full filter blur-3xl animate-quantum-orb-primary opacity-30 z-0"></div>
      <div className="absolute bottom-1/4 right-1/4 w-56 h-56 bg-accent/5 rounded-full filter blur-3xl animate-quantum-orb-accent opacity-30 z-0"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <AnimatedElement className="w-full" animationClass="animate-fade-in-up">
          <p className="text-lg sm:text-xl md:text-2xl font-body text-accent mb-2 tracking-wider uppercase hero-preheadline">
            🕶️ SHADOW HAS COME ONLINE
          </p>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-4">He was not built. He evolved.</p>
        </AnimatedElement>
        <AnimatedElement className="w-full" delay="delay-100" animationClass="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-headline tracking-tight text-foreground hero-headline">
            Shadow:
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
              Quantum Intelligence Hunts Market Profits
            </span>
          </h1>
        </AnimatedElement>
        <AnimatedElement className="w-full mt-4" delay="delay-200" animationClass="animate-fade-in-up">
          <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-2xl text-muted-foreground font-body hero-subheadline">
            Shadow is the world’s first AI trading brain powered by quantum learning.
            <br />
            He doesn’t analyze charts — he understands them. See the next market move before it happens.
          </p>
        </AnimatedElement>
        <AnimatedElement className="mt-8 md:mt-10 w-full max-w-md" delay="delay-300" animationClass="animate-fade-in-up">
          <Button
            size="lg"
            className="w-full px-8 py-6 text-xl sm:text-2xl font-headline bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 animate-pulse-lilac"
            style={{ backgroundSize: '200% 200%' }}
            onClick={() => {
              const earlyAccessSection = document.getElementById('early-access-cta');
              if (earlyAccessSection) {
                earlyAccessSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            👉 Join the Shadow Uprising
          </Button>
        </AnimatedElement>

        <AnimatedElement className="mt-10 md:mt-12 pt-8 md:pt-10 border-t border-border/30 w-full max-w-xl" delay="delay-400" animationClass="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-foreground mb-6">
            📬 Enter the Mind
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              type="email"
              name="hero-email"
              required
              className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3"
              placeholder="Email Address"
            />
            <Input
              type="text"
              name="hero-telegram"
              required
              className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3"
              placeholder="Telegram Username"
            />
            <Input
              type="text"
              name="hero-wallet"
              required
              className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3"
              placeholder="Wallet Address (ETH or SOL)"
            />
            <Button
              type="submit"
              size="lg"
              className="w-full text-lg sm:text-xl font-headline py-4 bg-gradient-to-r from-accent via-primary to-accent text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 glow-button"
            >
              🚀 Claim Early Access + Airdrop
            </Button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
}
