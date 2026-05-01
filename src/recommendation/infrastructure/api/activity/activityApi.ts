import { apiClient, ApiError } from "@/infrastructure/api";
import { Place } from "@/courses/types/course";

export const ACTIVITIES_NOT_FOUND: Place[] = [];

interface ActivityApiResponse {
  id: string;
  time?: string;
  location: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface ActivitiesListApiResponse {
  activities: ActivityApiResponse[];
}

function bindTime(activity: ActivityApiResponse): string | undefined {
  return activity.time;
}

function bindLocation(activity: ActivityApiResponse): string {
  return activity.location;
}

function bindName(activity: ActivityApiResponse): string {
  return activity.name;
}

function bindDescription(activity: ActivityApiResponse): string {
  return activity.description;
}

function mapToPlace(activity: ActivityApiResponse): Place {
  return {
    id: activity.id,
    time: bindTime(activity),
    location: bindLocation(activity),
    name: bindName(activity),
    description: bindDescription(activity),
    imageUrl: activity.imageUrl,
    type: "activity",
  };
}

export async function fetchCourseActivities(courseId: string): Promise<Place[]> {
  try {
    const response = await apiClient.get<ActivitiesListApiResponse>(
      `/recommendation/detail/${courseId}/activities`,
    );
    return response.activities.map(mapToPlace);
  } catch (error) {
    if (error instanceof ApiError) {
      return ACTIVITIES_NOT_FOUND;
    }
    return ACTIVITIES_NOT_FOUND;
  }
}
