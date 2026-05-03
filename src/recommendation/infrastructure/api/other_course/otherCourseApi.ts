import { apiClient, ApiError } from "@/infrastructure/api";
import { Course } from "@/courses/types/course";

export const OTHER_COURSES_NOT_FOUND: Course[] = [];

interface OtherCourseApiResponse {
  courseId?: string;
  id?: string;
  name: string;
  locations: string[];
  duration?: number | string | null;
  description: string;
  imageUrl?: string;
}

interface OtherCoursesListApiResponse {
  courses: OtherCourseApiResponse[];
}

function bindTitle(course: OtherCourseApiResponse): string {
  return course.name;
}

function bindRoute(course: OtherCourseApiResponse): string[] {
  return course.locations;
}

function bindLocations(course: OtherCourseApiResponse): string[] {
  return course.locations;
}

function bindDuration(course: OtherCourseApiResponse): string | undefined {
  if (course.duration == null) {
    return undefined;
  }

  return typeof course.duration === "number"
    ? `${Math.ceil(course.duration / 60)}시간`
    : course.duration;
}

function mapToCourse(course: OtherCourseApiResponse): Course {
  const resolvedCourseId = course.courseId ?? course.id;

  return {
    id: resolvedCourseId ?? "",
    name: bindTitle(course),
    locations: bindLocations(course),
    description: course.description,
    duration: bindDuration(course),
    imageUrl: course.imageUrl,
    keywords: [],
  };
}

export { bindRoute };

export async function fetchOtherCourses(courseId: string): Promise<Course[]> {
  try {
    const response = await apiClient.get<OtherCoursesListApiResponse>(
      `/recommendation/detail/${courseId}/other-courses`,
    );
    return response.courses.map(mapToCourse);
  } catch (error) {
    if (error instanceof ApiError) {
      return OTHER_COURSES_NOT_FOUND;
    }
    return OTHER_COURSES_NOT_FOUND;
  }
}
