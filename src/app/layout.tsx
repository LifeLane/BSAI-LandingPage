
import type { Metadata } from 'next';
import { Space_Grotesk, Space_Mono, Courier_Prime, Share_Tech_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';
import HeroParticleAnimation from '@/components/landing/HeroParticleAnimation';

const space_grotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  weight: ['400', '500', '700'],
});

const space_mono = Space_Mono({
  subsets: ['latin'],
  variable: '--font-space-mono',
  weight: ['400', '700'],
});

const courier_prime = Courier_Prime({
  subsets: ['latin'],
  variable: '--font-courier-prime',
  weight: ['400', '700'],
});

const share_tech_mono = Share_Tech_Mono({
  subsets: ['latin'],
  variable: '--font-share-tech-mono',
  weight: ['400'],
});

export const metadata: Metadata = {
  title: 'Shadow: Quantum AI Trading',
  description: "Shadow: Where Quantum Intelligence Hunts Market Profits. Evolved, not built.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space_grotesk.variable} ${space_mono.variable} ${courier_prime.variable} ${share_tech_mono.variable}`} suppressHydrationWarning>
      <head>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-terminal-body antialiased bg-background text-foreground">
        <ThemeProvider defaultTheme="dark" storageKey="shadow-theme">
          <HeroParticleAnimation />
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
