import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import ReturnToRecommendation from "@/courses/ui/components/return/ReturnToRecommendation";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main
      className="relative min-h-screen"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      <div className="mx-auto max-w-[800px] px-6 py-[60px]">
        <CourseDetailPage courseId={id} />
        <div className="mt-12 pb-20">
          <ReturnToRecommendation />
        </div>
      </div>
    </main>
  );
}
