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
}

export interface RecommendationCourseItem {
  restaurant: RecommendationPlace;
  cafe: RecommendationPlace;
  activity: RecommendationPlace;
  grade: "best" | "optional";
}

export interface RecommendationsResponse {
  courses: RecommendationCourseItem[];
  shortage_reasons: string[];
}
