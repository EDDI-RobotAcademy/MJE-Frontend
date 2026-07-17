import CommonHeaderComponent from "@/components/layout/CommonHeaderComponent";
import LandingLayout from "@/landing/ui/layout/LandingLayout";
import HeroSection from "@/landing/ui/components/sections/HeroSection";
import PainPointSection from "@/landing/ui/components/sections/PainPointSection";
import HotSpotSection from "@/landing/ui/components/sections/HotSpotSection";
import TimeToHealSection from "@/landing/ui/components/sections/TimeToHealSection";
import CtaSection from "@/landing/ui/components/sections/CtaSection";
import SectionReveal from "@/landing/ui/components/SectionReveal";
import ViewHomeTracker from "@/home/ui/components/ViewHomeTracker";
import ViewLandingTracker from "@/landing/ui/components/ViewLandingTracker";

export default function RootPage() {
  return (
    <>
      <CommonHeaderComponent />
      <ViewHomeTracker />
      <ViewLandingTracker />
      <LandingLayout height={4650}>
        <HeroSection />
        <SectionReveal top={847.99}  height={850}  color="#ffffff" />
        <PainPointSection />
        <SectionReveal top={1697.99} height={960}  color="#f7f7f7" />
        <HotSpotSection />
        <SectionReveal top={2547.99} height={850}  color="#ffffff" />
        <TimeToHealSection />
        <SectionReveal top={3397.99} height={1252} color="#f5f5f5" />
        <CtaSection />
      </LandingLayout>
    </>
  );
}
