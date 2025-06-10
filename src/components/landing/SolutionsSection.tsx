import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { User, Code, BriefcaseBusiness, Palette } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const solutions = [
  {
    icon: User,
    title: 'For Individuals',
    description: 'Explore Web3 with ease. Generate NFTs, understand smart contracts, and get AI-powered insights for your crypto journey.',
  },
  {
    icon: Code,
    title: 'For Developers',
    description: 'Accelerate your development. Use AI to generate, debug, and audit smart contracts, saving time and resources.',
  },
  {
    icon: BriefcaseBusiness,
    title: 'For Businesses',
    description: 'Integrate blockchain solutions seamlessly. Leverage AI for market analysis, secure contract deployment, and innovative Web3 strategies.',
  },
   {
    icon: Palette,
    title: 'For Creators',
    description: 'Unleash your creativity with AI-powered NFT generation, content creation tools, and community building utilities in the Web3 space.',
  }
];

export default function SolutionsSection() {
  return (
    <section id="solutions" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            BlockSmithAI Solutions for <span className="text-primary">Every Web3 User</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Whether you're an individual, developer, or a business, BlockSmithAI provides tailored AI tools to navigate and build in the Web3 ecosystem.
          </p>
        </AnimatedElement>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((solution, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card transform hover:-translate-y-1">
                <CardHeader className="items-center text-center">
                  <div className="p-4 bg-primary/10 rounded-full inline-block mb-4">
                    <solution.icon className="h-10 w-10 text-primary" />
                  </div>
                  <CardTitle className="font-headline text-xl">{solution.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground text-sm">{solution.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
