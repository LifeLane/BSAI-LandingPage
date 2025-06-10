
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Coins, KeyRound, Rocket } from 'lucide-react';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';

const steps = [
  {
    icon: Coins,
    title: 'Become a BSAI Holder',
    description: 'Acquire and hold BSAI tokens. Our upcoming launch on Raydium is your first chance to get in and be part of the BlockSmithAI revolution.',
    stepNumber: "01"
  },
  {
    icon: KeyRound,
    title: 'Unlock BlockSmithAI Tools',
    description: 'No subscriptions, no fees. Your BSAI tokens are your lifetime key to unlocking the full power of BlockSmithAI and its predictive analytics.',
    stepNumber: "02"
  },
  {
    icon: Rocket,
    title: 'Build & Trade Smarter',
    description: 'Use the quantum advantage to inform your strategy, build secure dApps, spot opportunities early, and navigate the market with unparalleled confidence.',
    stepNumber: "03"
  },
];

export default function HowItWorksSection() {
  return (
    <section id="how-it-works" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            Gain Your <span className="text-primary">Unfair Advantage</span> in 3 Simple Steps
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            Accessing the future of Web3 intelligence is straightforward. Here’s how you get started:
          </p>
        </AnimatedElement>
        <div className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-shadow duration-300 bg-card/70 backdrop-blur-sm border border-border hover:border-primary/70 transform hover:-translate-y-2 relative overflow-hidden group">
                <CardHeader className="items-center text-center relative z-10">
                  <div className="absolute -top-4 -left-4 text-7xl font-bold font-headline text-primary/10 opacity-70 z-0 group-hover:text-primary/20 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300">
                    {step.stepNumber}
                  </div>
                  <div className="p-4 bg-primary/10 rounded-full inline-block mb-4 border border-primary/20 group-hover:bg-accent/10 group-hover:border-accent/30 transition-colors duration-300">
                    <step.icon className="h-10 w-10 text-primary group-hover:text-accent group-hover:animate-pulse-mint transition-colors duration-300" />
                  </div>
                  <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">{step.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center relative z-10">
                  <p className="text-muted-foreground font-body text-base">{step.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
