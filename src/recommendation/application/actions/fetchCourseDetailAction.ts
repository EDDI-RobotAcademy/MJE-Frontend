import {
  CourseDetailData,
  fetchCourseDetail,
} from "@/recommendation/infrastructure/api/course_detail/courseDetailApi";

export async function fetchCourseDetailAction(
  courseId: string,
): Promise<CourseDetailData | null> {
  return fetchCourseDetail(courseId);
}
