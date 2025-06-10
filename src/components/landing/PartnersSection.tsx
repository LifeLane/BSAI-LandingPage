
import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

// Updated to be "Social Proof Bar"
const partnerLogos = [
  { src: 'https://placehold.co/150x60.png', alt: 'CoinDesk Logo', hint: "financial news" },
  { src: 'https://placehold.co/150x60.png', alt: 'Decrypt Logo', hint: "crypto publication" },
  { src: 'https://placehold.co/150x60.png', alt: 'TechCrunch Logo', hint: "tech news" },
  { src: 'https://placehold.co/150x60.png', alt: 'Solana Logo', hint: "blockchain platform" },
  { src: 'https://placehold.co/150x60.png', alt: 'Raydium Logo', hint: "defi launchpad" },
  { src: 'https://placehold.co/150x60.png', alt: 'Venture Capital Logo', hint: "venture capital" },
];

export default function SocialProofBar() { // Renamed component
  return (
    <section id="social-proof" className="py-12 md:py-16 bg-background border-y border-border/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-8 md:mb-10">
          <h2 className="text-sm font-semibold font-body tracking-wider text-muted-foreground uppercase">
            As Featured In (or Soon to be)
          </h2>
        </AnimatedElement>
        <AnimatedElement delay="delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 transform hover:scale-110">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={50} 
                  objectFit="contain"
                  data-ai-hint={logo.hint}
                />
              </div>
            ))}
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
