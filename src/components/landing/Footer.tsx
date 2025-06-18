
import Link from 'next/link';
import { Sparkles, Terminal } from 'lucide-react';
import HeroParticleAnimation from './HeroParticleAnimation';
import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa';

const mainNavLinks = [
  { name: 'Origin', href: '#origin-story-mission-vision' },
  { name: 'Ecosystem', href: '#shadow-ecosystem' },
  { name: 'Roadmap', href: '#roadmap' },
  { name: 'Apply', href: '#early-access-cta' },
];

const socialIcons = [
  { icon: FaTwitter, href: '#', name: 'Twitter' },
  { icon: FaTelegramPlane, href: '#', name: 'Telegram' },
  { icon: FaDiscord, href: '#', name: 'Discord' },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-primary/50 shadow-[0_-5px_15px_-5px_hsl(var(--primary)/0.4)] text-foreground bg-background/70 backdrop-blur-sm overflow-hidden py-6 md:py-8">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-10">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center font-terminal-body">
        <div className="mb-5">
          <Link href="/" className="inline-flex items-center space-x-1.5 mb-2 group">
            <Sparkles className="h-6 w-6 text-primary group-hover:text-accent transition-colors" />
            <span className="text-lg font-bold font-terminal-heading text-primary group-hover:text-accent transition-colors">Shadow</span>
          </Link>
          <p className="text-xs text-foreground/70">
            &copy; {new Date().getFullYear()} BlockShadow — Autonomous Intelligence for the Decentralized Era.
          </p>
          <p className="text-xs text-primary/80 italic mt-0.5">
            “You don’t use Shadow. You sync with him.”
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-3 gap-y-1.5 mb-5">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-xs text-foreground/70 hover:text-primary hover:underline transition-colors uppercase"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center space-x-3.5">
          {socialIcons.map((social) => (
            <Link
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
              className="text-foreground/60 hover:text-primary transition-colors"
            >
              <social.icon className="h-4 w-4" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
