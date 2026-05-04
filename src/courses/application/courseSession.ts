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
  const cafeKeywords = [
    "카페",
    "cafe",
    "coffee",
    "커피",
    "베이커리",
  ];
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

function normalizeCourseType(courseType: string): "main" | "sub1" | "sub2" {
  if (courseType === "main" || courseType === "best") {
    return "main";
  }

  if (courseType === "sub1" || courseType === "optionA") {
    return "sub1";
  }

  return "sub2";
}

function buildSingleTitle(courseType: string, mainKeyword: string): string {
  const normalizedType = normalizeCourseType(courseType);

  if (normalizedType === "main") {
    return `${mainKeyword}를 중심으로 여유롭게 이어지는 데이트`;
  }

  if (normalizedType === "sub1") {
    return `${mainKeyword}의 매력을 가볍게 즐기는 데이트`;
  }

  return `${mainKeyword}에서 천천히 분위기를 즐기는 데이트`;
}

function buildPairTitle(
  courseType: string,
  mainKeyword: string,
  subKeyword: string,
): string {
  const normalizedType = normalizeCourseType(courseType);

  if (normalizedType === "main") {
    return `${mainKeyword}에서 시작해 ${subKeyword}까지 즐기는 데이트`;
  }

  if (normalizedType === "sub1") {
    return `${subKeyword}와 ${mainKeyword}를 함께 담은 데이트`;
  }

  return `${subKeyword}를 즐기고 ${mainKeyword}에서 쉬어가는 데이트`;
}

function buildCourseTitle(
  course: BackendCourseItem,
  usedTitles: Set<string>,
): string {
  const fallbackTitle = course.title ?? course.name ?? "";
  const mainKeyword = course.mainPlace?.subCategory?.trim();

  if (!mainKeyword) {
    return fallbackTitle;
  }

  const candidates =
    course.subPlaces?.filter(
      (place) =>
        place?.subCategory?.trim() &&
        place?.category &&
        place.category !== course.mainPlace?.category,
    ) ?? [];

  for (const place of candidates) {
    const subKeyword = place.subCategory.trim();
    const title = buildPairTitle(course.courseType, mainKeyword, subKeyword);

    if (!usedTitles.has(title)) {
      usedTitles.add(title);
      return title;
    }
  }

  const singleTitle = buildSingleTitle(course.courseType, mainKeyword);
  if (!usedTitles.has(singleTitle)) {
    usedTitles.add(singleTitle);
    return singleTitle;
  }

  if (fallbackTitle && !usedTitles.has(fallbackTitle)) {
    usedTitles.add(fallbackTitle);
    return fallbackTitle;
  }

  return fallbackTitle;
}

function mapCourse(
  item: BackendCourseItem,
  courseId: string,
  usedTitles: Set<string>,
): Course {
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
    name: buildCourseTitle(item, usedTitles),
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
  const usedTitles = new Set<string>();
  const mainCourse = session.mainCourse
    ? mapCourse(session.mainCourse, "", usedTitles)
    : null;

  const subCourses = session.subCourses.map((item, index) =>
    mapCourse(item, `sub-${index}`, usedTitles),
  );

  return { mainCourse, subCourses };
}
