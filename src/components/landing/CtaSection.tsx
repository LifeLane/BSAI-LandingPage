"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import React from 'react';

// Reimagined as "The Whitelist Gate (Final CTA)"
export default function WhitelistGateSection() {
  const { toast } = useToast();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Basic form handling logic, can be expanded
    const formData = new FormData(event.currentTarget);
    const email = formData.get('email');
    const wallet = formData.get('wallet');
    console.log({ email, wallet });

    // Add to a waitlist or send to backend
    toast({
      title: "You're on the list!",
      description: "Thanks for joining the QuantumTrader whitelist. We'll be in touch soon.",
    });
    (event.target as HTMLFormElement).reset(); // Reset form
  };

  return (
    <section id="whitelist-gate" className="py-16 md:py-24 bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="max-w-2xl mx-auto">
          <Card className="bg-card/50 backdrop-blur-md shadow-2xl border-primary/30">
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
                <div>
                  <Label htmlFor="email" className="block text-sm font-medium text-foreground font-body mb-1">
                    Enter Your Email
                  </Label>
                  <Input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="w-full bg-background/70 border-border focus:ring-primary focus:border-primary"
                    placeholder="you@example.com"
                  />
                </div>
                <div>
                  <Label htmlFor="wallet" className="block text-sm font-medium text-foreground font-body mb-1">
                    Enter Your Solana Wallet Address
                  </Label>
                  <Input
                    type="text"
                    name="wallet"
                    id="wallet"
                    required
                    className="w-full bg-background/70 border-border focus:ring-primary focus:border-primary"
                    placeholder="Your Solana (SOL) wallet address"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg" 
                  className="w-full text-lg font-headline py-3 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-xl transform hover:scale-105 transition-transform duration-300"
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
