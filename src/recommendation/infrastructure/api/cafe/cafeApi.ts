import { apiClient, ApiError } from "@/infrastructure/api";
import { Place } from "@/courses/types/course";

export const CAFES_NOT_FOUND: Place[] = [];

interface CafeApiResponse {
  id: string;
  time?: string;
  location: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface CafesListApiResponse {
  cafes: CafeApiResponse[];
}

function bindTime(cafe: CafeApiResponse): string | undefined {
  return cafe.time;
}

function bindLocation(cafe: CafeApiResponse): string {
  return cafe.location;
}

function bindName(cafe: CafeApiResponse): string {
  return cafe.name;
}

function bindDescription(cafe: CafeApiResponse): string {
  return cafe.description;
}

function mapToPlace(cafe: CafeApiResponse): Place {
  return {
    id: cafe.id,
    time: bindTime(cafe),
    location: bindLocation(cafe),
    name: bindName(cafe),
    description: bindDescription(cafe),
    imageUrl: cafe.imageUrl,
    type: "cafe",
  };
}

export async function fetchCourseCafes(courseId: string): Promise<Place[]> {
  try {
    const response = await apiClient.get<CafesListApiResponse>(
      `/recommendation/detail/${courseId}/cafes`,
    );
    return response.cafes.map(mapToPlace);
  } catch (error) {
    if (error instanceof ApiError) {
      return CAFES_NOT_FOUND;
    }
    return CAFES_NOT_FOUND;
  }
}
