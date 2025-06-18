
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Brain, Eye, Bot, LinkIcon as LinkIconLucide, Zap, RadioTower } from 'lucide-react'; 

const ecosystemItems = [
  { icon: Brain, title: 'Shadow', description: 'The central quantum mind of the system' },
  { icon: Eye, title: 'ShadowVision', description: 'Your AI market terminal: signals, confidence, timing' },
  { icon: Bot, title: 'ShadowAgents', description: 'Bots that move before the crowd' },
  { icon: LinkIconLucide, title: 'ShadowLink', description: 'Liquidity rerouting across chains by real-time analysis' },
  { icon: Zap, title: 'ShadowVaults', description: 'AI-yield machines that evolve with volatility' },
  { icon: RadioTower, title: 'ShadowEcho', description: 'Alpha signal stream encrypted for connected wallets only' },
];

export default function ShadowEcosystemDetailedSection() {
  return (
    <section id="shadow-ecosystem" className="relative py-16 md:py-24 bg-background overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-foreground">
            🧬 The <span className="text-primary">Shadow Ecosystem</span>
          </h2>
        </AnimatedElement>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 glow-list">
          {ecosystemItems.map((item, index) => (
            <AnimatedElement as="li" key={index} delay={`delay-${index * 100}`} className="list-none">
              <Card className="h-full shadow-lg hover:shadow-primary/40 transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border/50 transform hover:-translate-y-1.5 hover:scale-[1.03]">
                <CardHeader className="pb-3">
                  <div className="flex items-center space-x-3">
                    <item.icon className="h-8 w-8 md:h-9 md:w-9 text-primary" />
                    <CardTitle className="text-2xl sm:text-3xl font-headline text-foreground group-hover:text-primary transition-colors">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-base sm:text-lg text-muted-foreground font-body group-hover:text-foreground/90 transition-colors">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </ul>
         <AnimatedElement delay="delay-600" className="mt-12 md:mt-16 text-center">
            <p className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-body">
                Stake <strong className="text-primary font-semibold">BSAI</strong> to unlock the full force of this ecosystem.
            </p>
        </AnimatedElement>
      </div>
    </section>
  );
}
