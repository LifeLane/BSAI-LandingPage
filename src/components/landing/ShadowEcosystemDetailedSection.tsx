
import AnimatedElement from './AnimatedElement';
import TerminalCard from './TerminalCard';
import { Brain, Eye, Bot, Link as LinkIconLucide, Zap, RadioTower } from 'lucide-react';
import HeroParticleAnimation from './HeroParticleAnimation'; // Added import

const ecosystemItems = [
  { icon: Brain, title: 'Shadow', description: 'The quantum brain watching every chain' },
  { icon: Eye, title: 'ShadowVision', description: 'Real-time signal interface for traders' },
  { icon: Bot, title: 'ShadowAgents', description: 'Deployable AIs that monitor, scan, and react to threats' },
  { icon: LinkIconLucide, title: 'ShadowLink', description: 'Smart routing of liquidity across chains with predictive AI' },
  { icon: Zap, title: 'ShadowVaults', description: 'Yield strategies that evolve by learning from the market' },
  { icon: RadioTower, title: 'ShadowEcho', description: 'Encrypted alpha stream delivered only to synced minds' },
];

export default function ShadowEcosystemDetailedSection() {
  return (
    <section id="shadow-ecosystem" className="relative py-10 md:py-12 bg-transparent overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-8 md:mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-terminal-heading text-primary">
            &gt; 🧬 THE SHADOW ECOSYSTEM
          </h2>
        </AnimatedElement>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {ecosystemItems.map((item, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`} className="h-full flex">
              <TerminalCard
                title={item.title.toUpperCase()}
                titleIcon={<item.icon className="h-4 w-4 text-primary/80" />}
                className="w-full h-full group transition-all duration-300 hover:shadow-neon-accent hover:border-accent/80"
                contentClassName="text-sm md:text-base"
              >
                <p className="text-foreground/80 font-terminal-body">{item.description}</p>
              </TerminalCard>
            </AnimatedElement>
          ))}
        </div>
         <AnimatedElement delay="delay-600" className="mt-8 md:mt-10 text-center">
            <p className="text-base sm:text-lg md:text-xl text-foreground/80 font-terminal-body">
                Stake <strong className="text-primary font-bold shadow-neon-primary px-1">BSAI</strong> to unlock the full force of this ecosystem.
            </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
