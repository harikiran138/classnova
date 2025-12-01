import HeroSection from "@/sections/HeroSection";

import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import SetupStepsSection from "@/sections/SetupStepsSection";
import BenefitsSection from "@/sections/BenefitsSection";
import FeatureGridSection from "@/sections/FeatureGridSection";
import MidCtaSection from "@/sections/MidCtaSection";
import TestimonialsSection from "@/sections/TestimonialsSection";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />

      <ProblemSolutionSection />
      <SetupStepsSection />
      <BenefitsSection />
      <FeatureGridSection />
      <MidCtaSection />
      <TestimonialsSection />
    </div>
  );
};

export default Home;
