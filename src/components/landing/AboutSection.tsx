
import Image from 'next/image';
import AnimatedElement from './AnimatedElement';

export default function AboutSection() {
  return (
    <section id="company" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedElement>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-square max-w-md mx-auto md:mx-0">
              <Image
                src="https://cdn.prod.website-files.com/64354b8ce4872ad8cd1c7b04/645a319977d1919596bf2e19_what_is_chaingpt_graphic.png"
                alt="What is ChainGPT illustration"
                layout="fill"
                objectFit="contain"
                className="rounded-lg"
                data-ai-hint="ai brain network"
              />
            </div>
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground mb-6">
                What is <span className="text-primary">BlockSmithAI</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-4">
                BlockSmithAI is a comprehensive suite of AI-powered tools designed to simplify and enhance interactions with blockchain and Web3 technologies. We leverage cutting-edge artificial intelligence to provide solutions for smart contract development, NFT generation, blockchain analytics, security auditing, and much more.
              </p>
              <p className="text-lg text-muted-foreground mb-4">
                Our mission is to democratize access to complex blockchain functionalities, making them accessible to everyone from individual enthusiasts and artists to seasoned developers and large enterprises. BlockSmithAI acts as your intelligent partner in navigating the decentralized world.
              </p>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Innovative AI-driven solutions
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  User-friendly interface
                </li>
                <li className="flex items-center">
                  <svg className="w-5 h-5 text-primary mr-2 shrink-0" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                  Secure and reliable platform
                </li>
              </ul>
            </div>
          </div>
        </AnimatedElement>
      </div>
    </section>
  );
}
