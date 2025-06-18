
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { CheckCircle, Gift, Eye, Zap } from 'lucide-react'; // Example icons for perks
import React from 'react';

const perks = [
  { icon: Zap, text: "Early Access" },
  { icon: Eye, text: "Signal Feed Preview" },
  { icon: Gift, text: "Airdrop Eligibility" },
  { icon: CheckCircle, text: "Whitelist Priority" },
];

export default function CtaSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email-cta'); // Ensure name attributes match
    const telegram = formData.get('telegram-cta');
    const wallet = formData.get('wallet-cta');
    console.log({ email, telegram, wallet });

    toast({
      title: "Application Submitted!",
      description: "Thanks for applying for early access. We'll review your submission.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="early-access-cta" className="relative py-12 md:py-20 overflow-hidden">
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
              <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
                🎁 Shadow Is Selecting His <span className="text-primary">First 1,000</span>
              </CardTitle>
              <CardDescription className="mt-3 text-md sm:text-lg text-muted-foreground font-body">
                Get early access to Shadow before he closes the gates.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6">
              <div className="my-6">
                <h3 className="text-lg font-semibold text-center text-foreground mb-3">Perks Include:</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-sm text-muted-foreground">
                  {perks.map((perk, index) => (
                    <li key={index} className="flex items-center space-x-2 group hover:text-primary transition-colors">
                      <perk.icon className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                      <span>{perk.text}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                <Input
                  type="email"
                  name="email-cta"
                  id="email-cta-form"
                  required
                  className="w-full bg-input border-border focus:ring-primary focus:border-primary text-sm"
                  placeholder="Your Email"
                />
                <Input
                  type="text"
                  name="telegram-cta"
                  id="telegram-cta-form"
                  required
                  className="w-full bg-input border-border focus:ring-primary focus:border-primary text-sm"
                  placeholder="Telegram Username"
                />
                <Input
                  type="text"
                  name="wallet-cta"
                  id="wallet-cta-form"
                  required
                  className="w-full bg-input border-border focus:ring-primary focus:border-primary text-sm"
                  placeholder="Wallet Address (ETH or SOL)"
                />
                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-md font-headline py-3 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 glow-button"
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
