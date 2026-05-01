"use client";

import { useState } from "react";

function ImageOffIcon() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      opacity={0.6}
    >
      <line x1="2" y1="2" x2="22" y2="22" />
      <path d="M10.41 10.41a2 2 0 1 1-2.83-2.83" />
      <line x1="13.5" y1="6.5" x2="18" y2="6.5" />
      <line x1="7" y1="2" x2="7" y2="2.01" />
      <path d="M3 6h1l14 14H3z" />
      <path d="M21 15.17V6a2 2 0 0 0-2-2H9.83" />
    </svg>
  );
}

interface SubCourseImageProps {
  imageUrl?: string;
  alt: string;
}

export default function SubCourseImage({ imageUrl, alt }: SubCourseImageProps) {
  const [hasError, setHasError] = useState(false);

  if (!imageUrl || hasError) {
    return (
      <div className="flex h-32 w-full items-center justify-center rounded-lg bg-gradient-to-br from-[#D0E2F4] to-[#8aaee6]">
        <ImageOffIcon />
      </div>
    );
  }

  return (
    <img
      src={imageUrl}
      alt={alt}
      onError={() => setHasError(true)}
      className="h-32 w-full rounded-lg object-cover"
    />
  );
}
