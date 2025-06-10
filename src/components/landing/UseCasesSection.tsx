
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileJson, ShieldAlert, Aperture, LineChart, Lightbulb, Puzzle } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const useCases = [
  {
    iconComponent: FileJson, 
    title: 'Smart Contract Creation',
    description: 'Effortlessly generate custom smart contracts for various blockchain platforms.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645c94ce88833c179c3c28ff_smart_contract_generator_feature_graphic.png",
    imageHint: "code interface contract"
  },
  {
    iconComponent: ShieldAlert,
    title: 'Security Auditing',
    description: 'Leverage AI to identify potential vulnerabilities in your smart contracts.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645c94df08b355c45c679420_smart_contract_auditor_feature_graphic.png",
    imageHint: "security shield code"
  },
  {
    iconComponent: Aperture,
    title: 'NFT Generation & Art',
    description: 'Create unique digital art and NFT collections with AI-powered tools.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645c94efcf9568df8cd62462_nft_generator_feature_graphic.png",
    imageHint: "abstract art digital"
  },
  {
    iconComponent: LineChart,
    title: 'Market Trend Analysis',
    description: 'Utilize AI for predictive analysis and insights into crypto market trends.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/650c0aa39a7bd7512632a0bc_AI-Trading-Assistant-p-1080.png",
    imageHint: "data chart graph"
  },
  {
    iconComponent: Lightbulb,
    title: 'Web3 Project Ideation',
    description: 'Brainstorm and validate new Web3 project ideas with AI assistance.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645c954ce27021cf8d1c2c04_ask_crypto_people_feature_graphic.png",
    imageHint: "innovation lightbulb tech"
  },
  {
    iconComponent: Puzzle,
    title: 'dApp Development',
    description: 'Streamline decentralized application development with AI-powered coding tools.',
    imageSrc: "https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/64a670654238061b518372e8_SDK%26API-Access-p-1080.png",
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
                    src={useCase.imageSrc}
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
