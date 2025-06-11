
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Package, Users } from 'lucide-react'; 
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';

const benefits = [
  {
    icon: Award, 
    title: 'Attractive Staking Rewards',
    description: 'Earn passive income just for securing the network and holding BSAI tokens. Let your assets work for you while you benefit from BlockSmithAI tools.',
  },
  {
    icon: Package, 
    title: 'Priority Access to Future Tools',
    description: "You're not just getting a tool; you're investing in an ecosystem. Be first in line for our Self-Custody Wallet, Swap Protocol, and AI Token Factory.",
  },
  {
    icon: Users,
    title: 'Community & Governance',
    description: 'Have a say in the future of BlockSmithAI. Your tokens are your vote, shaping the development and direction of our platform and tools.',
  },
];

const futureEcosystem = [
  {
    title: 'Quantum-Safe Self-Custody Wallet',
  },
  {
    title: 'AI-Powered Token Creator',
  },
  {
    title: 'Quantum Liquidity Protocol',
  },
  {
    title: 'Self-Regulating AI DAO Governance',
  },
];

const tokenomics = [
  { label: 'Max Supply', value: '1,000,000,000 BSAI' },
  { label: '40%', value: 'Ecosystem & Rewards' },
  { label: '20%', value: 'Team (Locked 24 months)' },
  { label: '15%', value: 'Liquidity' },
  { label: '10%', value: 'Public Sale' },
  { label: '10%', value: 'Treasury & DAO' },
  { label: '5%', value: 'Marketing & Partnerships' },
];

export default function BenefitsSection() {
  return (
    <section id="benefits" className="relative py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            More Than Just Tools, It's an <span className="text-primary">Ecosystem</span>\
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            Becoming a BSAI holder unlocks a suite of benefits designed for long-term value and community growth.
          </p>
        </AnimatedElement>
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-8 benefit-card-grid">
          {benefits.map((benefit, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border hover:border-primary transform hover:-translate-y-2 group overflow-hidden hover:scale-105 benefit-card-inner">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 group-hover:border-primary transition-colors">
                      <benefit.icon className="h-8 w-8 text-primary group-hover:scale-110 transition-transform" />
                    </div>
                    <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors benefit-title">{benefit.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body text-base benefit-description">{benefit.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
