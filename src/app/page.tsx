import LandingLayout from "@/landing/ui/layout/LandingLayout";
import HeroSection from "@/landing/ui/components/sections/HeroSection";
import PainPointSection from "@/landing/ui/components/sections/PainPointSection";
import HotSpotSection from "@/landing/ui/components/sections/HotSpotSection";
import TimeToHealSection from "@/landing/ui/components/sections/TimeToHealSection";
import CtaSection from "@/landing/ui/components/sections/CtaSection";
import ViewHomeTracker from "@/home/ui/components/ViewHomeTracker";
import ViewLandingTracker from "@/landing/ui/components/ViewLandingTracker";

export default function RootPage() {
  return (
    <>
      <ViewHomeTracker />
      <ViewLandingTracker />
      <LandingLayout height={4750}>
        <HeroSection />
        <PainPointSection />
        <HotSpotSection />
        <TimeToHealSection />
        <CtaSection />
      </LandingLayout>
    </>
  );
}
