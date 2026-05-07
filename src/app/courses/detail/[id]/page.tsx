import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import { fetchCourseDetail } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import ReturnToRecommendation from "@/courses/ui/components/return/ReturnToRecommendation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const detailData = await fetchCourseDetail(id);

  return (
    <main
      className="relative min-h-screen"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      <div className="mx-auto max-w-[1100px] px-10 py-[60px]">
        <div className="mb-5">
          <ReturnToRecommendation />
        </div>
        <CourseDetailPage courseId={id} initialDetailData={detailData} />
      </div>
    </main>
  );
}
