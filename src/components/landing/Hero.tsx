
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight, Users, Zap, Briefcase } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function Hero() {
  const stats = [
    { value: '1M+', label: 'Users Trust Us', icon: Users },
    { value: '100M+', label: 'AI Requests Served', icon: Zap },
    { value: '50+', label: 'Enterprise Partners', icon: Briefcase },
  ];

  return (
    <section className="relative bg-gradient-to-br from-background to-muted pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <Image
          src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64d9d5f89cc52bd948b9d53b_Chain-GPT.jpg"
          alt="ChainGPT themed abstract background"
          layout="fill"
          objectFit="cover"
          data-ai-hint="abstract technology network"
          priority
        />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-headline tracking-tight text-foreground">
            The AI-Powered Toolkit for the <span className="text-primary">Blockchain & Web3</span> Space
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            BlockSmithAI revolutionizes how you interact with blockchain technology. From smart contract generation to NFT creation and market analysis, our suite of AI tools empowers individuals, developers, and businesses.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg transform hover:scale-105 transition-transform duration-300">
              Launch App <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button size="lg" variant="outline" className="shadow-lg transform hover:scale-105 transition-transform duration-300">
              Learn More
            </Button>
          </div>
        </AnimatedElement>

        <AnimatedElement className="mt-16 md:mt-24" delay="delay-200">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-card/50 backdrop-blur-sm rounded-xl shadow-lg border border-border/30">
                <stat.icon className="h-10 w-10 text-primary mb-3" />
                <p className="text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
       {/* Decorative shapes */}
       <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-accent/20 rounded-full filter blur-2xl animate-pulse opacity-50"></div>
       <div className="absolute bottom-1/4 right-1/4 w-32 h-32 bg-primary/20 rounded-full filter blur-2xl animate-pulse animation-delay-2000 opacity-50"></div>
    </section>
  );
}
