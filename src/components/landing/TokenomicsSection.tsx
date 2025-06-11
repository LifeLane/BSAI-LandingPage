
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger'; // Ensure ScrollTrigger is imported if used

const tokenomicsDetails = [
  { label: "Ecosystem & Rewards", value: "40%", percentage: 40 },
  { label: "Team (Locked 24 months)", value: "20%", percentage: 20 },
  { label: "Liquidity", value: "15%", percentage: 15 },
  { label: "Public Sale", value: "10%", percentage: 10 },
  { label: "Treasury & DAO", value: "10%", percentage: 10 },
  { label: "Marketing & Partnerships", value: "5%", percentage: 5 },
];

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const maxSupplyRef = useRef<HTMLSpanElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center+=100", // Adjust as needed
        toggleActions: "play none none none",
      }
    });

    // Max Supply count-up animation
    if (maxSupplyRef.current) {
      const supplyTarget = 1000000000;
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
      }, "start");
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
          , `start+=${index * 0.15}`); // Staggered start
        }
        if (percentageText) {
          tl.fromTo(percentageText, 
            { opacity: 0, y: 10 }, 
            { opacity: 1, y: 0, duration: 0.5, ease: "power1.out" }
          , `start+=${index * 0.15 + 0.5}`); // Stagger and delay after bar starts
        }
      }
    });

    return () => {
      tl.kill(); // Kill the timeline on unmount
      if (ScrollTrigger.getTweensOf(sectionRef.current).length > 0) {
          ScrollTrigger.killTweensOf(sectionRef.current);
      }
    };
  }, []);

  return (
    <section id="tokenomics" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <HeroParticleAnimation />
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <AnimatedElement className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold font-headline text-foreground">
            <span className="text-primary">Tokenomics</span> — Fueling the Forge
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground font-body">
            Understanding the distribution and utility of the BSAI token.
          </p>
        </AnimatedElement>
        
        <AnimatedElement className="flex justify-center">
          <Card className="w-full max-w-lg shadow-xl bg-card/70 backdrop-blur-sm border border-border hover:border-primary/70 transform transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="text-center">
              <CardTitle className="font-headline text-2xl text-foreground group-hover:text-primary transition-colors">
                BSAI Token Distribution
              </CardTitle>
            </CardHeader>
            <CardContent className="px-6 py-8 space-y-6">
              <div className="text-center">
                <p className="text-xl font-semibold text-foreground">
                  Max Supply: <span ref={maxSupplyRef} className="text-primary">0 BSAI</span>
                </p>
              </div>
              <div className="space-y-5">
                {tokenomicsDetails.map((item, index) => (
                  <div 
                    key={item.label} 
                    className="flex items-center"
                    ref={el => itemRefs.current[index] = el}
                  >
                    <span className="w-2/5 text-sm text-muted-foreground text-right pr-3">{item.label}:</span>
                    <div className="w-3/5 flex items-center">
                      <div className="flex-grow h-5 bg-muted rounded-sm overflow-hidden relative mr-3">
                        <div 
                          className="token-bar-fill absolute top-0 left-0 h-full bg-primary rounded-sm"
                          style={{ width: '0%' }} // Initial width for animation
                        ></div>
                      </div>
                      <span className="token-percentage-text text-sm font-semibold text-foreground w-10 text-left opacity-0">
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
    </section>
  );
}
