import { Button } from '@/components/ui/button';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaGithub, FaMediumM } from 'react-icons/fa';
import AnimatedElement from './AnimatedElement';

const socialLinks = [
  { name: 'Twitter', icon: FaTwitter, href: '#' },
  { name: 'Telegram', icon: FaTelegramPlane, href: '#' },
  { name: 'Discord', icon: FaDiscord, href: '#' },
  { name: 'GitHub', icon: FaGithub, href: '#' },
  { name: 'Medium', icon: FaMediumM, href: '#' },
];

export default function CommunitySection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6">
            Join Our <span className="text-primary">Vibrant Community</span>
          </h2>
          <p className="max-w-xl mx-auto text-lg text-muted-foreground mb-10">
            Connect with fellow BlockSmithAI users, developers, and enthusiasts. Stay updated, share ideas, and contribute to the future of AI in Web3.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <AnimatedElement key={index} delay={`delay-${index * 100}`}>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-40 h-16 flex flex-col items-center justify-center space-y-1 shadow-md hover:shadow-lg transition-shadow hover:border-primary group"
                  asChild
                >
                  <a href={social.href} target="_blank" rel="noopener noreferrer">
                    <social.icon className="h-6 w-6 text-foreground group-hover:text-primary transition-colors" />
                    <span className="text-sm text-muted-foreground group-hover:text-primary transition-colors">{social.name}</span>
                  </a>
                </Button>
              </AnimatedElement>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
