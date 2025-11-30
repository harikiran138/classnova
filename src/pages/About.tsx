import TeamSection from "@/sections/TeamSection";
import DevelopmentTimelineSection from "@/sections/DevelopmentTimelineSection";
import TransparencySection from "@/sections/TransparencySection";
import PartnersSection from "@/sections/PartnersSection";

const About = () => {
    return (
        <div className="animate-fade-in pt-20">
            <TeamSection />
            <DevelopmentTimelineSection />
            <TransparencySection />
            <PartnersSection />
        </div>
    );
};

export default About;
