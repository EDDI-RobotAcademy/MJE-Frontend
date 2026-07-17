import RecommendationDetailPage from "@/courses/ui/components/recommendation_detail/RecommendationDetailPage";
import CommonHeaderComponent from "@/components/layout/CommonHeaderComponent";

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <>
      <CommonHeaderComponent />
      <RecommendationDetailPage courseId={id} />
    </>
  );
}
