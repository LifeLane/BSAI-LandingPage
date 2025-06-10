import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import AnimatedElement from './AnimatedElement';

const blogPosts = [
  {
    title: 'The Future of Smart Contracts with AI',
    date: 'July 26, 2024',
    excerpt: 'Discover how AI is revolutionizing smart contract development, making it faster, safer, and more accessible...',
    imageUrl: 'https://placehold.co/600x400.png?a=3',
    imageHint: "futuristic code blockchain",
    slug: '#',
  },
  {
    title: 'AI-Powered NFT Generation: A New Era for Creators',
    date: 'July 20, 2024',
    excerpt: 'Unleash your creativity with AI tools that can generate unique and stunning NFT collections from simple text prompts...',
    imageUrl: 'https://placehold.co/600x400.png?a=4',
    imageHint: "digital art creation",
    slug: '#',
  },
  {
    title: 'Securing Your dApps: An AI Approach to Auditing',
    date: 'July 15, 2024',
    excerpt: 'Learn how BlockSmithAI uses advanced AI algorithms to audit smart contracts and enhance the security of your decentralized applications...',
    imageUrl: 'https://placehold.co/600x400.png?a=5',
    imageHint: "cyber security shield",
    slug: '#',
  },
];

export default function BlogSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            Latest from <span className="text-primary">Our Blog</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            Stay informed with the latest news, insights, and updates from the BlockSmithAI team.
          </p>
        </AnimatedElement>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <AnimatedElement key={index} delay={`delay-${index * 100}`}>
              <Card className="h-full flex flex-col shadow-lg hover:shadow-xl transition-shadow duration-300 bg-card transform hover:-translate-y-1 overflow-hidden">
                <Link href={post.slug} className="block">
                  <div className="relative w-full h-56">
                    <Image
                      src={post.imageUrl}
                      alt={post.title}
                      layout="fill"
                      objectFit="cover"
                      data-ai-hint={post.imageHint}
                    />
                  </div>
                </Link>
                <CardHeader>
                  <CardTitle className="font-headline text-xl hover:text-primary transition-colors">
                    <Link href={post.slug}>{post.title}</Link>
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">{post.date}</p>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="text-muted-foreground text-sm">{post.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button variant="link" asChild className="text-primary p-0 hover:underline">
                    <Link href={post.slug}>
                      Read More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </AnimatedElement>
          ))}
        </div>
      </div>
    </section>
  );
}
