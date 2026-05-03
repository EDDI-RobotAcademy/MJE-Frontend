import { Course, Place } from "@/courses/types/course";
import { apiClient, ApiError } from "@/infrastructure/api";
import { BackendPlaceItem } from "@/recommendation/infrastructure/api/createCourse";

export interface CourseDetailData {
  selectedCourse: Course;
  subCourses: Course[];
}

export const COURSE_DETAIL_NOT_FOUND: CourseDetailData | null = null;

interface CourseDetailSubCourseApiResponse {
  courseId?: string;
  id?: string;
  name: string;
  description: string;
  locations: string[];
  totalDurationMinutes: number;
  imageUrl?: string;
}

interface CourseDetailApiResponse {
  courseId: string;
  title: string;
  description: string;
  totalDuration: number;
  locationSummary: string;
  routeSummary: string;
  places: BackendPlaceItem[];
  subCourses: CourseDetailSubCourseApiResponse[];
}

function classifyType(category: string): "restaurant" | "cafe" | "activity" {
  const cat = category.toLowerCase();
  const cafeKeywords = ["카페", "디저트", "cafe", "coffee", "커피", "베이커리"];
  const restaurantKeywords = [
    "한식",
    "맛집",
    "레스토랑",
    "양식",
    "중식",
    "일식",
    "분식",
    "치킨",
    "술집",
    "bar",
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

  return `${Math.ceil(totalDurationMinutes / 60)}시간`;
}

function mapPlace(place: BackendPlaceItem, courseId: string): Place {
  return {
    id: `${courseId}-${place.visitOrder}`,
    name: place.name,
    description: place.mainDescription,
    location: place.area,
    time: place.recommendedTimeSlot,
    imageUrl: place.imageUrl,
    type: classifyType(place.category),
    category: place.category,
    walkingTimeTo:
      place.travelTimeToNextMinutes != null
        ? `${place.travelTimeToNextMinutes}분`
        : undefined,
  };
}

function mapSelectedCourse(response: CourseDetailApiResponse): Course {
  const places = response.places.map((place) => mapPlace(place, response.courseId));
  const locations = [...new Set(response.places.map((place) => place.area))];
  const keywords = [
    ...new Set(response.places.flatMap((place) => place.keywords)),
  ]
    .slice(0, 5)
    .map((label) => ({ label: label.startsWith("#") ? label : `#${label}` }));

  return {
    id: response.courseId,
    name: response.title,
    description: response.description,
    locations:
      locations.length > 0
        ? locations
        : response.locationSummary
          ? [response.locationSummary]
          : [],
    startTime: response.places[0]?.recommendedTimeSlot,
    duration: formatDuration(response.totalDuration),
    keywords,
    imageUrl: response.places[0]?.imageUrl,
    places,
  };
}

function mapSubCourse(course: CourseDetailSubCourseApiResponse): Course {
  return {
    id: course.courseId ?? course.id ?? "",
    name: course.name,
    description: course.description,
    locations: course.locations,
    duration: formatDuration(course.totalDurationMinutes),
    imageUrl: course.imageUrl,
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
