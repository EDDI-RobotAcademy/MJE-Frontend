"use client";

import { useState } from "react";

interface RestaurantImageProps {
  src?: string;
  alt: string;
}

export default function RestaurantImage({ src, alt }: RestaurantImageProps) {
  const [errored, setErrored] = useState(false);
  const imgSrc = errored || !src ? "https://picsum.photos/seed/default/400/300" : src;

  return (
    <div className="relative h-full w-[100px] flex-shrink-0 overflow-hidden rounded-[14px] bg-brand-placeholder">
      <img
        src={imgSrc}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={() => setErrored(true)}
      />
    </div>
  );
}
