export const recommendationEndpoints = {
  list: "/courses/recommendations",
  detail: (courseId: string) => `/courses/recommendations/${courseId}`,
};
