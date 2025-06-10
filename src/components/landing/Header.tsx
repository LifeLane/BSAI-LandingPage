"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles } from 'lucide-react';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const navigationItems = [
  { name: 'The Problem', href: '#problem-solution' },
  { name: 'How It Works', href: '#how-it-works' },
  { name: 'Benefits', href: '#benefits' },
];

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-card/80 backdrop-blur-md shadow-lg border-b border-border/30" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center space-x-2">
            <Sparkles className="h-8 w-8 text-primary" />
            <span className="text-2xl font-bold font-headline text-foreground">BlockSmithAI</span>
          </Link>

          <nav className="hidden md:flex space-x-1 items-center">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary px-3 py-2 rounded-md transition-colors duration-200 hover:bg-primary/10"
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="ml-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md hover:shadow-primary/30 transition-all duration-300"
              onClick={() => {
                const whitelistSection = document.getElementById('whitelist-gate');
                if (whitelistSection) {
                  whitelistSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Whitelisted
            </Button>
          </nav>

          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-foreground hover:text-primary">
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card shadow-lg border-t border-border/30">
          <nav className="flex flex-col space-y-1 p-4">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-primary/10 rounded-md transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <Button
              variant="default"
              className="w-full mt-2 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-md hover:shadow-primary/30"
              onClick={() => {
                setIsMobileMenuOpen(false);
                const whitelistSection = document.getElementById('whitelist-gate');
                if (whitelistSection) {
                  whitelistSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get Whitelisted
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
