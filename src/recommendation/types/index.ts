export interface RecommendationPlace {
  order: number;
  place_type: "restaurant" | "cafe" | "activity";
  name: string;
  category: string;
  road_address: string;
  address: string;
  mapx: string;
  mapy: string;
  link: string;
  telephone: string;
  keyword: string;
  collected_at: string;
  image_url: string | null;
  duration_minutes: number;
}

export interface RecommendationCourseItem {
  course_id: string;
  places: RecommendationPlace[];
  grade: "best" | "optional";
  image_url: string | null;
}

export interface RecommendationsResponse {
  courses: RecommendationCourseItem[];
  shortage_reasons: string[];
}
