
import Image from 'next/image';
import AnimatedElement from './AnimatedElement';
import { Card, CardContent } from '@/components/ui/card'; // Using Card for better styling

// Reimagined as "The Problem/Solution Section"
export default function ProblemSolutionSection() {
  return (
    <section id="problem-solution" className="py-16 md:py-24 bg-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* The Problem */}
          <AnimatedElement className="md:pr-6">
            <Card className="bg-card/50 backdrop-blur-sm shadow-xl border-destructive/30 transition-all duration-300 hover:shadow-destructive/40 hover:border-destructive/60 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                <div className="relative aspect-[16/10] w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://placehold.co/600x375.png"
                    alt="Chaotic, messy, red candlestick charts"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint="chaotic stock charts"
                  />
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
            <Card className="bg-card/50 backdrop-blur-sm shadow-xl border-primary/30 transition-all duration-300 hover:shadow-primary/40 hover:border-primary/60 transform hover:-translate-y-1">
              <CardContent className="p-6 md:p-8">
                 <div className="relative aspect-[16/10] w-full mx-auto md:mx-0 rounded-lg overflow-hidden mb-6">
                  <Image
                    src="https://placehold.co/600x375.png"
                    alt="Clean, serene, futuristic interface of QuantumTrader"
                    layout="fill"
                    objectFit="cover"
                    className="rounded-lg"
                    data-ai-hint="sleek data analysis"
                  />
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
