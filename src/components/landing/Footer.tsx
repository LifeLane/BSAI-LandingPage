
import Link from 'next/link';
import { Sparkles } from 'lucide-react';
import { FaTwitter, FaTelegramPlane, FaDiscord, FaGithub, FaMediumM } from 'react-icons/fa';
import HeroParticleAnimation from './HeroParticleAnimation';

const footerLinks = [
  {
    category: 'Product',
    links: [
      { name: 'AI Tools', href: '#tools' },
      { name: 'Solutions', href: '#solutions' },
      { name: 'Use Cases', href: '#use-cases' },
      { name: 'Pricing', href: '#' },
    ],
  },
  {
    category: 'Company',
    links: [
      { name: 'About Us', href: '#company' },
      { name: 'Blog', href: '#' },
      { name: 'Careers', href: '#' },
      { name: 'Contact Us', href: '#' },
    ],
  },
  {
    category: 'Resources',
    links: [
      { name: 'Documentation', href: '#' },
      { name: 'API Reference', href: '#' },
      { name: 'Support', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
  },
];

const socialIcons = [
  { icon: FaTwitter, href: '#', name: 'Twitter' },
  { icon: FaTelegramPlane, href: '#', name: 'Telegram' },
  { icon: FaDiscord, href: '#', name: 'Discord' },
  { icon: FaGithub, href: '#', name: 'GitHub' },
  { icon: FaMediumM, href: '#', name: 'Medium' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-border/50 text-card-foreground overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Sparkles className="h-8 w-8 text-primary" />
              <span className="text-2xl font-bold font-headline">BlockSmithAI</span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The AI-Powered toolkit for the Blockchain & Web3 space.
            </p>
          </div>

          {footerLinks.map((section) => (
            <div key={section.category}>
              <h3 className="text-md font-headline font-semibold mb-4">{section.category}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border/50 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} BlockSmithAI. All rights reserved.
          </p>
          <div className="flex space-x-4">
            {socialIcons.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <social.icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
