import { Course, Place, SuggestedCoursesData } from "@/courses/types/course";
import {
  BackendCourseItem,
  BackendPlaceItem,
  CreateCourseApiResponse,
} from "@/recommendation/infrastructure/api/createCourse";

const SESSION_KEY = "mje_course_session";

// ==================== 저장 / 불러오기 ====================

export function saveCourseSession(data: CreateCourseApiResponse): void {
  try {
    sessionStorage.setItem(SESSION_KEY, JSON.stringify(data));
  } catch {
    // sessionStorage 사용 불가 환경(SSR 등) 무시
  }
}

export function loadCourseSession(): CreateCourseApiResponse | null {
  try {
    const raw = sessionStorage.getItem(SESSION_KEY);
    if (!raw) return null;
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

// ==================== 매핑 ====================

function classifyType(category: string): "restaurant" | "cafe" | "activity" {
  const cat = category.toLowerCase();
  const cafeKw = ["카페", "디저트", "cafe", "coffee", "커피", "베이커리"];
  const restaurantKw = ["음식점", "맛집", "레스토랑", "한식", "중식", "일식", "양식", "치킨", "피자", "술집", "바"];
  if (cafeKw.some((kw) => cat.includes(kw))) return "cafe";
  if (restaurantKw.some((kw) => cat.includes(kw))) return "restaurant";
  return "activity";
}

function mapPlace(p: BackendPlaceItem, courseId: string): Place {
  return {
    id: `${courseId}-${p.visitOrder}`,
    name: p.name,
    description: p.mainDescription,
    location: p.area,
    time: p.recommendedTimeSlot,
    imageUrl: p.imageUrl,
    type: classifyType(p.category),
    category: p.category,
    walkingTimeTo:
      p.travelTimeToNextMinutes != null
        ? `${p.travelTimeToNextMinutes}분`
        : undefined,
  };
}

function mapCourse(item: BackendCourseItem, courseId: string): Course {
  const resolvedCourseId = item.courseId || courseId;
  const places = item.places.map((p) => mapPlace(p, resolvedCourseId));
  const locations = [...new Set(item.places.map((p) => p.area))];
  const keywords = [
    ...new Set(item.places.flatMap((p) => p.keywords)),
  ]
    .slice(0, 5)
    .map((label) => ({ label: label.startsWith("#") ? label : `#${label}` }));

  const hours = Math.ceil(item.totalDurationMinutes / 60);
  const duration = `약 ${hours}시간`;
  const startTime = item.places[0]?.recommendedTimeSlot;
  const imageUrl = item.places[0]?.imageUrl;

  return {
    id: resolvedCourseId,
    name: item.name ?? `${locations[0] ?? ""} ${item.courseType} 코스`,
    description:
      item.description ??
      `${places
        .slice(0, 3)
        .map((p) => p.name)
        .join(", ")} 등 ${places.length}곳을 방문하는 코스입니다.`,
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
  const fallbackCourseId = session.courseId ?? session.mainCourse?.courseId ?? "";
  const mainCourse = session.mainCourse
    ? mapCourse(session.mainCourse, fallbackCourseId)
    : null;

  const subCourses = session.subCourses.map((item, i) =>
    mapCourse(item, fallbackCourseId || `sub-${i}`),
  );

  return { mainCourse, subCourses };
}
