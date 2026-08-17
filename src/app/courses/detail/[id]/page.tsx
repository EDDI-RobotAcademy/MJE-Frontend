import CourseDetailResponsive from "@/courses/ui/components/detail/CourseDetailResponsive";
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
    <CommonLayoutComponent
      containerClassName="relative z-10 mx-auto max-w-[1300px]"
      blobs={[
        {
          className:
            "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full",
          style: {
            width: "1589px",
            height: "2381px",
            background: "rgba(191, 219, 254, 0.45)",
            filter: "blur(200px)",
          },
        },
        {
          className:
            "pointer-events-none absolute left-1/2 top-0 -translate-x-1/2 rounded-full",
          style: {
            width: "700px",
            height: "600px",
            background: "rgba(240, 213, 213, 0.35)",
            filter: "blur(180px)",
          },
        },
      ]}
    >
      <CourseDetailResponsive
        courseId={id}
        initialDetailData={detailData}
        grade={grade}
        isSharedView={isSharedView}
      />
    </CommonLayoutComponent>
  );
}
