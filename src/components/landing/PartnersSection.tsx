import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

const partnerLogos = [
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c658435f2c12337bc551e_google_logo.svg', alt: 'Google Logo', hint: "tech logo" },
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c6584334e361029a2e823_nvidia_logo.svg', alt: 'Nvidia Logo', hint: "finance logo" },
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c6584e255e052834e0040_bnb_chain_logo.svg', alt: 'BNB Chain Logo', hint: "blockchain logo" },
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c65859a43297ffc682a2e_certik_logo.svg', alt: 'Certik Logo', hint: "startup logo" },
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c658552d918a96198e728_tron_logo.svg', alt: 'Tron Logo', hint: "innovation logo" },
  { src: 'https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/646c6584625009700fa714c2_kucoin_logo.svg', alt: 'KuCoin Logo', hint: "web3 logo" },
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
