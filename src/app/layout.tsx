import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from "@/components/ui/toaster"; // Added Toaster for potential future use

export const metadata: Metadata = {
  title: 'BlockSmithAI Landing Page',
  description: 'The AI-Powered toolkit for the Blockchain & Web3 space',
};

// Define font variables for Inter and Space Grotesk
const inter = {
  variable: '--font-inter',
  // Assuming 'Inter' from globals.css will be loaded via <link>
};

const spaceGrotesk = {
  variable: '--font-space-grotesk',
  // Assuming 'Space Grotesk' will be loaded via <link>
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body className="font-body antialiased">
        {children}
        <Toaster />
      </body>
    </html>
  );
}
