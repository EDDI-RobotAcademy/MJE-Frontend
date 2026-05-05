import HeroSection from "@/home/ui/components/HeroSection";
import SearchBar from "@/home/ui/components/SearchBar";
import ViewHomeTracker from "@/home/ui/components/ViewHomeTracker";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      {/* Blob 1: 하단 블루 글로우 */}
      <div
        className="pointer-events-none absolute bottom-[-250px] left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full"
        style={{ background: "#A8CCF0", filter: "blur(500px)", opacity: 0.85 }}
      />
      {/* Blob 2: 중앙 핑크 글로우 */}
      <div
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full"
        style={{ background: "#FCAD9E", filter: "blur(400px)", opacity: 0.45 }}
      />

      {/* 콘텐츠 래퍼 — 블롭보다 위에 렌더링 보장 */}
      <div className="relative z-10">
        <ViewHomeTracker />
        <HeroSection />
        <section className="flex justify-center px-4 md:px-[206px] pb-24">
          <SearchBar />
        </section>
      </div>
    </main>
  );
}
