export interface CourseKeyword {
  label: string;
}

export interface Course {
  id: string;
  name: string;
  description: string;
  location?: string;
  locations?: string[];
  startTime?: string;
  keywords: CourseKeyword[];
  imageUrl?: string;
}

export interface SuggestedCoursesData {
  mainCourse: Course | null;
  subCourses: Course[];
}
