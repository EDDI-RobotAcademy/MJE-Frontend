import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import { fetchCourseDetail } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ grade?: string }>;
}) {
  const { id } = await params;
  const { grade } = await searchParams;
  const detailData = await fetchCourseDetail(id);

  return (
    <main className="relative min-h-screen overflow-hidden bg-white">
      {/* 파란빛 블롭 — 세로 타원 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#daeaf8] opacity-70 blur-[220px]" />
      {/* 분홍빛 블롭 */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d5d5] opacity-50 blur-[180px]" />
      <div className="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8 lg:px-10 py-8 md:py-[60px]">
        <CourseDetailPage courseId={id} initialDetailData={detailData} grade={grade} />
      </div>
    </main>
  );
}
