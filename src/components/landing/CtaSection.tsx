import { Button } from '@/components/ui/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

export default function CtaSection() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-primary to-accent text-primary-foreground">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center">
          <Sparkles className="h-16 w-16 mx-auto mb-6 text-background" />
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-headline mb-6">
            Build The Future Of Web3 With BlockSmithAI
          </h2>
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-primary-foreground/80 mb-10">
            Ready to revolutionize your blockchain experience? Get started with BlockSmithAI today and unlock the power of AI for your Web3 projects.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="bg-background text-primary hover:bg-background/90 border-transparent shadow-xl transform hover:scale-105 transition-transform duration-300"
          >
            Get Started Now <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
