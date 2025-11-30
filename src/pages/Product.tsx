import FeatureGridSection from "@/sections/FeatureGridSection";
import HardwareShowcaseSection from "@/sections/HardwareShowcaseSection";
import SoftwareInterfaceSection from "@/sections/SoftwareInterfaceSection";
import ComparisonSection from "@/sections/ComparisonSection";

const Product = () => {
    return (
        <div className="animate-fade-in pt-20">
            <FeatureGridSection />
            <HardwareShowcaseSection />
            <SoftwareInterfaceSection />
            <ComparisonSection />
        </div>
    );
};

export default Product;
