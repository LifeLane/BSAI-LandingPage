
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import { ThemeToggle } from '@/components/ThemeToggle';
import { useTheme } from '@/components/ThemeProvider'; // Added useTheme

const navigationItems = [
  { name: 'The Origin', href: '#origin-story-mission-vision' },
  { name: 'Ecosystem', href: '#shadow-ecosystem' },
  { name: 'Signal Terminal', href: '#signal-terminal'},
  { name: 'Roadmap', href: '#roadmap' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme } = useTheme(); // Get current theme

  return (
    <header className={cn(
      "sticky top-0 w-full z-30",
       theme === 'dark' ? 'bg-[hsl(0,0%,5%)]' : 'bg-transparent', // Space black for dark, transparent for light
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2 group" id="header-logo-container">
            <Sparkles className="h-7 w-7 text-primary group-hover:text-accent transition-colors duration-300" id="header-logo-icon" />
            <span className="text-2xl font-terminal-heading font-bold text-primary group-hover:text-accent transition-colors duration-300" id="header-logo-text">Shadow</span>
          </Link>

          <nav className="hidden md:flex space-x-1 items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-xs font-terminal-body text-foreground/80 hover:text-primary px-3 py-2 rounded-sm transition-colors duration-200 hover:bg-primary/10"
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Button
              variant="outline"
              size="sm"
              className="ml-3"
              onClick={() => {
                const earlyAccessSection = document.getElementById('early-access-cta');
                if (earlyAccessSection) {
                  earlyAccessSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              APPLY FOR ACCESS
            </Button>
            <ThemeToggle className="ml-2 text-foreground/80 hover:text-primary" />
          </nav>

          <div className="md:hidden flex items-center">
            <ThemeToggle className="mr-2 text-foreground/80 hover:text-primary" />
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground/80 hover:text-primary">
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className={cn(
          "md:hidden shadow-lg border-t border-primary/30",
          theme === 'dark' ? 'bg-[hsl(0,0%,5%)]/95 backdrop-blur-md' : 'bg-background/95 backdrop-blur-md' // Adjusted mobile menu bg
        )}>
          <nav className="flex flex-col space-y-1 p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-sm font-terminal-body text-foreground/90 hover:text-primary hover:bg-primary/10 rounded-sm transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name.toUpperCase()}
              </Link>
            ))}
            <Button
              variant="outline"
              className="w-full mt-3 text-sm"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const earlyAccessSection = document.getElementById('early-access-cta');
                if (earlyAccessSection) {
                  earlyAccessSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              APPLY FOR ACCESS
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
    
