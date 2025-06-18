
import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import PartnersSection from '@/components/landing/PartnersSection';
import AboutSection from '@/components/landing/AboutSection'; // Repurposed for Origin, Mission, Vision
import ShadowEcosystemDetailedSection from '@/components/landing/ShadowEcosystemDetailedSection';
import SignalTerminalSection from '@/components/landing/SignalTerminalSection'; 
import RoadmapSection from '@/components/landing/RoadmapSection';
import TokenomicsSection from '@/components/landing/TokenomicsSection'; // Will be "BSAI - Neural Fuel"
import CtaSection from '@/components/landing/CtaSection'; // Repurposed for Early Access Form
import UprisingCtaSection from '@/components/landing/UprisingCtaSection';
import Footer from '@/components/landing/Footer';


export default function ShadowLandingPage() {
  return (
    <div className="flex flex-col min-h-screen bg-transparent"> {/* Changed bg-background to bg-transparent */}
      <Header />
      <main className="flex-grow">
        <Hero />
        <PartnersSection />
        <AboutSection /> {/* Origin Story, Mission, Vision */}
        <ShadowEcosystemDetailedSection />
        <SignalTerminalSection />
        <RoadmapSection />
        <TokenomicsSection /> {/* BSAI - Neural Fuel */}
        <CtaSection /> {/* Airdrop + Early Access Form */}
        <UprisingCtaSection />
      </main>
      <Footer />
    </div>
  );
}
