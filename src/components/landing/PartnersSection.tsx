import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

// Updated to be "Social Proof Bar"
const partnerLogos = [
  { src: 'https://placehold.co/150x60.png', alt: 'CoinDesk Logo Placeholder', hint: "crypto media logo" },
  { src: 'https://placehold.co/150x60.png', alt: 'Decrypt Logo Placeholder', hint: "blockchain news logo" },
  { src: 'https://placehold.co/150x60.png', alt: 'TechCrunch Logo Placeholder', hint: "tech publication logo" },
  { src: 'https://placehold.co/150x60.png', alt: 'Solana Logo Placeholder', hint: "solana blockchain logo" },
  { src: 'https://placehold.co/150x60.png', alt: 'Raydium Logo Placeholder', hint: "raydium defi logo" },
  { src: 'https://placehold.co/150x60.png', alt: 'Venture Capital Placeholder', hint: "venture capital firm logo" },
];

export default function SocialProofBar() { // Renamed component
  return (
    <section id="social-proof" className="py-12 md:py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-8 md:mb-10">
          <h2 className="text-sm font-semibold font-body tracking-wider text-muted-foreground uppercase">
            As Featured In (or Soon to be)
          </h2>
        </AnimatedElement>
        <AnimatedElement delay="delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center opacity-70 hover:opacity-100 transition-opacity duration-300 transform hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50} 
                  objectFit="contain"
                  data-ai-hint={logo.hint}
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
