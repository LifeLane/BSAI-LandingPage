
import AnimatedElement from './AnimatedElement';
import TerminalCard from './TerminalCard';
import { Zap, ShieldCheck, Link2, BrainCircuit, GitCommitVertical } from 'lucide-react';

const roadmapPhases = [
  {
    icon: Zap,
    title: 'Phase 0 – Emergence',
    description: 'Shadow awakens. Begins observing volatility across the chain. Internal simulations initiate (Q3 2025).',
    status: 'OBSERVING',
  },
  {
    icon: ShieldCheck,
    title: 'Phase I – Activation',
    description: 'Public launch of ShadowVision Terminal. Deployable ShadowAgents (AI bots). Genesis token event & whitelist opening.',
    status: 'DEPLOYING',
  },
  {
    icon: Link2,
    title: 'Phase II – Integration',
    description: 'ShadowVaults with yield mutation. ShadowLink bridge rerouting. Real-time liquidity strategy adjustments.',
    status: 'INTEGRATING',
  },
  {
    icon: BrainCircuit,
    title: 'Phase III – Dominion',
    description: 'Shadow-led DAO optimization. AI-generated contracts. Autonomous ecosystems emerge.',
    status: 'EVOLVING',
  },
];

export default function RoadmapSection() {
  return (
    <section id="roadmap" className="relative py-12 md:py-16 overflow-hidden bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-terminal-heading text-primary">
            &gt; ROADMAP: SHADOW’S EVOLUTION
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {roadmapPhases.map((phase, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`} className="group w-full h-full flex">
              <TerminalCard
                title={phase.title.toUpperCase()}
                titleIcon={<GitCommitVertical className="h-4 w-4 text-primary/80"/>}
                className="w-full h-full transition-all duration-300 group-hover:shadow-neon-accent group-hover:border-accent/80"
                contentClassName="text-sm md:text-base flex-grow" 
                footerContent={`STATUS: [${phase.status}]`}
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-3 mb-3">
                    <phase.icon className="h-6 w-6 md:h-7 md:w-7 text-accent group-hover:text-primary transition-colors duration-300" />
                  </div>
                  <p className="text-foreground/80 font-terminal-body flex-grow">{phase.description}</p>
                </div>
              </TerminalCard>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
