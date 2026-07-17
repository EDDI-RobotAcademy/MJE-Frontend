import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import { fetchCourseDetail } from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";
import CommonLayoutComponent from "@/components/layout/CommonLayoutComponent";

export default async function Page({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ grade?: string; shared?: string }>;
}) {
  const { id } = await params;
  const { grade, shared } = await searchParams;
  const isSharedView = shared === "true";
  const detailData = await fetchCourseDetail(id);

  return (
    <CommonLayoutComponent containerClassName="relative z-10 mx-auto max-w-[1100px] px-4 md:px-8 lg:px-10 py-8 md:py-[60px]">
      <CourseDetailPage courseId={id} initialDetailData={detailData} grade={grade} isSharedView={isSharedView} />
    </CommonLayoutComponent>
  );
}
