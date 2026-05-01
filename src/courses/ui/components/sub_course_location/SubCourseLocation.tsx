interface SubCourseLocationProps {
  location: string;
}

export default function SubCourseLocation({ location }: SubCourseLocationProps) {
  return (
    <span className="inline-block rounded-full bg-[#2a4874] px-2.5 py-0.5 text-[10px] text-white">
      {location}
    </span>
  );
}
