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
  const animRef = useRef<HTMLDivElement>(null);

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

    const el = animRef.current;
    if (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(10px)';
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          if (animRef.current) {
            animRef.current.style.transition =
              'opacity 1s cubic-bezier(0.16,1,0.3,1), transform 1s cubic-bezier(0.16,1,0.3,1)';
            animRef.current.style.opacity = '1';
            animRef.current.style.transform = 'translateY(0)';
          }
        });
      });
    }

    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, [height]);

  return (
    <div ref={wrapperRef} className="relative w-full overflow-hidden bg-white">
      <div ref={animRef}>
        <div
          ref={canvasRef}
          className="relative origin-top-left"
          style={{ width: CANVAS_WIDTH, height }}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
