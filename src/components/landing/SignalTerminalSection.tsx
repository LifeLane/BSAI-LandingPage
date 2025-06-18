
import AnimatedElement from './AnimatedElement';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import HeroParticleAnimation from './HeroParticleAnimation';
import { BarChartBig, CheckSquare, Cpu } from 'lucide-react'; 

const features = [
  { text: "<strong>Entry</strong> and <strong>exit</strong> zones" },
  { text: "Real-time confidence score (<span class=\"text-accent font-semibold drop-shadow-[0_0_4px_hsl(var(--accent)/0.7)] text-lg sm:text-xl md:text-2xl\">ShadowScore™</span>)" },
  { text: "AI reasoning behind every trade" },
];

export default function SignalTerminalSection() {
  return (
    <section id="signal-terminal" className="relative py-16 md:py-24 bg-muted overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-3xl mx-auto"> {/* Increased max-width for fuller content */}
          <Card className="w-full bg-card/80 backdrop-blur-md shadow-xl border-border/50">
            <CardHeader className="text-center pb-4">
               <div className="flex items-center justify-center space-x-3 mb-3">
                  <BarChartBig className="h-10 w-10 md:h-12 md:w-12 text-primary" />
                  <CardTitle className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline text-foreground">
                    🧠 ShadowVision: The <span className="text-primary">Signal Terminal</span>
                  </CardTitle>
                </div>
              <CardDescription className="mt-4 text-lg sm:text-xl md:text-2xl text-muted-foreground font-body">
                You don’t chase charts. You activate Shadow.
                <br />
                Choose a symbol, timeframe, and risk — and Shadow does the rest. His quantum core processes liquidity fractals, mempool patterns, and whale wallets in real-time.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 text-center">
              <h3 className="text-2xl sm:text-3xl font-semibold text-foreground mb-4 mt-4">📈 You’ll see:</h3>
              <ul className="space-y-3 text-lg sm:text-xl text-muted-foreground text-left max-w-lg mx-auto mb-6">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-3 group">
                    <CheckSquare className="h-5 w-5 md:h-6 md:w-6 text-primary shrink-0 mt-1.5 group-hover:text-accent transition-colors" />
                    <span className="leading-relaxed" dangerouslySetInnerHTML={{ __html: feature.text }} />
                  </li>
                ))}
              </ul>
              <p className="text-primary font-medium italic drop-shadow-[0_0_4px_hsl(var(--primary)/0.7)] text-xl sm:text-2xl md:text-3xl glow-quote">
                “He doesn’t follow indicators. He creates them.”
              </p>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}
