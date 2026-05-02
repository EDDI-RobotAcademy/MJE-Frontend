interface OtherCourseRouteProps {
  locations: string[];
}

export default function OtherCourseRoute({ locations }: OtherCourseRouteProps) {
  if (locations.length === 0) return null;

  const route = locations.join(" → ");

  return (
    <p className="line-clamp-1 text-[11px] text-brand-text-muted" title={route}>
      {route}
    </p>
  );
}
