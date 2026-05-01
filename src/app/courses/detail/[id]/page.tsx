import CourseDetailPage from "@/courses/ui/components/detail/CourseDetailPage";
import TryAgain from "@/courses/ui/components/try_again/TryAgain";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  return (
    <main
      className="relative min-h-screen"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      <div className="mx-auto max-w-[800px] px-6 py-[60px]">
        <CourseDetailPage courseId={id} />
        <div className="mt-12">
          <TryAgain />
        </div>
      </div>
    </main>
  );
}
