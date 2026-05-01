export interface CourseKeyword {
  label: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  keywords: CourseKeyword[];
}

export interface SuggestedCoursesData {
  mainCourse: Course | null;
  subCourses: Course[];
}
