
"use client";

import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import TerminalCard from './TerminalCard';
import { Button } from '@/components/ui/button';
import { ListChecks, Coins, ShoppingCart, BarChartHorizontalBig, Database, Terminal } from 'lucide-react';
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
  { label: "Genesis Offering", value: "20%", percentage: 20, color: "hsl(var(--chart-1))" }, // Cyan
  { label: "Ecosystem Growth", value: "25%", percentage: 25, color: "hsl(var(--chart-2))" }, // Magenta
  { label: "Staking Rewards", value: "20%", percentage: 20, color: "hsl(var(--chart-3))" }, // Green
  { label: "Labs & Dev", value: "15%", percentage: 15, color: "hsl(var(--chart-4))" },      // Yellow
  { label: "Shadow Reserve", value: "10%", percentage: 10, color: "hsl(var(--chart-5))" },  // Blue
  { label: "Advisors", value: "5%", percentage: 5, color: "hsl(var(--primary) / 0.7)" }, // Dimmer Cyan
  { label: "Liquidity", value: "5%", percentage: 5, color: "hsl(var(--accent) / 0.7)" },  // Dimmer Magenta
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
        start: "top center+=150", 
        toggleActions: "play none none none", 
      }
    });

    if (maxSupplyRef.current) {
      const supplyTarget = 1000000000; 
      const supplyObject = { value: 0 };
      tl.to(supplyObject, {
        value: supplyTarget,
        duration: 2, 
        ease: "power2.out",
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
            { width: `${data.percentage}%`, duration: 1.2, ease: "power2.out" } 
          , `start+=${index * 0.15}`); 
        }
        if (percentageText) {
           tl.fromTo(percentageText,
            { opacity: 0, y: 8 },
            { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
          , `start+=${index * 0.15 + 0.4}`); 
        }
      }
    });
    
    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []); 

  return (
    <section id="tokenomics" className="relative py-12 md:py-16 overflow-hidden w-full" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatedElement className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-terminal-heading text-primary">
            &gt; BSAI — THE NEURAL FUEL
          </h2>
          <p className="mt-3 text-lg sm:text-xl text-foreground/80 font-terminal-body max-w-xl mx-auto">
            This isn’t governance. This is communion. BSAI is how you sync with Shadow.
          </p>
        </AnimatedElement>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 md:gap-8 items-start">
          <div className="lg:col-span-2">
            <AnimatedElement delay="delay-100">
              <TerminalCard
                title="BSAI_UTILITY"
                titleIcon={<ListChecks className="h-4 w-4 text-primary/80" />}
                className="w-full h-full"
                contentClassName="text-sm md:text-base"
              >
                <ul className="space-y-2.5 text-foreground/80 font-terminal-body">
                  {bsaiUses.map((use, index) => (
                    <li key={index} className="group hover:text-primary transition-colors flex items-center">
                       <span className="text-primary mr-2 group-hover:text-accent-green">&gt;</span> {use}
                    </li>
                  ))}
                </ul>
              </TerminalCard>
            </AnimatedElement>
          </div>

          <div className="lg:col-span-3">
            <AnimatedElement>
              <TerminalCard
                title="TOKEN_ALLOCATION"
                titleIcon={<BarChartHorizontalBig className="h-4 w-4 text-primary/80" />}
                className="w-full h-full"
                contentClassName="text-sm md:text-base"
                footerContent="Launch Type: Public Genesis Offering"
              >
                <div className="text-center mb-5">
                  <p className="text-xl sm:text-2xl font-semibold text-foreground/80 font-terminal-body">
                    Supply: <span ref={maxSupplyRef} className="text-primary font-bold">0</span> BSAI (hard cap)
                  </p>
                </div>
                <div className="space-y-2.5">
                  {tokenomicsDetails.map((item, index) => (
                    <div 
                      key={item.label} 
                      className="flex flex-col sm:flex-row items-start sm:items-center hover:bg-primary/5 px-1.5 py-1 rounded-sm transition-colors duration-150 font-terminal-code"
                      ref={addToRefs} 
                    >
                      <span className="w-full sm:w-2/5 text-xs sm:text-sm text-foreground/70 sm:text-right sm:pr-2 mb-0.5 sm:mb-0">{item.label}:</span>
                      <div className="w-full sm:w-3/5 flex items-center">
                        <div className="flex-grow h-3 bg-muted/30 rounded-sm overflow-hidden relative mr-2 border border-primary/20">
                          <div 
                            className="token-bar-fill absolute top-0 left-0 h-full rounded-sm"
                            style={{ 
                              width: '0%', 
                              backgroundColor: item.color,
                              boxShadow: `0 0 3px ${item.color}`
                            }} 
                          ></div>
                        </div>
                        <span className="token-percentage-text text-xs sm:text-sm font-semibold text-foreground w-12 text-left opacity-0">
                          {item.value}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </TerminalCard>
            </AnimatedElement>
          </div>
        </div>
         <AnimatedElement className="mt-10 md:mt-12 text-center space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:gap-5">
            <Button variant="default" size="lg" className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base">
                <ShoppingCart className="mr-2 h-4 w-4" /> JOIN THE SALE
            </Button>
            <Button variant="outline" size="lg" className="w-full sm:w-auto px-8 py-3 text-sm sm:text-base">
                <Database className="mr-2 h-4 w-4" /> VIEW TOKENOMICS
            </Button>
        </AnimatedElement>
      </div>
    </section>
  );
}
