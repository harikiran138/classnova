import Navigation from "@/components/Navigation";
import HeroSection from "@/sections/HeroSection";
import TrustBanner from "@/sections/TrustBanner";
import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import SetupStepsSection from "@/sections/SetupStepsSection";
import FeatureGridSection from "@/sections/FeatureGridSection";
import HardwareShowcaseSection from "@/sections/HardwareShowcaseSection";
import SoftwareInterfaceSection from "@/sections/SoftwareInterfaceSection";
import DevelopmentTimelineSection from "@/sections/DevelopmentTimelineSection";
import TeamSection from "@/sections/TeamSection";
import BenefitsSection from "@/sections/BenefitsSection";
import PricingSection from "@/sections/PricingSection";
import DidacBannerSection from "@/sections/DidacBannerSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import CaseStudiesSection from "@/sections/CaseStudiesSection";
import TransparencySection from "@/sections/TransparencySection";
import FaqSection from "@/sections/FaqSection";
import PartnersSection from "@/sections/PartnersSection";
import ComparisonSection from "@/sections/ComparisonSection";
import ResourcesSection from "@/sections/ResourcesSection";
import DemoRequestSection from "@/sections/DemoRequestSection";
import FooterSection from "@/sections/FooterSection";
import FloatingCtas from "@/sections/FloatingCtas";
import ScrollAnimationDemo from "@/components/ScrollAnimationDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <TrustBanner />
      <ProblemSolutionSection />
      <SetupStepsSection />
      <FeatureGridSection />
      <HardwareShowcaseSection />
      <SoftwareInterfaceSection />
  <DevelopmentTimelineSection />
  <TeamSection />
      <BenefitsSection />
      <PricingSection />
      <DidacBannerSection />
      <TestimonialsSection />
      <CaseStudiesSection />
  <TransparencySection />
      <FaqSection />
      <PartnersSection />
      <ComparisonSection />
      <ResourcesSection />
      <DemoRequestSection />
      <ScrollAnimationDemo />
      <FooterSection />
      <FloatingCtas />
    </div>
  );
};

export default Index;
