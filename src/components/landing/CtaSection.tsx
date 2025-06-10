
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';

const scrambleText = (element: HTMLElement, newText: string, duration: number = 0.5) => {
  const originalText = element.textContent || "";
  const chars = "!<>-_\\/[]{}—=+*^?#________";
  let iteration = 0;

  const interval = setInterval(() => {
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
      clearInterval(interval);
      element.textContent = newText;
    }
    iteration += 1 / (duration * 10); // Adjust speed of scramble
  }, 30); // Adjust interval for smoother/faster animation
};


export default function WhitelistGateSection() {
  const { toast } = useToast();
  const [isHovering, setIsHovering] = useState(false);
  const ctaButtonRef = React.useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!ctaButtonRef.current) return;
    const button = ctaButtonRef.current;
    const textElement = button.querySelector('.cta-text-scramble') as HTMLElement;

    if (!textElement) return;

    if (isHovering) {
      scrambleText(textElement, "_SECURE YOUR SPOT_");
      gsap.to(button, { 
        duration: 0.3,
        backgroundSize: "250% 250%",
        ease: "power1.inOut"
      });
    } else {
      textElement.textContent = "Get Whitelisted";
      gsap.to(button, { 
        duration: 0.3,
        backgroundSize: "200% 200%", 
        ease: "power1.inOut"
      });
    }
  }, [isHovering]);

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
        className="absolute inset-0 z-0 pointer-events-none opacity-40"
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
                    className="w-full bg-input border-border focus:ring-primary focus:border-primary peer py-3 pt-6 placeholder-transparent text-base"
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
                    className="w-full bg-input border-border focus:ring-primary focus:border-primary peer py-3 pt-6 placeholder-transparent text-base"
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
                  className="w-full text-lg font-headline py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 animate-pulse-lilac cta-button-animation"
                  style={{ backgroundSize: '200% 200%' }}
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                >
                  <span className="cta-text-scramble">Get Whitelisted</span>
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
