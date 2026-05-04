import { Course, Place } from "@/courses/types/course";
import { apiClient, ApiError } from "@/infrastructure/api";

export interface CourseDetailData {
  selectedCourse: Course;
  subCourses: Course[];
}

export const COURSE_DETAIL_NOT_FOUND: CourseDetailData | null = null;

interface CourseDetailSubCourseApiResponse {
  courseId: string;
  courseType: string;
  title: string;
  routeSummary: string;
  locationSummary: string;
  totalDuration: number;
}

interface CourseDetailPlaceApiResponse {
  visitOrder: number;
  name: string;
  category: string;
  durationMinutes: number;
  photoUrl?: string;
  description?: string;
  routeDistanceM?: number;
  routeDurationMin?: number;
  routeTransport?: string;
  routePolyline?: string;
}

interface CourseDetailApiResponse {
  courseId: string;
  title: string;
  description: string;
  totalDuration: number;
  locationSummary: string;
  routeSummary: string;
  places: CourseDetailPlaceApiResponse[];
  subCourses: CourseDetailSubCourseApiResponse[];
}

function classifyType(category: string): "restaurant" | "cafe" | "activity" {
  const cat = category.toLowerCase();
  const cafeKeywords = ["카페", "디저트", "cafe", "coffee", "커피", "베이커리"];
  const restaurantKeywords = [
    "음식점",
    "맛집",
    "레스토랑",
    "한식",
    "중식",
    "일식",
    "양식",
    "치킨",
    "피자",
    "술집",
    "바",
  ];

  if (cafeKeywords.some((keyword) => cat.includes(keyword))) {
    return "cafe";
  }

  if (restaurantKeywords.some((keyword) => cat.includes(keyword))) {
    return "restaurant";
  }

  return "activity";
}

function formatDuration(totalDurationMinutes: number): string | undefined {
  if (!totalDurationMinutes) {
    return undefined;
  }

  return `약 ${Math.ceil(totalDurationMinutes / 60)}시간`;
}

function mapPlace(place: CourseDetailPlaceApiResponse, courseId: string): Place {
  return {
    id: `${courseId}-${place.visitOrder}`,
    name: place.name,
    description: place.description ?? "",
    location: "",
    imageUrl: place.photoUrl,
    type: classifyType(place.category),
    category: place.category,
    walkingTimeTo:
      place.routeDurationMin != null ? `${place.routeDurationMin}분` : undefined,
  };
}

function mapSelectedCourse(response: CourseDetailApiResponse): Course {
  const places = response.places.map((place) => mapPlace(place, response.courseId));
  const locations = response.locationSummary ? [response.locationSummary] : [];

  return {
    id: response.courseId,
    name: response.title,
    description: response.description,
    locations,
    duration: formatDuration(response.totalDuration),
    keywords: [],
    imageUrl: response.places[0]?.photoUrl,
    places,
  };
}

function mapSubCourse(course: CourseDetailSubCourseApiResponse): Course {
  return {
    id: course.courseId,
    name: course.title,
    description: course.routeSummary,
    locations: course.locationSummary ? [course.locationSummary] : [],
    duration: formatDuration(course.totalDuration),
    keywords: [],
  };
}

export async function fetchCourseDetail(
  courseId: string,
): Promise<CourseDetailData | null> {
  try {
    const response = await apiClient.get<CourseDetailApiResponse>(
      `/recommendations/courses/${courseId}`,
    );

    return {
      selectedCourse: mapSelectedCourse(response),
      subCourses: response.subCourses.map(mapSubCourse),
    };
  } catch (error) {
    if (error instanceof ApiError) {
      return COURSE_DETAIL_NOT_FOUND;
    }

    return COURSE_DETAIL_NOT_FOUND;
  }
}
