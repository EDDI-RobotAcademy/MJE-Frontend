import { Course, Place, SuggestedCoursesData } from "@/courses/types/course";
import {
  BackendCourseItem,
  BackendPlaceItem,
  CreateCourseApiResponse,
} from "@/recommendation/infrastructure/api/createCourse";

const SESSION_KEY = "mje_course_session";

export function saveCourseSession(data: CreateCourseApiResponse): void {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  } catch {
    // Ignore storage failures in unsupported environments.
  }
}

export function loadCourseSession(): CreateCourseApiResponse | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) {
      return null;
    }

    return JSON.parse(raw) as CreateCourseApiResponse;
  } catch {
    return null;
  }
}

export function clearCourseSession(): void {
  try {
    sessionStorage.removeItem(SESSION_KEY);
  } catch {
    // ignore
  }
}

function classifyType(category: string): "restaurant" | "cafe" | "activity" {
  const cat = category.toLowerCase();
  const cafeKeywords = ["카페", "cafe", "coffee", "커피", "베이커리"];
  const restaurantKeywords = [
    "음식",
    "맛집",
    "레스토랑",
    "식당",
    "한식",
    "중식",
    "일식",
    "양식",
    "restaurant",
    "dining",
    "food",
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

function mapCourse(item: BackendCourseItem, courseId: string): Course {
  const resolvedCourseId = item.courseId || courseId;
  const places = item.places.map((place) => mapPlace(place, resolvedCourseId));
  const locations = [...new Set(item.places.map((place) => place.area))];
  const keywords = [...new Set(item.places.flatMap((place) => place.keywords))]
    .slice(0, 5)
    .map((label) => ({ label: label.startsWith("#") ? label : `#${label}` }));

  const hours = Math.ceil(item.totalDurationMinutes / 60);
  const duration = `${hours}시간`;
  const startTime = item.places[0]?.recommendedTimeSlot;
  const imageUrl = item.places[0]?.imageUrl;

  return {
    id: resolvedCourseId,
    name: item.title ?? item.name ?? "",
    description: item.description ?? "",
    locations,
    startTime,
    duration,
    keywords,
    imageUrl,
    places,
  };
}

export function mapSessionToSuggestedCourses(
  session: CreateCourseApiResponse,
): SuggestedCoursesData {
  const mainCourse = session.mainCourse
    ? mapCourse(session.mainCourse, session.courseId)
    : null;

  const subCourses = session.subCourses.map((item, index) =>
    mapCourse(item, `sub-${index}`),
  );

  return { mainCourse, subCourses };
}
