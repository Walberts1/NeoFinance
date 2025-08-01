import HeroSection from "@/components/HeroSection";
import WhyNeoFinance from "@/components/WhyNeoFinance";
import PortalSection from "@/components/PortalSection";
import FundingModels from "@/components/FundingModels";
import AboutSection from "@/components/AboutSection";
import FeaturesGrid from "@/components/FeaturesGrid";
import SuccessStories from "@/components/SuccessStories";
import AppPromo from "@/components/AppPromo";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <WhyNeoFinance />
      <PortalSection />
      <FundingModels />
      <AboutSection />
      <FeaturesGrid />
      <SuccessStories />
      <AppPromo />
      <Footer />
    </div>
  );
};

export default Index;
