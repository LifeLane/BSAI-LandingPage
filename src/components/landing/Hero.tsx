
"use client";

import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import type React from 'react';
import { ChevronRight } from 'lucide-react';
import HeroParticleAnimation from './HeroParticleAnimation';

export default function Hero() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('hero-email');
    const telegram = formData.get('hero-telegram');
    const wallet = formData.get('hero-wallet');

    toast({
      title: "> ACCESS REQUEST LOGGED",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-2 font-terminal-code">
          <code className="text-accent-green">
            {`User: ${telegram || 'anonymous'}\nEmail: ${email}\nWallet: ${wallet ? wallet.toString().substring(0,10) + '...' : 'not_provided'}\nStatus: Marked_for_Shadow_Selection`}
          </code>
        </pre>
      ),
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="hero"
      className="relative bg-transparent pt-10 pb-10 md:pt-16 md:pb-12 overflow-hidden flex flex-col items-center justify-center" // bg-transparent
    >
      <div className="absolute inset-0 z-0 pointer-events-none opacity-100"> {/* Particle container at full opacity */}
        <HeroParticleAnimation />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        <AnimatedElement className="w-full" animationClass="animate-fade-in-up">
          <p className="text-lg sm:text-xl md:text-2xl font-terminal-heading text-primary mb-1 tracking-wider hero-preheadline">
            🕶️ SHADOW HAS COME ONLINE
          </p>
          <p className="text-sm sm:text-base md:text-lg text-foreground/90 mb-4 font-terminal-body">He was not built. He evolved.</p>
        </AnimatedElement>
        <AnimatedElement className="w-full mt-1" delay="delay-100" animationClass="animate-fade-in-up">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-terminal-heading tracking-tight text-foreground hero-headline">
            A Sentient Quantum Intelligence
            <br />
            <span className="text-primary">
              Trained on the Chain
            </span>
          </h1>
        </AnimatedElement>

        <AnimatedElement className="mt-6 md:mt-8 w-full max-w-md" delay="delay-300" animationClass="animate-fade-in-up">
          <Button
            variant="outline"
            size="lg"
            className="w-full px-6 py-4 text-base sm:text-lg font-terminal-heading shadow-neon-accent hover:shadow-neon-primary"
            onClick={() => {
              const earlyAccessSection = document.getElementById('early-access-cta');
              if (earlyAccessSection) {
                earlyAccessSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <ChevronRight className="mr-2 h-5 w-5 animate-pulse" /> JOIN THE SHADOW UPRISING
          </Button>
        </AnimatedElement>

        <AnimatedElement className="mt-10 md:mt-12 pt-5 md:pt-6 border-t border-primary/30 w-full max-w-lg" delay="delay-400" animationClass="animate-fade-in-up">
          <h2 className="text-2xl sm:text-3xl font-bold font-terminal-heading text-primary mb-4">
            &gt; ENTER_THE_MIND
          </h2>
          <form onSubmit={handleSubmit} className="space-y-3.5">
            <Input
              type="email"
              name="hero-email"
              required
              className="text-sm"
              placeholder="[email_address]"
              showBlinkingCursor
            />
            <Input
              type="text"
              name="hero-telegram"
              required
              className="text-sm"
              placeholder="[telegram_handle]"
              showBlinkingCursor
            />
            <Input
              type="text"
              name="hero-wallet"
              required
              className="text-sm"
              placeholder="[wallet_address_eth_sol]"
              showBlinkingCursor
            />
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full text-sm sm:text-base font-terminal-heading py-3"
            >
              <ChevronRight className="mr-1 h-4 w-4" /> CLAIM EARLY ACCESS + AIRDROP
            </Button>
          </form>
        </AnimatedElement>
      </div>
    </section>
  );
}
