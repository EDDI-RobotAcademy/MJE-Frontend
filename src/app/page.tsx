import HeroSection from "@/home/ui/components/HeroSection";
import SearchBar from "@/home/ui/components/SearchBar";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white overflow-hidden">
      <HeroSection />
      <section className="flex justify-center px-[206px] pb-24">
        <SearchBar />
      </section>
    </main>
  );
}
