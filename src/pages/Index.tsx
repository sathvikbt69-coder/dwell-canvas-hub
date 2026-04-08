import StickyHeader from "@/components/StickyHeader";
import HeroSection from "@/components/HeroSection";
import TrustBar from "@/components/TrustBar";
import ProblemSolution from "@/components/ProblemSolution";
import ServicesSection from "@/components/ServicesSection";
import CostCalculator from "@/components/CostCalculator";
import ProcessSection from "@/components/ProcessSection";
import PortfolioSection from "@/components/PortfolioSection";
import PricingSection from "@/components/PricingSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import WhyChooseUs from "@/components/WhyChooseUs";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <>
      <StickyHeader />
      <main>
        <HeroSection />
        <TrustBar />
        <ProblemSolution />
        <ServicesSection />
        <CostCalculator />
        <ProcessSection />
        <PortfolioSection />
        <PricingSection />
        <TestimonialsSection />
        <WhyChooseUs />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
};

export default Index;
