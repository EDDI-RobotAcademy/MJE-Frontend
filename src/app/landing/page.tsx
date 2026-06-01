import LandingLayout from "@/landing/ui/layout/LandingLayout";
import LandingLayoutMobile from "@/landing/ui/layout/LandingLayoutMobile";
import HeroSection from "@/landing/ui/components/sections/HeroSection";
import PainPointSection from "@/landing/ui/components/sections/PainPointSection";
import HotSpotSection from "@/landing/ui/components/sections/HotSpotSection";
import TimeToHealSection from "@/landing/ui/components/sections/TimeToHealSection";
import CtaSection from "@/landing/ui/components/sections/CtaSection";
import SectionReveal from "@/landing/ui/components/SectionReveal";
import HeroSectionMobile from "@/landing/ui/components/mobile/sections/HeroSectionMobile";
import PainPointSectionMobile from "@/landing/ui/components/mobile/sections/PainPointSectionMobile";
import HotSpotSectionMobile from "@/landing/ui/components/mobile/sections/HotSpotSectionMobile";
import TimeToHealSectionMobile from "@/landing/ui/components/mobile/sections/TimeToHealSectionMobile";
import CtaSectionMobile from "@/landing/ui/components/mobile/sections/CtaSectionMobile";
import ViewHomeTracker from "@/home/ui/components/ViewHomeTracker";
import ViewLandingTracker from "@/landing/ui/components/ViewLandingTracker";

export default function LandingPage() {
  return (
    <>
      <ViewHomeTracker />
      <ViewLandingTracker />

      {/* Desktop (>= 768px) */}
      <div className="hidden md:block">
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
      </div>

      {/* Mobile (< 768px) */}
      <div className="md:hidden">
        <LandingLayoutMobile height={4310}>
          <HeroSectionMobile />
          <PainPointSectionMobile />
          <SectionReveal top={1748} height={450} color="#ffffff" width={393} />
          <HotSpotSectionMobile />
          <SectionReveal top={2622} height={450} color="#f5f5f5" width={393} />
          <TimeToHealSectionMobile />
          <SectionReveal top={3397} height={450} color="#ffffff" width={393} />
          <CtaSectionMobile />
        </LandingLayoutMobile>
      </div>
    </>
  );
}
