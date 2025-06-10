import Header from '@/components/landing/Header';
import Hero from '@/components/landing/Hero';
import AboutSection from '@/components/landing/AboutSection';
import SolutionsSection from '@/components/landing/SolutionsSection';
import ToolsSection from '@/components/landing/ToolsSection';
import UseCasesSection from '@/components/landing/UseCasesSection';
import PartnersSection from '@/components/landing/PartnersSection';
import CommunitySection from '@/components/landing/CommunitySection';
import BlogSection from '@/components/landing/BlogSection';
import CtaSection from '@/components/landing/CtaSection';
import Footer from '@/components/landing/Footer';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <Hero />
        <AboutSection />
        <SolutionsSection />
        <ToolsSection />
        <UseCasesSection />
        <PartnersSection />
        <CommunitySection />
        <BlogSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
