import HeroSection from "@/sections/HeroSection";

import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import SetupStepsSection from "@/sections/SetupStepsSection";
import BenefitsSection from "@/sections/BenefitsSection";
import FeatureGridSection from "@/sections/FeatureGridSection";
import MidCtaSection from "@/sections/MidCtaSection";
import DemoRequestSection from "@/sections/DemoRequestSection";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />

      <ProblemSolutionSection />
      <SetupStepsSection />
      <BenefitsSection />
      <FeatureGridSection />
      <MidCtaSection />
      <DemoRequestSection />
    </div>
  );
};

export default Home;
