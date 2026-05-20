export function generateCourseTitle(
  places: { name: string }[] | undefined,
  grade?: string,
): string {
  if (!places?.length) return "";
  const normalized = (grade ?? "").toLowerCase().replace(/[-\s]/g, "_");
  const isOptional = normalized.includes("optional") || normalized.includes("option");
  const place = isOptional ? (places[1] ?? places[0]) : places[0];
  return `${place.name} 코스`;
}
