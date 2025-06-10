
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from '@/components/ui/card';
import HeroParticleAnimation from './HeroParticleAnimation';

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedElement className="md:pr-6">
            <Card className="bg-card/70 backdrop-blur-sm shadow-xl border-destructive/50 transition-all duration-300 hover:shadow-destructive/30 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                <div 
                  className="relative aspect-video w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6 border border-dashed border-destructive/30 bg-card/50 flex items-center justify-center p-4"
                  data-ai-hint="animated chaotic red lines glitching"
                >
                  <svg viewBox="0 0 100 60" className="w-full h-auto max-h-[200px] text-destructive">
                    <path d="M5 55 Q 25 10, 45 40 T 85 15 L 95 30" stroke="currentColor" strokeWidth="1.5" fill="none" pathLength="1" className="animate-draw-glitch-1" />
                    <path d="M5 30 Q 20 50, 40 20 T 75 55 L 95 40" stroke="currentColor" strokeWidth="1.5" fill="none" pathLength="1" className="animate-draw-glitch-2" />
                    <path d="M5 10 Q 30 45, 50 5 T 80 50 L 95 20" stroke="currentColor" strokeWidth="1.5" fill="none" pathLength="1" className="animate-draw-glitch-3" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6 problem-title">
                  Tired of Trading in the <span className="text-destructive">Dark</span>?
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  The market is flooded with noise. Emotional decisions, lagging data, and whale manipulation make consistent profits nearly impossible. You're navigating a complex system with incomplete information, leaving you vulnerable and often frustrated.
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement className="md:pl-6" delay="delay-200">
            <Card className="bg-card/70 backdrop-blur-sm shadow-xl border-accent/50 transition-all duration-300 hover:shadow-accent/30 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                 <div 
                   className="relative aspect-video w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6 border border-dashed border-accent/30 bg-card/50 flex items-center justify-center p-4"
                   data-ai-hint="animated pulsating mint green sine wave"
                 >
                  <svg viewBox="0 0 100 40" className="w-full h-auto max-h-[150px] text-accent">
                    <path d="M5 20 Q 25 5, 50 20 T 95 20" stroke="currentColor" strokeWidth="2" fill="none" className="animate-pulse-wave" />
                  </svg>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6 solution-title">
                  We Turned On the <span className="text-primary">Quantum Light</span>.
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  BlockSmithAI processes market data at a subatomic level, filtering out the noise to identify predictive patterns invisible to any other tool on Earth. Gain clarity and confidence, making informed decisions based on insights previously unimaginable.
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
