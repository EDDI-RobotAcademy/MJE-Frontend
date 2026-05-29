'use client';
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const CANVAS_WIDTH = 1440;

type Props = {
  children: ReactNode;
  height: number;
};

export default function LandingLayout({ children, height }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const scale = window.innerWidth / CANVAS_WIDTH;
      if (canvasRef.current) {
        canvasRef.current.style.transform = `scale(${scale})`;
      }
      if (wrapperRef.current) {
        wrapperRef.current.style.height = `${height * scale}px`;
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [height]);

  return (
    <div ref={wrapperRef} className="w-full overflow-hidden bg-white">
      <div
        ref={canvasRef}
        className="relative origin-top-left"
        style={{ width: CANVAS_WIDTH, height }}
      >
        {children}
      </div>
    </div>
  );
}
