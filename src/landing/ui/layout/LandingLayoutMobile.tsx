"use client";
import type { ReactNode } from "react";
import { useEffect, useRef } from "react";

const CANVAS_WIDTH = 393;
const HERO_HEIGHT = 690; // CTA 버튼 하단(661px) + 여유

type Props = {
  children: ReactNode;
  height: number;
};

export default function LandingLayoutMobile({ children, height }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const widthScale = window.innerWidth / CANVAS_WIDTH;
      const heightScale = window.innerHeight / HERO_HEIGHT;
      const scale = Math.min(widthScale, heightScale);
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
