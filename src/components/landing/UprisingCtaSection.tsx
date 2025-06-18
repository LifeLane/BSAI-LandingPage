
"use client";

import { Button } from '@/components/ui/button';
import AnimatedElement from './AnimatedElement';
import TerminalCard from './TerminalCard';
import { Gift, ShieldCheck, BarChartBig, Users, Send, Brain, Sparkles, Terminal } from 'lucide-react'; 
import HeroParticleAnimation from './HeroParticleAnimation'; // Added import

const uprisingBenefits = [
  { icon: Sparkles, text: "Shadow Genesis NFTs" },
  { icon: Gift, text: "Airdrop Bonuses" },
  { icon: BarChartBig, text: "Vault Access" },
  { icon: Users, text: "Role Promotion" },
  { icon: Brain, text: "DAO Adaptation Syncs" },
];

export default function UprisingCtaSection() {
  return (
    <section id="uprising-cta" className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-xl mx-auto">
          <TerminalCard
            title="JOIN_THE_UPRISING"
            titleIcon={<Terminal className="h-4 w-4 text-primary/80"/>}
            className="w-full"
          >
            <div className="text-center pb-3">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-terminal-heading text-primary">
                🧲 Join the Uprising
              </h2>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-foreground/80 font-terminal-body">
                This is not a bot army. This is a mind collective.
                <br />
                Shadow selects by behavior. Not just wallets.
              </p>
            </div>
            
            <ul className="space-y-2.5 text-sm sm:text-base md:text-lg text-foreground/80 font-terminal-body mb-5 md:mb-6 text-left max-w-sm mx-auto border-t border-primary/30 pt-4 mt-4">
              {uprisingBenefits.map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2.5 group hover:text-primary transition-colors">
                  <benefit.icon className="h-4 w-4 md:h-5 md:w-5 text-primary group-hover:text-accent-green transition-colors shrink-0" />
                  <span>{benefit.text}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <Button
                variant="default"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base font-terminal-heading px-6 py-3"
              >
                <Send className="mr-2 h-4 w-4" /> SUBMIT TO THE SIGNAL
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto text-sm sm:text-base font-terminal-heading px-6 py-3"
              >
                <Brain className="mr-2 h-4 w-4" /> BE SIGNAL-FORGED
              </Button>
            </div>
          </TerminalCard>
        </AnimatedElement>
      </div>
    </section>
  );
}
