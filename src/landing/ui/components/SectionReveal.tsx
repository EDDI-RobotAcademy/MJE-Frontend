'use client';
import { useEffect, useRef } from 'react';

type Props = {
  top: number;
  height: number;
  color: string;
};

export default function SectionReveal({ top, height, color }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // 아래→위 스크롤(섹션 아래에서 진입): 느리고 부드럽게
          // 위→아래 스크롤(섹션 위에서 재진입): 보통 속도
          const fromBelow = entry.boundingClientRect.top > 0;
          el.style.transition = fromBelow
            ? 'opacity 1.1s cubic-bezier(0.16,1,0.3,1)'
            : 'opacity 0.75s ease';
          el.style.opacity = '0';
        } else {
          // 이탈 → 즉시 복원
          el.style.transition = 'none';
          el.style.opacity = '1';
          requestAnimationFrame(() => {
            el.style.transition = 'opacity 0.75s ease';
          });
        }
      },
      { threshold: 0.08 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="absolute pointer-events-none"
      style={{
        top,
        left: 0,
        width: 1440,
        height,
        background: color,
        opacity: 1,
        transition: 'opacity 0.75s ease',
        zIndex: 20,
      }}
    />
  );
}
