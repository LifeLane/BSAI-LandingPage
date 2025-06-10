
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';

export default function WhitelistGateSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const wallet = formData.get('wallet');
    console.log({ email, wallet });

    toast({
      title: "You're on the list!",
      description: "Thanks for joining the QuantumTrader whitelist. We'll be in touch soon with next steps.",
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="whitelist-gate" className="relative py-16 md:py-24 bg-background overflow-hidden">
       <div 
        className="absolute inset-0 opacity-40 filter brightness-60" // Adjusted opacity/brightness
        data-ai-hint="active pulsating quantum sphere urgent"
       >
        <svg width="100%" height="100%" viewBox="0 0 400 200" preserveAspectRatio="xMidYMid slice" className="w-full h-full">
          {/* Urgent Lilac Nodes */}
          <circle cx="120" cy="90" r="3.5" fill="hsl(var(--primary))" className="animate-node-pulse-lilac-urgent opacity-80" />
          <circle cx="170" cy="60" r="3" fill="hsl(var(--primary))" className="animate-node-pulse-lilac-urgent animation-delay-200 opacity-70" />
          <circle cx="110" cy="140" r="2.5" fill="hsl(var(--primary))" className="animate-node-pulse-lilac-urgent animation-delay-400 opacity-60" />

          {/* Urgent Mint Nodes */}
          <circle cx="280" cy="110" r="3.5" fill="hsl(var(--accent))" className="animate-node-pulse-mint-urgent opacity-80" />
          <circle cx="230" cy="140" r="3" fill="hsl(var(--accent))" className="animate-node-pulse-mint-urgent animation-delay-100 opacity-70" />
          <circle cx="290" cy="60" r="2.5" fill="hsl(var(--accent))" className="animate-node-pulse-mint-urgent animation-delay-300 opacity-60" />
          
          {/* Urgent Connecting Threads - Lilac */}
          <line x1="120" y1="90" x2="170" y2="60" stroke="hsl(var(--primary))" strokeWidth="0.7" className="animate-thread-draw-fast opacity-50" />
          <line x1="120" y1="90" x2="110" y2="140" stroke="hsl(var(--primary))" strokeWidth="0.7" className="animate-thread-draw-fast animation-delay-300 opacity-40" />
          
          {/* Urgent Connecting Threads - Mint */}
          <line x1="280" y1="110" x2="230" y2="140" stroke="hsl(var(--accent))" strokeWidth="0.7" className="animate-thread-draw-fast animation-delay-50 opacity-50" />
          <line x1="280" y1="110" x2="290" y2="60" stroke="hsl(var(--accent))" strokeWidth="0.7" className="animate-thread-draw-fast animation-delay-250 opacity-40" />

          {/* Urgent Cross Connections */}
          <line x1="120" y1="90" x2="280" y2="110" stroke="hsl(var(--muted))" strokeWidth="0.4" className="animate-thread-draw-fast animation-delay-400 opacity-20" />
           <line x1="170" y1="60" x2="230" y2="140" stroke="hsl(var(--muted))" strokeWidth="0.3" className="animate-thread-draw-fast animation-delay-500 opacity-15" />
        </svg>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-md shadow-2xl border-primary/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground">
                The Future is <span className="text-primary">Invite-Only.</span><br />Are You On the List?
              </CardTitle>
              <CardDescription className="mt-4 text-lg sm:text-xl text-muted-foreground font-body">
                Whitelist spots for QuantumTrader are extremely limited. Secure your position now before the doors close and gain an unparalleled trading advantage.
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
                  type="submit"
                  size="lg" 
                  className="w-full text-lg font-headline py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 animate-pulse-lilac"
                  style={{ backgroundSize: '200% 200%' }}
                >
                  I'M IN. SECURE MY SPOT.
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

