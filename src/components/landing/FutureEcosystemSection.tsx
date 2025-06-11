import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import AnimatedElement from './AnimatedElement'; // Assuming AnimatedElement is needed and in the same directory

const futureEcosystemItems = [
  {
    title: 'Quantum-Safe Self-Custody Wallet',
    description: 'Develop a secure wallet resilient to quantum computing threats.',
  },
  {
    title: 'AI-Powered Token Creator',
    description: 'Allow users to easily create and deploy their own tokens with AI assistance.',
  },
  {
    title: 'Quantum Liquidity Protocol',
    description: 'Explore and implement advanced liquidity solutions.',
  },
  {
    title: 'Self-Regulating AI DAO Governance',
    description: 'Implement a decentralized autonomous organization governed by AI.',
  },
];

export default function FutureEcosystemSection() {
  return (
    <section id="future-ecosystem" className="py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            🧠 Future Ecosystem &mdash; <span className="text-primary">What’s Next</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            Our roadmap for the future of the BlockSmithAI ecosystem.
          </p>
        </AnimatedElement>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {futureEcosystemItems.map((item, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border hover:border-primary transform hover:-translate-y-2 group overflow-hidden">
                <CardHeader>
                  {/* Optional: Add icons here if desired, similar to benefits section */}
                  <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground font-body text-base">{item.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}