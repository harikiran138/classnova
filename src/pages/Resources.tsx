import ResourcesSection from "@/sections/ResourcesSection";
import CaseStudiesSection from "@/sections/CaseStudiesSection";
import FaqSection from "@/sections/FaqSection";

const Resources = () => {
    return (
        <div className="animate-fade-in pt-20">
            <ResourcesSection />
            <CaseStudiesSection />
            <FaqSection />
        </div>
    );
};

export default Resources;
