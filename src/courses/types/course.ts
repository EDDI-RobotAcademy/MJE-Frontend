export interface CourseKeyword {
  label: string;
}

export interface Place {
  id: string;
  name: string;
  description: string;
  location: string;
  time?: string;
  imageUrl?: string;
  type?: "restaurant" | "cafe" | "activity";
}

export interface Course {
  id: string;
  name: string;
  description: string;
  location?: string;
  locations?: string[];
  startTime?: string;
  duration?: string;
  keywords: CourseKeyword[];
  imageUrl?: string;
  places?: Place[];
}

export interface SuggestedCoursesData {
  mainCourse: Course | null;
  subCourses: Course[];
}
