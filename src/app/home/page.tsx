import HeroSection from "@/home/ui/components/HeroSection";
import SearchBar from "@/home/ui/components/SearchBar";
import CommonLayoutComponent from "@/components/layout/CommonLayoutComponent";

export default function HomePage() {
  return (
    <CommonLayoutComponent
      blobs={[
        {
          className:
            "pointer-events-none absolute rounded-full left-[-58px] top-[30px] md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2",
          style: {
            width: "849px",
            height: "849px",
            background: "rgba(191, 219, 254, 0.5)",
            filter: "blur(250px)",
          },
        },
      ]}
    >
      {/* 소개 문구 */}
      <HeroSection />

      {/* 데이터 입력 구간 */}
      <section className="flex justify-center px-4">
        <SearchBar />
      </section>

      {/* Footer hint */}
      <p
        className="pt-[10px] text-center text-[10px] leading-[22px] text-[#222222]/50"
        style={{
          fontFamily: "'Prompt', 'Noto Sans KR', sans-serif",
          fontWeight: 300,
        }}
      >
        필수 항목을 채운 뒤 전송 버튼을 누르면 추천 결과 페이지로 이동합니다.
      </p>
    </CommonLayoutComponent>
  );
}
