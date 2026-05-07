export interface RecommendationPlace {
  order: number;
  place_type: "restaurant" | "cafe" | "activity";
  name: string;
  category: string;
  road_address: string;
  address: string;
  latitude: number;
  longitude: number;
  link: string;
  telephone: string;
  activity_type:
    | "WALK"
    | "PARK"
    | "MOVIE"
    | "EXHIBITION"
    | "EXPERIENCE"
    | "SHOPPING"
    | "NIGHTLIFE"
    | null;
  image_url: string | null;
  duration_minutes: number;
  start_time: string;
  end_time: string;
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
