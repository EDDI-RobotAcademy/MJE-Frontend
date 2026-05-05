export interface RecommendationPlace {
  id: number;
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
}

export interface RecommendationCourseItem {
  course_id: string;
  restaurant: RecommendationPlace;
  cafe: RecommendationPlace;
  activity: RecommendationPlace;
  grade: "best" | "optional";
  image_url: string | null;
}

export interface RecommendationsResponse {
  courses: RecommendationCourseItem[];
  shortage_reasons: string[];
}
