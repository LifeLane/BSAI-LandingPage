
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Gift, Eye, Zap, Flame, Shield, Airplay } from 'lucide-react';
import React from 'react';

const perks = [
  { icon: Flame, text: "Early Access" },
  { icon: Airplay, text: "Signal Feed Preview" },
  { icon: Gift, text: "Airdrop Eligibility" },
  { icon: Shield, text: "Whitelist Priority" },
];

export default function CtaSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email-cta');
    const telegram = formData.get('telegram-cta');
    const wallet = formData.get('wallet-cta');
    console.log('CTA Form:', { email, telegram, wallet });

    toast({
      title: "Application Submitted!",
      description: "Thanks for applying for early access. We'll review your submission.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="early-access-cta" className="relative py-16 md:py-24 overflow-hidden">
       <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
        data-ai-hint="active pulsating quantum sphere urgent"
       >
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto">
          <Card className="w-full bg-card/80 backdrop-blur-md shadow-2xl border-primary/50">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground">
                🎁 Shadow Is Selecting His <span className="text-primary">First 1,000</span>
              </CardTitle>
              <CardDescription className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground font-body">
                Get early access to Shadow before he closes the gates.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="my-6 md:my-8">
                <h3 className="text-xl sm:text-2xl font-semibold text-center text-foreground mb-4">Perks Include:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3 text-lg sm:text-xl text-muted-foreground">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-center space-x-2.5 group hover:text-primary transition-colors">
                      <perk.icon className="h-5 w-5 md:h-6 md:w-6 text-primary group-hover:text-accent transition-colors" />
                      <span>{perk.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="space-y-5 mt-6 md:mt-8">
                <Input
                  type="email"
                  name="email-cta"
                  id="email-cta-form"
                  required
                  className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3 placeholder:text-muted-foreground/80"
                  placeholder="Your Email"
                />
                <Input
                  type="text"
                  name="telegram-cta"
                  id="telegram-cta-form"
                  required
                  className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3 placeholder:text-muted-foreground/80"
                  placeholder="Telegram Username"
                />
                <Input
                  type="text"
                  name="wallet-cta"
                  id="wallet-cta-form"
                  required
                  className="w-full bg-card/70 backdrop-blur-sm border-primary/50 focus:ring-accent focus:border-accent text-base md:text-lg py-3 placeholder:text-muted-foreground/80"
                  placeholder="Wallet Address (ETH or SOL)"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-xl sm:text-2xl font-headline py-4 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 glow-button"
                >
                  🧠 Qualify for Shadow
                </Button>
              </form>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}
