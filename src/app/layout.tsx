
import type { Metadata } from 'next';
import { Inter, Space_Grotesk, Space_Mono } from 'next/font/google';
import Script from 'next/script';
import './globals.css';
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from '@/components/ThemeProvider';

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

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  weight: ['400', '500', '700'],
});


export const metadata: Metadata = {
  title: 'QuantumTrader: AI Trading Analyst',
  description: "The world's first AI trade analyst powered by quantum computing. See market moves before they happen.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${space_grotesk.variable} ${space_mono.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Removed direct Google Font links, next/font handles this */}
        {/* Add Three.js CDN Script */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js" strategy="beforeInteractive" />
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        <ThemeProvider defaultTheme="light" storageKey="quantumtrader-theme">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
