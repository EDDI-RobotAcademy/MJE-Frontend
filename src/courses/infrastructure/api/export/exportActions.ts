"use server";

import { exportCourse, ExportCourseResult } from "./exportApi";

export async function exportCourseAction(
  courseId: string,
  email: string,
): Promise<ExportCourseResult> {
  return exportCourse({ courseId, email });
}
