
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Zap, ShieldCheck, Link2, BrainCircuit } from 'lucide-react'; // Example icons

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
    <section id="roadmap" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            🚀 Roadmap: <span className="text-primary">Shadow’s Evolution</span>
          </h2>
        </AnimatedElement>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 roadmap-grid">
          {roadmapPhases.map((phase, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`} className="group">
              <Card className="h-full shadow-lg hover:shadow-primary/40 transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50 transform hover:-translate-y-1 hover:scale-[1.02] roadmap-phase">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-1">
                    <phase.icon className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" />
                    <CardTitle className="text-xl sm:text-2xl font-headline text-foreground group-hover:text-primary transition-colors duration-300">{phase.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-body">{phase.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
