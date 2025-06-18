
"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { Button } from '@/components/ui/button';
import { ListChecks, Coins, ShoppingCart, BarChartHorizontalBig } from 'lucide-react';
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const bsaiUses = [
  "Unlock premium Shadow modules",
  "Access encrypted data feeds",
  "Deploy agents on your behalf",
  "Train and mutate new strategies",
  "Join liquidity vaults and stake rewards",
];

const tokenomicsDetails = [
  { label: "Genesis Offering", value: "20%", percentage: 20, color: "hsl(var(--chart-1))" },
  { label: "Ecosystem Growth", value: "25%", percentage: 25, color: "hsl(var(--chart-2))" },
  { label: "Staking Rewards", value: "20%", percentage: 20, color: "hsl(var(--chart-3))" },
  { label: "Labs & Dev", value: "15%", percentage: 15, color: "hsl(var(--chart-4))" },
  { label: "Shadow Reserve", value: "10%", percentage: 10, color: "hsl(var(--chart-5))" },
  { label: "Advisors", value: "5%", percentage: 5, color: "hsl(var(--primary))" },
  { label: "Liquidity", value: "5%", percentage: 5, color: "hsl(var(--accent))" },
];


export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const maxSupplyRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  itemRefs.current = []; 
  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !itemRefs.current.includes(el)) {
      itemRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100", 
        toggleActions: "play none none none", 
      }
    });

    if (maxSupplyRef.current) {
      const supplyTarget = 1000000000; 
      const supplyObject = { value: 0 };
      tl.to(supplyObject, {
        value: supplyTarget,
        duration: 1.5, 
        ease: "power1.out",
        onUpdate: () => {
          if (maxSupplyRef.current) {
            maxSupplyRef.current.textContent = Math.round(supplyObject.value).toLocaleString();
          }
        }
      }, "start"); 
    }

    itemRefs.current.forEach((el, index) => {
      if (el) {
        const bar = el.querySelector(".token-bar-fill") as HTMLDivElement;
        const percentageText = el.querySelector(".token-percentage-text") as HTMLSpanElement;
        const data = tokenomicsDetails[index];

        if (bar) {
          tl.fromTo(bar, 
            { width: '0%' }, 
            { width: `${data.percentage}%`, duration: 1, ease: "power2.out" } 
          , `start+=${index * 0.1}`); 
        }
        if (percentageText) {
           tl.fromTo(percentageText,
            { opacity: 0, y:5 },
            { opacity: 1, y: 0, duration: 0.4, ease: "power1.out" }
          , `start+=${index * 0.1 + 0.3}`); 
        }
      }
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); 

  return (
    <section id="tokenomics" className="relative py-16 md:py-24 overflow-hidden w-full" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatedElement className="text-center mb-10 md:mb-16">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold font-headline text-foreground">
            🧬 BSAI — The <span className="text-primary">Neural Fuel</span>
          </h2>
          <CardDescription className="mt-4 text-xl sm:text-2xl text-muted-foreground font-body max-w-2xl mx-auto">
            This isn’t governance. This is communion. BSAI is how you sync with Shadow.
          </CardDescription>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 gap-8 md:gap-12 items-start">
          <AnimatedElement delay="delay-100">
            <Card className="w-full h-full shadow-xl bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/50 transform transition-all duration-300 hover:-translate-y-1.5">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                  <ListChecks className="h-8 w-8 md:h-9 md:w-9 text-primary" />
                  <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-headline text-foreground">Use BSAI to:</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2 pl-8 pr-4 sm:pr-6">
                <ul className="list-disc list-outside space-y-2 text-lg sm:text-xl text-muted-foreground marker:text-primary">
                  {bsaiUses.map((use, index) => (
                    <li key={index} className="group hover:text-foreground transition-colors">{use}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </AnimatedElement>

          <AnimatedElement>
            <Card className="w-full h-full shadow-xl bg-card/70 backdrop-blur-sm border border-border/50 hover:border-primary/50 transform transition-all duration-300 hover:-translate-y-1.5">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-3">
                   <BarChartHorizontalBig className="h-8 w-8 md:h-9 md:w-9 text-primary" />
                   <CardTitle className="text-2xl sm:text-3xl md:text-4xl font-headline text-foreground">Token Allocation</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="px-4 sm:px-6 py-6 space-y-5">
                <div className="text-center mb-4">
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-muted-foreground">
                    Supply: <span ref={maxSupplyRef} className="text-primary font-bold">0</span> BSAI (hard cap)
                  </p>
                  <p className="text-lg sm:text-xl text-muted-foreground">Launch Type: Public Genesis Offering</p>
                </div>
                <div className="space-y-3">
                  {tokenomicsDetails.map((item, index) => (
                    <div 
                      key={item.label} 
                      className="flex flex-col sm:flex-row items-start sm:items-center hover:bg-muted/30 px-1.5 py-1.5 rounded-md transition-colors duration-150"
                      ref={addToRefs} 
                    >
                      <span className="w-full sm:w-2/5 text-base sm:text-lg text-muted-foreground sm:text-right sm:pr-2 mb-0.5 sm:mb-0">{item.label}:</span>
                      <div className="w-full sm:w-3/5 flex items-center">
                        <div className="flex-grow h-3.5 bg-muted rounded-sm overflow-hidden relative mr-2">
                          <div 
                            className="token-bar-fill absolute top-0 left-0 h-full rounded-sm"
                            style={{ 
                              width: '0%', 
                              backgroundColor: item.color 
                            }} 
                          ></div>
                        </div>
                        <span className="token-percentage-text text-base sm:text-lg font-semibold text-foreground w-12 text-left opacity-0">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
         <AnimatedElement className="mt-12 md:mt-16 text-center space-y-4 sm:space-y-0 sm:space-x-6">
            <Button size="lg" className="w-full sm:w-auto px-10 py-7 text-xl sm:text-2xl font-headline bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground shadow-lg hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 glow-button">
                <ShoppingCart className="mr-2.5 h-6 w-6" /> 🎯 Join the Sale
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-10 py-7 text-xl sm:text-2xl font-headline text-foreground hover:bg-primary/10 hover:border-primary">
                <Coins className="mr-2.5 h-6 w-6" /> 🧠 View Tokenomics
            </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
