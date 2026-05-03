'use server';

import { fetchCourseCafes } from '@/recommendation/infrastructure/api/cafe/cafeApi';
import { Place } from '@/courses/types/course';

export async function fetchCafesAction(courseId: string): Promise<Place[]> {
  return fetchCourseCafes(courseId);
}
