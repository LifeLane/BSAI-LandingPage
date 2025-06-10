import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

const partnerLogos = [
  { src: 'https://placehold.co/150x60.png?text=Partner+1', alt: 'Partner 1', hint: "tech logo" },
  { src: 'https://placehold.co/150x60.png?text=Partner+2', alt: 'Partner 2', hint: "finance logo" },
  { src: 'https://placehold.co/150x60.png?text=Partner+3', alt: 'Partner 3', hint: "blockchain logo" },
  { src: 'https://placehold.co/150x60.png?text=Partner+4', alt: 'Partner 4', hint: "startup logo" },
  { src: 'https://placehold.co/150x60.png?text=Partner+5', alt: 'Partner 5', hint: "innovation logo" },
  { src: 'https://placehold.co/150x60.png?text=Partner+6', alt: 'Partner 6', hint: "web3 logo" },
];

export default function PartnersSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            Trusted by <span className="text-primary">Industry Leaders</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We collaborate with leading organizations to push the boundaries of AI and Web3.
          </p>
        </AnimatedElement>
        <AnimatedElement delay="delay-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center">
            {partnerLogos.map((logo, index) => (
              <div key={index} className="flex justify-center grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={60}
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
