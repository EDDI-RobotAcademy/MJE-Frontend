import Link from "next/link";

function ArrowLeftIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="19" y1="12" x2="5" y2="12" />
      <polyline points="12 5 5 12 12 19" />
    </svg>
  );
}

export default function ReturnToRecommendation() {
  return (
    <div className="flex justify-center">
      <Link
        href="/recommendation"
        className="flex items-center gap-2 rounded-[28px] text-[15px] font-light text-white transition-opacity hover:opacity-90"
        style={{
          width: "220px",
          height: "52px",
          justifyContent: "center",
          background: "linear-gradient(135deg, #2a4874 0%, #8aaee6 100%)",
          boxShadow: "0px 4px 16px 0px rgba(42,72,116,0.30)",
        }}
      >
        <ArrowLeftIcon />
        추천 코스로 돌아가기
      </Link>
    </div>
  );
}
