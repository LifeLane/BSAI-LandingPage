
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const tokenomicsDetails = [
  { label: "Ecosystem & Rewards", value: "40%", percentage: 40, color: "hsl(var(--chart-1))" },
  { label: "Team (Locked 24 months)", value: "20%", percentage: 20, color: "hsl(var(--chart-2))" },
  { label: "Liquidity", value: "15%", percentage: 15, color: "hsl(var(--chart-3))" },
  { label: "Public Sale", value: "10%", percentage: 10, color: "hsl(var(--chart-4))" },
  { label: "Treasury & DAO", value: "10%", percentage: 10, color: "hsl(var(--chart-5))" },
  { label: "Marketing & Partnerships", value: "5%", percentage: 5, color: "hsl(var(--primary))" }, // Using primary for the last one
];

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const maxSupplyRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  itemRefs.current = []; // Reset refs array on each render before collecting them
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
        start: "top center+=100", // Start animation when the top of the section is 100px above the center of the viewport
        toggleActions: "play none none none", // Play the animation once when it enters the viewport
      }
    });

    // Max Supply count-up animation
    if (maxSupplyRef.current) {
      const supplyTarget = 1000000000; // Example: 1 Billion
      const supplyObject = { value: 0 };
      tl.to(supplyObject, {
        value: supplyTarget,
        duration: 2,
        ease: "power1.out",
        onUpdate: () => {
          if (maxSupplyRef.current) {
            maxSupplyRef.current.textContent = Math.round(supplyObject.value).toLocaleString() + ' BSAI';
          }
        }
      }, "start"); // Label "start" to sync animations
    }

    // Bar and percentage text animations
    itemRefs.current.forEach((el, index) => {
      if (el) {
        const bar = el.querySelector(".token-bar-fill") as HTMLDivElement;
        const percentageText = el.querySelector(".token-percentage-text") as HTMLSpanElement;
        const data = tokenomicsDetails[index];

        if (bar) {
          tl.fromTo(bar, 
            { width: '0%' }, 
            { width: `${data.percentage}%`, duration: 1.5, ease: "power2.out" }
          , `start+=${index * 0.15}`); // Stagger start times
        }
        if (percentageText) {
          const percentageObject = { value: 0 };
           tl.fromTo(percentageText,
            { opacity: 0, y:10 },
            { 
              opacity: 1, 
              y: 0, 
              duration: 0.5, 
              ease: "power1.out",
            }
          , `start+=${index * 0.15 + 0.5}`); // Stagger and delay text appearance
        }
      }
    });

    return () => {
      tl.kill(); // Kill the timeline to prevent memory leaks
      // If ScrollTrigger created any tweens directly on the element (not part of tl), kill them too.
      if (ScrollTrigger.getTweensOf(sectionRef.current).length > 0) {
          ScrollTrigger.killTweensOf(sectionRef.current);
      }
       itemRefs.current.forEach(el => {
        if (el && ScrollTrigger.getTweensOf(el).length > 0) {
          ScrollTrigger.killTweensOf(el);
        }
      });
    };
  }, []); // Rerun if tokenomicsDetails changes, though it's static here.

  return (
    <section id="tokenomics" className="relative py-16 md:py-24 overflow-hidden w-full" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <AnimatedElement className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            <span className="text-primary">Tokenomics</span> — Fueling the Forge
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            Understanding the distribution and utility of the BSAI token.
          </p>
        </AnimatedElement>
        
        <AnimatedElement className="flex justify-center">
          <Card className="w-full max-w-xl shadow-xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/70 transform transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
                BSAI Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="px-4 sm:px-6 py-8 space-y-6">
              <div className="text-center">
                <p className="text-xl md:text-2xl font-semibold text-foreground">
                  Max Supply: <span ref={maxSupplyRef} className="text-primary font-bold">0 BSAI</span>
                </p>
              </div>
              <div className="space-y-5">
                {tokenomicsDetails.map((item, index) => (
                  <div 
                    key={item.label} 
                    className="flex flex-col sm:flex-row items-start sm:items-center hover:scale-[1.02] transition-transform duration-200 cursor-default p-2 rounded-md hover:bg-muted/50"
                    ref={addToRefs} // Use the callback ref here
                  >
                    <span className="w-full sm:w-2/5 text-sm text-muted-foreground sm:text-right sm:pr-3 mb-1 sm:mb-0">{item.label}:</span>
                    <div className="w-full sm:w-3/5 flex items-center">
                      <div className="flex-grow h-5 bg-muted rounded-sm overflow-hidden relative mr-2 sm:mr-3">
                        <div 
                          className="token-bar-fill absolute top-0 left-0 h-full rounded-sm"
                          style={{ 
                            width: '0%', // Initial width for animation
                            backgroundColor: item.color 
                          }} 
                        ></div>
                      </div>
                      <span className="token-percentage-text text-sm font-semibold text-foreground w-12 text-left opacity-0">
                        {item.value}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
               <p className="text-xs text-muted-foreground text-center pt-4">
                Token allocations are designed to foster long-term growth, community engagement, and platform development. Team tokens are subject to vesting schedules.
              </p>
            </CardContent>
          </Card>
        </AnimatedElement>
      </div>
    </section>
  );
}

    