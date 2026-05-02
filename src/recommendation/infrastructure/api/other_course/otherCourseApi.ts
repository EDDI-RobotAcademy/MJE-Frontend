import { apiClient, ApiError } from "@/infrastructure/api";
import { Course } from "@/courses/types/course";

export const OTHER_COURSES_NOT_FOUND: Course[] = [];

interface OtherCourseApiResponse {
  id: string;
  name: string;
  locations: string[];
  duration?: string;
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
  return course.duration;
}

function mapToCourse(course: OtherCourseApiResponse): Course {
  return {
    id: course.id,
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
