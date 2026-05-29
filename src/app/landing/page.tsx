import LandingLayout from "@/landing/ui/layout/LandingLayout";
import HeroSection from "@/landing/ui/components/sections/HeroSection";
import PainPointSection from "@/landing/ui/components/sections/PainPointSection";
import HotSpotSection from "@/landing/ui/components/sections/HotSpotSection";
import TimeToHealSection from "@/landing/ui/components/sections/TimeToHealSection";

export default function LandingPage() {
  return (
    <LandingLayout height={4750}>
      <HeroSection />
      <PainPointSection />
      <HotSpotSection />
      <TimeToHealSection />
    </LandingLayout>
  );
}
