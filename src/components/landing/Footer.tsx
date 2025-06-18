
import Link from 'next/link';
import { Sparkles } from 'lucide-react'; // Assuming Sparkles remains the logo icon
import HeroParticleAnimation from './HeroParticleAnimation';
import { FaTwitter, FaTelegramPlane, FaDiscord } from 'react-icons/fa'; // Example social icons

const mainNavLinks = [
  { name: 'The Origin', href: '#origin-story-mission-vision' },
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
    <footer className="relative border-t border-primary/40 shadow-[0_-4px_12px_-3px_hsl(var(--primary)/0.3)] text-card-foreground overflow-hidden py-8 md:py-12 footer-glow">
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center space-x-2 mb-3">
            <Sparkles className="h-7 w-7 text-primary" />
            <span className="text-xl font-bold font-headline">Shadow</span>
          </Link>
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} BlockShadow — Autonomous Intelligence for the Decentralized Era.
          </p>
          <p className="text-xs text-muted-foreground/80 italic mt-1">
            “You don’t use Shadow. You sync with him.”
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-4 gap-y-2 mb-6">
          {mainNavLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <div className="flex justify-center space-x-4">
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
    </footer>
  );
}
