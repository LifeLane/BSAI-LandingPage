import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollText, ShieldCheck, BarChart3, Images, BrainCircuit, BotMessageSquare } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const tools = [
  {
    icon: ScrollText,
    title: 'AI Smart Contract Generator',
    description: 'Generate secure and optimized smart contracts with simple prompts.',
  },
  {
    icon: ShieldCheck,
    title: 'AI Smart Contract Auditor',
    description: 'Automatically audit your smart contracts for vulnerabilities.',
  },
  {
    icon: Images,
    title: 'AI NFT Generator',
    description: 'Create unique NFT collections using AI-powered art generation.',
  },
  {
    icon: BarChart3,
    title: 'AI Blockchain Analytics',
    description: 'Gain deep insights from blockchain data with AI-driven analysis.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Model Training',
    description: 'Train custom AI models tailored to your specific Web3 needs.',
  },
  {
    icon: BotMessageSquare,
    title: 'AI Web3 Assistant',
    description: 'Your personal AI guide for all things blockchain and Web3.',
  },
];

export default function ToolsSection() {
  return (
    <section id="tools" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            BlockSmithAI Suite of <span className="text-primary">AI Tools</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Explore our powerful AI tools designed to enhance your Web3 experience and productivity.
          </p>
        </AnimatedElement>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card transform hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-primary/10 rounded-lg">
                      <tool.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="font-headline text-xl">{tool.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{tool.description}</p>
                </CardContent>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
