import { apiClient } from "@/infrastructure/api";

export interface BackendPlaceItem {
  visitOrder: number;
  name: string;
  area: string;
  address?: string;
  category: string;
  imageUrl?: string;
  mainDescription: string;
  briefDescription: string;
  keywords: string[];
  estimatedDurationMinutes: number;
  travelTimeToNextMinutes?: number;
  recommendedTimeSlot: string;
  hasParking?: boolean;
  routePathToNext: [number, number][];
}

export interface BackendCourseTitlePlace {
  name: string;
  category: string;
  subCategory: string;
}

export interface BackendCourseItem {
  courseId: string;
  courseType: string;
  transport: string;
  totalDurationMinutes: number;
  places: BackendPlaceItem[];
  region?: string;
  mainPlace?: BackendCourseTitlePlace | null;
  subPlaces?: BackendCourseTitlePlace[];
  title?: string;
  name?: string;
  description?: string;
}

export interface CreateCourseApiResponse {
  recommendationId: string;
  courseId: string;
  mainCourse: BackendCourseItem | null;
  subCourses: BackendCourseItem[];
  message: string | null;
}

const TRANSPORT_MAP: Record<string, string> = {
  walk: "walk",
  transit: "public_transit",
  car: "car",
};

export interface CreateCourseParams {
  area: string;
  start_time: string;
  transport: string;
}

export async function createCourse(
  params: CreateCourseParams,
): Promise<CreateCourseApiResponse> {
  return apiClient.post<CreateCourseApiResponse>(
    "/recommendations/create-course",
    {
      area: params.area,
      start_time: params.start_time,
      transport: TRANSPORT_MAP[params.transport] ?? params.transport,
    },
  );
}
