import Link from "next/link";
import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import { fetchCourseDetail } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detailData = await fetchCourseDetail(id);

  return (
    <main
      className="relative min-h-screen"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      <div className="mx-auto max-w-[1100px] px-4 md:px-8 lg:px-10 py-8 md:py-[60px]">
        <Link
          href="/recommendation"
          className="mb-5 inline-block text-[14px] text-[#2a4874] transition-opacity hover:opacity-75"
        >
          ← 추천 코스로 돌아가기
        </Link>
        <CourseDetailPage courseId={id} initialDetailData={detailData} />
      </div>
    </main>
  );
}
