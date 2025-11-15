import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import TrustBanner from "@/sections/TrustBanner";
import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import SetupStepsSection from "@/sections/SetupStepsSection";
import FeatureGridSection from "@/sections/FeatureGridSection";
import HardwareShowcaseSection from "@/sections/HardwareShowcaseSection";
import SoftwareInterfaceSection from "@/sections/SoftwareInterfaceSection";
import BenefitsSection from "@/sections/BenefitsSection";
import MidCtaSection from "@/sections/MidCtaSection";
import PricingSection from "@/sections/PricingSection";
import CaseStudiesSection from "@/sections/CaseStudiesSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import DevelopmentTimelineSection from "@/sections/DevelopmentTimelineSection";
import TeamSection from "@/sections/TeamSection";
import ComparisonSection from "@/sections/ComparisonSection";
import PartnersSection from "@/sections/PartnersSection";
import TransparencySection from "@/sections/TransparencySection";
import ResourcesSection from "@/sections/ResourcesSection";
import FaqSection from "@/sections/FaqSection";
import DidacBannerSection from "@/sections/DidacBannerSection";
import DemoRequestSection from "@/sections/DemoRequestSection";
import FooterSection from "@/sections/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      <Navigation />
      <HeroSection />
      <ProblemSolutionSection />
      <SetupStepsSection />
      <FeatureGridSection />
      <HardwareShowcaseSection />
      <SoftwareInterfaceSection />
      <BenefitsSection />
      <MidCtaSection />
      <PricingSection />
      <CaseStudiesSection />
      <TestimonialsSection />
      <TrustBanner />
      <DevelopmentTimelineSection />
      <TeamSection />
      <ComparisonSection />
      <PartnersSection />
      <TransparencySection />
      <ResourcesSection />
      <FaqSection />
      <DidacBannerSection />
      <DemoRequestSection />
      <FooterSection />
    </div>
  );
};

export default Index;
