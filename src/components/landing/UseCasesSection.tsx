
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, ShieldAlert, Aperture, LineChart, Lightbulb, Puzzle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const useCases = [
  {
    iconComponent: FileJson, // Renamed from icon to avoid conflict if we pass it down
    title: 'Smart Contract Creation',
    description: 'Effortlessly generate custom smart contracts for various blockchain platforms.',
    imageHint: "code interface contract"
  },
  {
    iconComponent: ShieldAlert,
    title: 'Security Auditing',
    description: 'Leverage AI to identify potential vulnerabilities in your smart contracts.',
    imageHint: "security shield code"
  },
  {
    iconComponent: Aperture,
    title: 'NFT Generation & Art',
    description: 'Create unique digital art and NFT collections with AI-powered tools.',
    imageHint: "abstract art digital"
  },
  {
    iconComponent: LineChart,
    title: 'Market Trend Analysis',
    description: 'Utilize AI for predictive analysis and insights into crypto market trends.',
    imageHint: "data chart graph"
  },
  {
    iconComponent: Lightbulb,
    title: 'Web3 Project Ideation',
    description: 'Brainstorm and validate new Web3 project ideas with AI assistance.',
    imageHint: "innovation lightbulb tech"
  },
  {
    iconComponent: Puzzle,
    title: 'dApp Development',
    description: 'Streamline decentralized application development with AI-powered coding tools.',
    imageHint: "puzzle pieces connection"
  },
];

export default function UseCasesSection() {
  return (
    <section id="use-cases" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            Powerful <span className="text-primary">Use Cases</span> for BlockSmithAI
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Discover how BlockSmithAI can be applied across various Web3 domains to drive innovation and efficiency.
          </p>
        </AnimatedElement>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card transform hover:-translate-y-1 overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={`https://placehold.co/288x192.png?a=uc${index}`}
                    alt={useCase.title}
                    layout="fill"
                    objectFit="cover"
                    data-ai-hint={useCase.imageHint}
                  />
                </div>
                <CardHeader>
                  <CardTitle className="font-headline text-xl">{useCase.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{useCase.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
