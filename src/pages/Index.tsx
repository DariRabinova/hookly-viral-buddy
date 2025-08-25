import HeroSection from "@/components/HeroSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import AnalyticsSection from "@/components/AnalyticsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DemoSection from "@/components/DemoSection";
import PricingSection from "@/components/PricingSection";
import WaitlistSection from "@/components/WaitlistSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorksSection />
      <AnalyticsSection />
      <TestimonialsSection />
      <DemoSection />
      <PricingSection />
      <WaitlistSection />
      <Footer />
    </div>
  );
};

export default Index;
