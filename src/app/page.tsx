
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PartnersSection from '@/components/landing/PartnersSection';
import AboutSection from '@/components/landing/AboutSection';
import ShadowEcosystemDetailedSection from '@/components/landing/ShadowEcosystemDetailedSection';
import SignalTerminalSection from '@/components/landing/SignalTerminalSection';
import RoadmapSection from '@/components/landing/RoadmapSection';
import TokenomicsSection from '@/components/landing/TokenomicsSection';
import CtaSection from '@/components/landing/CtaSection';
import UprisingCtaSection from '@/components/landing/UprisingCtaSection';
import Footer from '@/components/landing/Footer';


export default function ShadowLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-[hsl(0,0%,5%)]"> {/* Explicit black for dark mode */}
      <Header />
      <main className="flex-grow">
        <Hero />
        <PartnersSection />
        <AboutSection />
        <ShadowEcosystemDetailedSection />
        <SignalTerminalSection />
        <RoadmapSection />
        <TokenomicsSection />
        <CtaSection />
        <UprisingCtaSection />
      </main>
      <Footer />
    </div>
  );
}
