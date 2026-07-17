import type { CSSProperties, ReactNode } from "react";
import CommonHeaderComponent from "@/components/layout/CommonHeaderComponent";

export interface BlobConfig {
  className: string;
  style?: CSSProperties;
}

/** recommendation/page.tsx, courses/detail/[id]/page.tsx에서 동일하게 쓰이던 블롭 조합 */
export const DEFAULT_BLOBS: BlobConfig[] = [
  {
    className:
      "pointer-events-none absolute left-1/2 top-1/2 h-[1100px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#daeaf8] opacity-70 blur-[220px]",
  },
  {
    className:
      "pointer-events-none absolute left-1/2 top-1/2 h-[850px] w-[850px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f0d5d5] opacity-50 blur-[180px]",
  },
];

interface CommonLayoutComponentProps {
  children: ReactNode;
  /** 배경 블롭 구성. 생략 시 DEFAULT_BLOBS(파랑+분홍) 사용 */
  blobs?: BlobConfig[];
  /** relative z-10 콘텐츠 래퍼에 적용할 클래스 (max-width, padding 등 페이지별 값) */
  containerClassName?: string;
  /** <main> 태그에 적용할 클래스 */
  mainClassName?: string;
  /** 공용 헤더 노출 여부. 기본 true */
  header?: boolean;
}

export default function CommonLayoutComponent({
  children,
  blobs = DEFAULT_BLOBS,
  containerClassName = "relative z-10",
  mainClassName = "relative flex-1 overflow-hidden bg-white",
  header = true,
}: CommonLayoutComponentProps) {
  return (
    <div className="flex flex-col min-h-dvh">
      {header && <CommonHeaderComponent />}
      <main className={mainClassName}>
        {blobs.map((blob, i) => (
          <div key={i} className={blob.className} style={blob.style} />
        ))}
        <div className={containerClassName}>{children}</div>
      </main>
    </div>
  );
}
