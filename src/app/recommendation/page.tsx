import SuggestedCourses from "@/courses/ui/components/suggested_courses/SuggestedCourses";

export default function RecommendationPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      <div
        className="pointer-events-none absolute bottom-[-250px] left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full"
        style={{ background: "#A8CCF0", filter: "blur(500px)", opacity: 0.85 }}
      />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full"
        style={{ background: "#FCAD9E", filter: "blur(400px)", opacity: 0.45 }}
      />

      <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center px-6 py-12">
        <div className="mb-8 text-center">
          <h1
            className="text-2xl font-bold text-[#2a4874]"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            맞춤 데이트 코스
          </h1>
          <p className="mt-1 text-sm text-gray-500">딱 맞는 코스를 골라봤어요</p>
        </div>

        <div className="w-full">
          <SuggestedCourses />
        </div>
      </div>
    </main>
  );
}
