'use server';

import { fetchCourseActivities } from '@/recommendation/infrastructure/api/activity/activityApi';
import { Place } from '@/courses/types/course';

export async function fetchActivitiesAction(courseId: string): Promise<Place[]> {
  return fetchCourseActivities(courseId);
}
