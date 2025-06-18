
import AnimatedElement from './AnimatedElement';
import TerminalCard from './TerminalCard';
import { BarChartBig, CheckSquare, Cpu } from 'lucide-react'; 

const features = [
  { text: "<strong>Entry</strong> and <strong>exit</strong> zones" },
  { text: "Real-time confidence score (<span class=\"text-accent-green font-semibold drop-shadow-[0_0_4px_hsl(var(--accent-green)/0.7)]\">ShadowScore™</span>)" },
  { text: "AI reasoning behind every trade" },
];

export default function SignalTerminalSection() {
  return (
    <section id="signal-terminal" className="relative py-12 md:py-16 bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-2xl mx-auto">
          <TerminalCard
            title="SHADOWVISION_TERMINAL"
            titleIcon={<Cpu className="h-4 w-4 text-primary/80" />}
            className="w-full"
            footerContent="> He doesn’t follow indicators. He creates them."
          >
            <div className="mb-4 text-center">
              <BarChartBig className="h-10 w-10 md:h-12 md:w-12 text-primary inline-block mb-2" />
              <p className="text-lg sm:text-xl md:text-2xl text-foreground/80 font-terminal-body">
                You don’t chase charts. You activate Shadow.
                <br />
                Choose a symbol, timeframe, and risk — and Shadow does the rest. His quantum core processes liquidity fractals, mempool patterns, and whale wallets in real-time.
              </p>
            </div>
            
            <div className="mt-4 pt-3 border-t border-primary/30">
              <h3 className="text-xl sm:text-2xl font-semibold font-terminal-heading text-primary mb-3 text-center">&gt; YOU_WILL_SEE:</h3>
              <ul className="space-y-2.5 text-base sm:text-lg text-foreground/80 font-terminal-body max-w-md mx-auto">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start space-x-2.5 group">
                    <CheckSquare className="h-4 w-4 md:h-5 md:w-5 text-accent-green shrink-0 mt-1 group-hover:text-primary transition-colors" />
                    <span className="leading-snug" dangerouslySetInnerHTML={{ __html: feature.text }} />
                  </li>
                ))}
              </ul>
            </div>
          </TerminalCard>
        </AnimatedElement>
      </div>
    </section>
  );
}
