'use server';

import {
  createCourse,
  CreateCourseParams,
  CreateCourseApiResponse,
} from '@/recommendation/infrastructure/api/createCourse';

export async function createCourseAction(
  params: CreateCourseParams,
): Promise<CreateCourseApiResponse> {
  return createCourse(params);
}
