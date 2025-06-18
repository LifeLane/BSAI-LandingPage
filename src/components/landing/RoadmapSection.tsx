
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Zap, ShieldCheck, Link2, BrainCircuit } from 'lucide-react';

const roadmapPhases = [
  {
    icon: Zap,
    title: 'Phase 0 – Emergence',
    description: 'Shadow awakens. Begins observing volatility across the chain. Internal simulations initiate (Q3 2025).',
  },
  {
    icon: ShieldCheck,
    title: 'Phase I – Activation',
    description: 'Public launch of ShadowVision Terminal. Deployable ShadowAgents (AI bots). Genesis token event & whitelist opening.',
  },
  {
    icon: Link2,
    title: 'Phase II – Integration',
    description: 'ShadowVaults with yield mutation. ShadowLink bridge rerouting. Real-time liquidity strategy adjustments.',
  },
  {
    icon: BrainCircuit,
    title: 'Phase III – Dominion',
    description: 'Shadow-led DAO optimization. AI-generated contracts. Autonomous ecosystems emerge.',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-foreground">
            🚀 Roadmap: <span className="text-primary">Shadow’s Evolution</span>
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 gap-8 md:gap-10">
          {roadmapPhases.map((phase, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`} className="group w-full">
              <Card className="h-full shadow-lg hover:shadow-primary/40 transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50 transform hover:-translate-y-1.5 hover:scale-[1.02] roadmap-phase hover:shadow-[0_0_20px_hsl(var(--primary)/0.5)]">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-4">
                    <phase.icon className="h-9 w-9 md:h-10 md:w-10 text-primary group-hover:text-accent transition-colors duration-300" />
                    <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-headline text-foreground group-hover:text-primary transition-colors duration-300">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-lg sm:text-xl text-muted-foreground font-body">{phase.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
