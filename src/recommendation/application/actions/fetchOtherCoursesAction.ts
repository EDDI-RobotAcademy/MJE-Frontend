'use server';

import { fetchOtherCourses } from '@/recommendation/infrastructure/api/other_course/otherCourseApi';
import { Course } from '@/courses/types/course';

export async function fetchOtherCoursesAction(courseId: string): Promise<Course[]> {
  return fetchOtherCourses(courseId);
}
