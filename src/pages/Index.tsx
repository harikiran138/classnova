import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import TrustBanner from "@/sections/TrustBanner";
import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import FeatureGridSection from "@/sections/FeatureGridSection";
import HardwareShowcaseSection from "@/sections/HardwareShowcaseSection";
import SoftwareInterfaceSection from "@/sections/SoftwareInterfaceSection";
import BenefitsSection from "@/sections/BenefitsSection";
import PricingSection from "@/sections/PricingSection";
import CaseStudiesSection from "@/sections/CaseStudiesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import PartnersSection from "@/sections/PartnersSection";
import TransparencySection from "@/sections/TransparencySection";
import DidacBannerSection from "@/sections/DidacBannerSection";
import DemoRequestSection from "@/sections/DemoRequestSection";
import FooterSection from "@/sections/FooterSection";
import MidCtaSection from "@/sections/MidCtaSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <FeatureGridSection />
      <HardwareShowcaseSection />
      <SoftwareInterfaceSection />
      <BenefitsSection />
      <MidCtaSection />
      <PricingSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TrustBanner />
      <PartnersSection />
      <TransparencySection />
      <DidacBannerSection />
      <DemoRequestSection />
      <FooterSection />
    </div>
  );
};

export default Index;
