"use client";

import { useState } from "react";

interface CafeImageProps {
  src?: string;
  alt: string;
}

export default function CafeImage({ src, alt }: CafeImageProps) {
  const [errored, setErrored] = useState(false);
  const imgSrc = errored || !src ? "https://picsum.photos/seed/cafe-default/400/300" : src;

  return (
    <div className="relative h-full w-[100px] flex-shrink-0 overflow-hidden rounded-[14px] bg-[#fff0ec]">
      <img
        src={imgSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
