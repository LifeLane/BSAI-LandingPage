import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import SocialProofBar from '@/components/landing/PartnersSection'; // Repurposed PartnersSection
import ProblemSolutionSection from '@/components/landing/AboutSection'; // Repurposed AboutSection
import HowItWorksSection from '@/components/landing/SolutionsSection'; // Repurposed SolutionsSection
import BenefitsSection from '@/components/landing/ToolsSection'; // Repurposed ToolsSection
import FutureEcosystemSection from '@/components/landing/FutureEcosystemSection';
import TokenomicsSection from '@/components/landing/TokenomicsSection';
import WhitelistGateSection from '@/components/landing/CtaSection'; // Repurposed CtaSection
import Footer from '@/components/landing/Footer';

export default function QuantumTraderPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Header />
      <main className="flex-grow">
        <Hero />
        <SocialProofBar />
        <ProblemSolutionSection />
        <HowItWorksSection />
        <BenefitsSection />
        <FutureEcosystemSection />
        <TokenomicsSection />
        <WhitelistGateSection />
      </main>
      <Footer />
    </div>
  );
}
