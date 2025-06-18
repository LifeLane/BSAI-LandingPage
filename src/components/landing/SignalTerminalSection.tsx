
import AnimatedElement from './AnimatedElement';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import HeroParticleAnimation from './HeroParticleAnimation';
import { BarChartBig, CheckSquare, Cpu } from 'lucide-react'; // Example icons

const features = [
  { text: "Entry and exit zones" },
  { text: "Real-time confidence score (<span class=\"text-accent font-semibold drop-shadow-[0_0_3px_hsl(var(--accent)/0.7)]\">ShadowScore™</span>)" },
  { text: "AI reasoning behind every trade" },
];

export default function SignalTerminalSection() {
  return (
    <section id="signal-terminal" className="relative py-12 md:py-20 bg-muted overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-md shadow-xl border-border/50">
            <CardHeader className="text-center">
               <div className="flex items-center justify-center space-x-3 mb-2">
                  <BarChartBig className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-bold font-headline text-foreground">
                    🧠 ShadowVision: The <span className="text-primary">Signal Terminal</span>
                  </CardTitle>
                </div>
              <CardDescription className="mt-3 text-md sm:text-lg text-muted-foreground font-body">
                You don’t chase charts. You activate Shadow.
                <br />
                Choose a symbol, timeframe, and risk — and Shadow does the rest. His quantum core processes liquidity fractals, mempool patterns, and whale wallets in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 text-center">
              <h3 className="text-lg font-semibold text-foreground mb-3 mt-2">📈 You’ll see:</h3>
              <ul className="space-y-2 text-sm text-muted-foreground text-left max-w-md mx-auto mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2 group">
                    <CheckSquare className="h-4 w-4 text-primary shrink-0 mt-1 group-hover:text-accent transition-colors" />
                    <span dangerouslySetInnerHTML={{ __html: feature.text }} />
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium italic drop-shadow-[0_0_4px_hsl(var(--primary)/0.7)] text-md">
                “He doesn’t follow indicators. He creates them.”
              </p>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}
