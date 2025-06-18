
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Brain, Eye, Bot, LinkIcon, Zap, RadioTower } from 'lucide-react'; // Example icons for ecosystem

const ecosystemItems = [
  { icon: Brain, title: 'Shadow', description: 'The quantum brain watching every chain' },
  { icon: Eye, title: 'ShadowVision', description: 'Real-time signal interface for traders' },
  { icon: Bot, title: 'ShadowAgents', description: 'Deployable AIs that monitor, scan, and react to threats' },
  { icon: LinkIcon, title: 'ShadowLink', description: 'Smart routing of liquidity across chains with predictive AI' },
  { icon: Zap, title: 'ShadowVaults', description: 'Yield strategies that evolve by learning from the market' },
  { icon: RadioTower, title: 'ShadowEcho', description: 'Encrypted alpha stream delivered only to synced minds' },
];

export default function ShadowEcosystemDetailedSection() {
  return (
    <section id="shadow-ecosystem" className="relative py-12 md:py-20 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            🧬 The <span className="text-primary">Shadow Ecosystem</span>
          </h2>
        </AnimatedElement>
        <ul className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 glow-list">
          {ecosystemItems.map((item, index) => (
            <AnimatedElement as="li" key={index} delay={`delay-${index * 100}`} className="list-none">
              <Card className="h-full shadow-lg hover:shadow-primary/30 transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50 transform hover:-translate-y-1 hover:scale-[1.02]">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-7 w-7 text-primary" />
                    <CardTitle className="text-xl font-headline text-foreground group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground font-body group-hover:text-foreground/90 transition-colors">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </ul>
         <AnimatedElement delay="delay-600" className="mt-10 text-center">
            <p className="text-lg text-muted-foreground font-body">
                Stake <strong className="text-primary font-semibold">BSAI</strong> to unlock the full force of this ecosystem.
            </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
