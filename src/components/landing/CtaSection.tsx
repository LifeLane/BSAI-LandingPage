
"use client";

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from "@/hooks/use-toast";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import TerminalCard from './TerminalCard';
import { Flame, Airplay, Gift, Shield, Terminal, ChevronRight } from 'lucide-react';
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
    
    toast({
      title: "> QUALIFICATION SUBMITTED",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-background p-2 font-terminal-code">
          <code className="text-accent-green">
            {`User: ${telegram || 'initiate_unknown'}\nEmail: ${email}\nWallet: ${wallet ? wallet.toString().substring(0,10) + '...' : 'pending_input'}\nStatus: Processing_Shadow_Selection`}
          </code>
        </pre>
      ),
      variant: "default",
    });
    (event.target as HTMLFormElement).reset();
  };

  return (
    <section id="early-access-cta" className="relative py-10 md:py-12 overflow-hidden">
       <div
        className="absolute inset-0 z-0 pointer-events-none opacity-30"
       >
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-xl mx-auto">
          <TerminalCard
            title="APPLY_FOR_ACCESS"
            titleIcon={<Terminal className="h-4 w-4 text-primary/80" />}
            className="w-full"
            footerContent="> Only the prepared — and the whitelisted — will be first to trade with AI precision."
          >
            <div className="text-center pb-2">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-terminal-heading text-primary">
                🎁 Shadow Is Selecting His First 1,000
              </h2>
              <p className="mt-2 text-sm sm:text-base text-foreground/80 font-terminal-body">
                Get early access to Shadow before he closes the gates.
              </p>
            </div>
            
            <div className="my-4 md:my-5 border-t border-primary/30 pt-3">
              <h3 className="text-md sm:text-lg font-semibold font-terminal-heading text-center text-primary mb-2.5">&gt; PERKS_INCLUDE:</h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-3 gap-y-1.5 text-xs sm:text-sm text-foreground/80 font-terminal-body">
                {perks.map((perk, index) => (
                  <li key={index} className="flex items-center space-x-1.5 group hover:text-primary transition-colors">
                    <perk.icon className="h-3.5 w-3.5 md:h-4 md:w-4 text-primary group-hover:text-accent-green transition-colors" />
                    <span>{perk.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <form onSubmit={handleSubmit} className="space-y-3 mt-4 md:mt-5">
              <Input
                type="email"
                name="email-cta"
                id="email-cta-form"
                required
                className="text-xs placeholder:text-muted-foreground/60"
                placeholder="[your_email_address]"
                showBlinkingCursor
              />
              <Input
                type="text"
                name="telegram-cta"
                id="telegram-cta-form"
                required
                className="text-xs placeholder:text-muted-foreground/60"
                placeholder="[telegram_username]"
                showBlinkingCursor
              />
              <Input
                type="text"
                name="wallet-cta"
                id="wallet-cta-form"
                required
                className="text-xs placeholder:text-muted-foreground/60"
                placeholder="[wallet_address_eth_sol]"
                showBlinkingCursor
              />
              <Button
                type="submit"
                variant="default"
                size="lg"
                className="w-full text-sm sm:text-base font-terminal-heading py-2.5"
              >
                <ChevronRight className="mr-1 h-4 w-4"/> QUALIFY FOR SHADOW
              </Button>
            </form>
          </TerminalCard>
        </AnimatedElement>
      </div>
    </section>
  );
}
