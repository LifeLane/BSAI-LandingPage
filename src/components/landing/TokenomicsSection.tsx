"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import AnimatedElement from './AnimatedElement';
import HeroParticleAnimation from './HeroParticleAnimation';
import { useEffect, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const tokenomicsData = [
  { label: "Max Supply", value: "1,000,000,000 BSAI" },
  { label: "Ecosystem & Rewards", value: "40%", icon: "🌐" }, // Placeholder icon
  { label: "Team (Locked 24 months)", value: "20%", icon: "👥" }, // Placeholder icon
  { label: "Liquidity", value: "15%", icon: "💧" }, // Placeholder icon
  { label: "Public Sale", value: "10%", icon: "🛍️" }, // Placeholder icon
  { label: "Treasury & DAO", value: "10%", icon: "🏛️" }, // Placeholder icon
  { label: "Marketing & Partnerships", value: "5%", icon: "🤝" }, // Placeholder icon
];

// Helper function to parse percentage string to number
const parsePercentage = (percentage: string) => {
  return parseFloat(percentage.replace('%', ''));
};

const distributionData = tokenomicsData
  .filter((item) => item.label !== "Max Supply")
  .map((item) => ({
  ...item,
  percentage: parsePercentage(item.value),
}));

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const maxSupplyRef = useRef<HTMLSpanElement>(null);
  const chartContainerRef = useRef<HTMLDivElement>(null);
  const chartRef = useRef<HTMLDivElement>(null); // Declare chartRef here
  const tokenomicsRefs = useRef<(HTMLDivElement | null)[]>([]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        toggleActions: 'play none none none', // Play animation once
      },
    });

    // Animation for Max Supply count-up
    if (maxSupplyRef.current) {
      const targetSupply = 1000000000;
      const obj = { value: 0 };
      timeline.to(obj, {
        value: targetSupply,
        duration: 2,
        ease: 'power1.out',
        onUpdate: () => {
          if (maxSupplyRef.current) {
            maxSupplyRef.current.textContent = Math.round(obj.value).toLocaleString() + ' BSAI';
          }
        },
      });
    }

    // Animation for bars and percentages
    distributionData.forEach((item, index) => {
      const bar = tokenomicsRefs.current[index]?.querySelector('.animated-bar');
      const percentageText = tokenomicsRefs.current[index]?.querySelector('.percentage-text');

      if (bar) {
        timeline.fromTo(bar, { width: '0%' }, {
          width: `${item.percentage}%`,
          duration: 1,
          ease: 'power2.out',
          // Add a slight delay for staggered effect
          delay: index * 0.1,
        }, '<'); // Start this animation at the same time as the previous one in the timeline
      }

      if (percentageText) {
        timeline.fromTo(percentageText, { opacity: 0, y: 10 }, {
          opacity: 1,
          y: 0,
          duration: 0.5,
          ease: 'power1.out',
          delay: index * 0.1, // Stagger the text animation as well
        }, '<'); // Start this animation at the same time as the bar animation
      }
    });

  }, []);

  return (
    <section id="tokenomics" className="relative py-16 md:py-24 overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        {/* Assuming HeroParticleAnimation is a shared background component */}
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
        <div className="flex justify-center">
          <AnimatedElement>
            <Card className="w-full max-w-md shadow-xl hover:shadow-2xl transition-all duration-300 bg-card/70 backdrop-blur-sm border border-border hover:border-primary transform hover:-translate-y-2 group overflow-hidden benefit-card-inner">
              <CardHeader>
                <CardTitle className="font-headline text-xl text-foreground group-hover:text-accent transition-colors benefit-title text-center">
                  BSAI Token Distribution
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center space-y-6">
                  {/* Max Supply */}
                  <div className="text-lg md:text-xl font-semibold text-foreground">
                    Max Supply: <span ref={maxSupplyRef}>0 BSAI</span>
                  </div>

                  {/* Visual Representation - Improved Bar Chart */}
                  <div ref={chartRef} className="w-full max-w-xs flex flex-col space-y-4 mt-4">
                    {distributionData.map((item, index) => (
                      <div
                        key={index}
                        ref={el => { tokenomicsRefs.current[index] = el; }}
                        className="flex items-center justify-between"
                      >
                        <div className="w-1/2 text-sm font-body text-muted-foreground pr-4 text-right">
                          {item.label}:
                        </div>
                        <div className="w-1/2 flex items-center">
                          <div className="flex-grow bg-muted-foreground/20 rounded-sm h-5 relative overflow-hidden">
                            {/* Animated bar */}
                            <div
                              className="animated-bar absolute top-0 left-0 h-full bg-primary rounded-sm"
                              style={{ width: '0%' }} // Start at 0% for animation
                            ></div>
                          </div>
                          {/* Percentage text */}
                          <span className="percentage-text ml-3 text-sm font-semibold text-foreground opacity-0 min-w-[30px] text-right">
                            {item.value}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Detailed Breakdown (Optional) */}

                </div>
              </CardContent>
            </Card>
          </AnimatedElement>
        </div>
      </div>
    </section>
  );
}