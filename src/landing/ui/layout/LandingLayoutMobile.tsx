"use client";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const CANVAS_WIDTH = 393;

type Props = {
  children: ReactNode;
  height: number;
};

export default function LandingLayoutMobile({ children, height }: Props) {
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = animRef.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(10px)";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        if (!animRef.current) return;
        animRef.current.style.transition =
          "opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)";
        animRef.current.style.opacity = "1";
        animRef.current.style.transform = "translateY(0)";
      });
    });
  }, []);

  return (
    <div className="relative w-full overflow-x-hidden bg-white flex justify-center">
      <div ref={animRef}>
        <div
          className="relative bg-white"
          style={{ width: CANVAS_WIDTH, height }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
