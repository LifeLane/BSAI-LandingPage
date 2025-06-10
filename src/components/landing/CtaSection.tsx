
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const scrambleText = (element: HTMLElement, newText: string, duration: number = 0.5) => {
  if (!element) return;
  const originalText = element.textContent || "";
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iteration = 0;
  let intervalId: NodeJS.Timeout | null = null;

  const animateScramble = () => {
    element.textContent = newText
      .split("")
      .map((_letter, index) => {
        if (index < iteration) {
          return newText[index];
        }
        return chars[Math.floor(Math.random() * chars.length)];
      })
      .join("");

    if (iteration >= newText.length) {
      if (intervalId) clearInterval(intervalId);
      element.textContent = newText; // Ensure final text is set
      return;
    }
    iteration += 1 / (duration * 10); 
  };

  // Clear any existing interval for this element to prevent overlaps
  // This might require a more robust way to manage intervals if called rapidly
  // For now, we assume it's tied to hover state which naturally manages this.
  if (element.dataset.scrambleIntervalId) {
    clearInterval(parseInt(element.dataset.scrambleIntervalId));
  }

  intervalId = setInterval(animateScramble, 30);
  element.dataset.scrambleIntervalId = String(intervalId);
};


export default function WhitelistGateSection() {
  const { toast } = useToast();
  const [isHoveringButton, setIsHoveringButton] = useState(false);
  const ctaButtonRef = useRef<HTMLButtonElement>(null);
  const ctaTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = ctaButtonRef.current;
    const textElement = ctaTextRef.current;

    if (!button || !textElement) return;

    if (isHoveringButton) {
      scrambleText(textElement, "_SECURE YOUR SPOT_");
      gsap.to(button, {
        duration: 0.3,
        backgroundPosition: "0% 50%", // Shift gradient
        ease: "power1.inOut"
      });
    } else {
      // Ensure the scramble is stopped and text is reset if hover ends mid-scramble
      if (textElement.dataset.scrambleIntervalId) {
        clearInterval(parseInt(textElement.dataset.scrambleIntervalId));
        delete textElement.dataset.scrambleIntervalId;
      }
      textElement.textContent = "Get Whitelisted";
      gsap.to(button, {
        duration: 0.3,
        backgroundPosition: "100% 50%", // Original gradient position
        ease: "power1.inOut"
      });
    }
    // Cleanup interval on unmount or if isHoveringButton changes before interval completes
    return () => {
      if (textElement && textElement.dataset.scrambleIntervalId) {
        clearInterval(parseInt(textElement.dataset.scrambleIntervalId));
      }
    };
  }, [isHoveringButton]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const wallet = formData.get('wallet');
    console.log({ email, wallet });

    toast({
      title: "You're on the list!",
      description: "Thanks for joining the BlockSmithAI whitelist. We'll be in touch soon.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="whitelist-gate" className="relative py-16 md:py-24 overflow-hidden">
       <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        data-ai-hint="active pulsating quantum sphere urgent"
       >
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-md shadow-2xl border-primary/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground">
                The Future is <span className="text-primary">Invite-Only.</span><br />Are You On the List?
              </CardTitle>
              <CardDescription className="mt-4 text-lg sm:text-xl text-muted-foreground font-body">
                Whitelist spots for BlockSmithAI are extremely limited. Secure your position now before the doors close and gain an unparalleled advantage.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6 mt-6">
                <div className="relative group">
                  <Input
                    type="email"
                    name="email"
                    id="email-cta"
                    required
                    className="w-full bg-input border-border focus:ring-primary focus:border-primary peer py-3 pt-6 placeholder:text-transparent text-base"
                    placeholder="you@example.com"
                  />
                  <Label
                    htmlFor="email-cta"
                    className="absolute left-3 top-1 text-xs text-muted-foreground transition-all
                               peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                               peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary"
                  >
                    Enter Your Email
                  </Label>
                </div>
                <div className="relative group">
                  <Input
                    type="text"
                    name="wallet"
                    id="wallet-cta"
                    required
                    className="w-full bg-input border-border focus:ring-primary focus:border-primary peer py-3 pt-6 placeholder:text-transparent text-base"
                    placeholder="Your Solana (SOL) wallet address"
                  />
                   <Label
                    htmlFor="wallet-cta"
                    className="absolute left-3 top-1 text-xs text-muted-foreground transition-all
                               peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base
                               peer-focus:top-1 peer-focus:-translate-y-0 peer-focus:text-xs peer-focus:text-primary"
                  >
                    Enter Your Solana Wallet Address
                  </Label>
                </div>
                <Button
                  ref={ctaButtonRef}
                  type="submit"
                  size="lg"
                  className="w-full text-lg font-headline py-3 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 cta-button-animation"
                  style={{ backgroundSize: '200% 200%', backgroundPosition: '100% 50%' }}
                  onMouseEnter={() => setIsHoveringButton(true)}
                  onMouseLeave={() => setIsHoveringButton(false)}
                >
                  <span ref={ctaTextRef} className="cta-text-scramble">Get Whitelisted</span>
                </Button>
              </form>
              <p className="mt-6 text-center text-sm text-muted-foreground font-body">
                BSAI token holders receive priority. Spots filling fast!
              </p>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}

