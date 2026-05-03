'use server';

import { fetchCourseRestaurants } from '@/recommendation/infrastructure/api/restaurant/restaurantApi';
import { Place } from '@/courses/types/course';

export async function fetchRestaurantsAction(courseId: string): Promise<Place[]> {
  return fetchCourseRestaurants(courseId);
}
