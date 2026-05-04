import { apiClient, ApiError } from "@/infrastructure/api";
import { Place } from "@/courses/types/course";

export const RESTAURANTS_NOT_FOUND: Place[] = [];

interface RestaurantApiResponse {
  id: string;
  time?: string;
  location: string;
  name: string;
  description: string;
  imageUrl?: string;
}

interface RestaurantsListApiResponse {
  restaurants: RestaurantApiResponse[];
}

function bindTime(restaurant: RestaurantApiResponse): string | undefined {
  return restaurant.time;
}

function bindLocation(restaurant: RestaurantApiResponse): string {
  return restaurant.location;
}

function bindName(restaurant: RestaurantApiResponse): string {
  return restaurant.name;
}

function bindDescription(restaurant: RestaurantApiResponse): string {
  return restaurant.description;
}

function mapToPlace(restaurant: RestaurantApiResponse): Place {
  return {
    id: restaurant.id,
    time: bindTime(restaurant),
    location: bindLocation(restaurant),
    name: bindName(restaurant),
    description: bindDescription(restaurant),
    imageUrl: restaurant.imageUrl,
  };
}

export async function fetchCourseRestaurants(courseId: string): Promise<Place[]> {
  try {
    const response = await apiClient.get<RestaurantsListApiResponse>(
      `/recommendations/detail/${courseId}/restaurants`,
    );
    return response.restaurants.map(mapToPlace);
  } catch (error) {
    if (error instanceof ApiError) {
      return RESTAURANTS_NOT_FOUND;
    }
    return RESTAURANTS_NOT_FOUND;
  }
}
