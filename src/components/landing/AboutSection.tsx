
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from '@/components/ui/card';

export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Problem */}
          <AnimatedElement className="md:pr-6">
            <Card className="bg-card shadow-xl border-destructive/50 transition-all duration-300 hover:shadow-destructive/30 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                <div 
                  className="relative aspect-video w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6 border border-dashed border-destructive/30 bg-card/50 flex items-center justify-center p-4"
                  data-ai-hint="chaotic data visualization red glitching"
                >
                  <p className="text-sm text-muted-foreground text-center">
                    [Animation: Chaotic, messy, red candlestick charts and glitching data streams, representing market noise and trader frustration.]
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6">
                  Tired of Trading in the <span className="text-destructive">Dark</span>?
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  The market is flooded with noise. Emotional decisions, lagging data, and whale manipulation make consistent profits nearly impossible. You're navigating a complex system with incomplete information, leaving you vulnerable and often frustrated.
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>

          {/* The Solution */}
          <AnimatedElement className="md:pl-6" delay="delay-200">
            <Card className="bg-card shadow-xl border-accent/50 transition-all duration-300 hover:shadow-accent/30 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                 <div 
                   className="relative aspect-video w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6 border border-dashed border-accent/30 bg-card/50 flex items-center justify-center p-4"
                   data-ai-hint="data weaving into clear wave mint green"
                 >
                  <p className="text-sm text-muted-foreground text-center">
                    [Animation: Chaotic red lines get "sucked in" and re-organize into a clean, singular, pulsating sine wave in Neon Mint green, representing QuantumTrader's clarity. Tech: GSAP/Framer Motion]
                  </p>
                </div>
                <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6">
                  We Turned On the <span className="text-primary">Quantum Light</span>.
                </h2>
                <p className="text-lg text-muted-foreground font-body">
                  QuantumTrader processes market data at a subatomic level, filtering out the noise to identify predictive patterns invisible to any other tool on Earth. Gain clarity and confidence, making informed decisions based on insights previously unimaginable.
                </p>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}
