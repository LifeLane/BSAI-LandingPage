
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Gift, ShieldCheck, BarChartBig, Users, Send, Brain } from 'lucide-react'; // Example icons

const uprisingBenefits = [
  { icon: Gift, text: "Shadow Genesis NFTs" },
  { icon: ShieldCheck, text: "Airdrop Bonuses" },
  { icon: BarChartBig, text: "Vault Access" },
  { icon: Users, text: "Role Promotion" },
  { icon: Brain, text: "DAO Adaptation Syncs" },
];

export default function UprisingCtaSection() {
  return (
    <section id="uprising-cta" className="relative py-12 md:py-20 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="max-w-xl mx-auto">
          <Card className="bg-card/80 backdrop-blur-md shadow-2xl border-primary/50">
            <CardHeader className="text-center">
              <CardTitle className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
                🧲 Join the <span className="text-primary">Uprising</span>
              </CardTitle>
              <CardDescription className="mt-3 text-md sm:text-lg text-muted-foreground font-body">
                This is not a bot army. This is a mind collective.
                <br />
                Shadow selects by behavior. Not just wallets.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 text-center">
              <ul className="space-y-2 text-sm text-muted-foreground mb-6 text-left max-w-xs mx-auto">
                {uprisingBenefits.map((benefit, index) => (
                  <li key={index} className="flex items-center space-x-2 group hover:text-primary transition-colors">
                    <benefit.icon className="h-4 w-4 text-primary group-hover:text-accent transition-colors" />
                    <span>{benefit.text}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="w-full sm:w-auto text-md font-headline py-3 bg-gradient-to-r from-primary via-accent to-primary text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 glow-button"
                >
                  <Send className="mr-2 h-5 w-5" /> Submit to the Signal
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto text-md font-headline py-3 text-foreground hover:border-primary hover:text-primary hover:bg-primary/10"
                >
                  <Brain className="mr-2 h-5 w-5" /> Be Signal-Forged
                </Button>
              </div>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}
