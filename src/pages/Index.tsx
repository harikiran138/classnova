import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import StorySection from "@/components/StorySection";
import FeaturesSection from "@/components/FeaturesSection";
import DidacSection from "@/components/DidacSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import DemoBooking from "@/components/DemoBooking";
import Footer from "@/components/Footer";
import ScrollAnimationDemo from "@/components/ScrollAnimationDemo";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <StorySection />
      <div id="features">
        <FeaturesSection />
      </div>
      <div id="didac">
        <DidacSection />
      </div>
      <div id="testimonials">
        <TestimonialsSection />
      </div>
      <div id="pricing">
        <PricingSection />
      </div>
      <ScrollAnimationDemo />
      <DemoBooking />
      <Footer />
    </div>
  );
};

export default Index;
