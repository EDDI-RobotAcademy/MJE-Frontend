interface MainCourseLocationProps {
  location: string;
}

export default function MainCourseLocation({ location }: MainCourseLocationProps) {
  return (
    <span className="inline-block rounded-full bg-[#2a4874] px-3 py-0.5 text-[10px] text-white">
      {location}
    </span>
  );
}
