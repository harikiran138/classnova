import HeroSection from "@/sections/HeroSection";
import TrustBanner from "@/sections/TrustBanner";
import ProblemSolutionSection from "@/sections/ProblemSolutionSection";
import SetupStepsSection from "@/sections/SetupStepsSection";
import BenefitsSection from "@/sections/BenefitsSection";
import MidCtaSection from "@/sections/MidCtaSection";
import TestimonialsSection from "@/sections/TestimonialsSection";
import DidacBannerSection from "@/sections/DidacBannerSection";

const Home = () => {
  return (
    <div className="animate-fade-in">
      <HeroSection />
      <TrustBanner />
      <ProblemSolutionSection />
      <SetupStepsSection />
      <BenefitsSection />
      <MidCtaSection />
      <TestimonialsSection />
      <DidacBannerSection />
    </div>
  );
};

export default Home;
