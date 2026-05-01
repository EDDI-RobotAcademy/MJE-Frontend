import Link from "next/link";

export default function TryAgain() {
  return (
    <div className="group relative flex justify-center">
      <span className="pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#6a7282]/80 px-3.5 py-1.5 text-[12px] text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
        새로운 조건으로 다시 검색해볼까요?
      </span>

      <Link
        href="/"
        className="flex items-center justify-center rounded-[28px] text-[15px] font-light text-white transition-opacity hover:opacity-90"
        style={{
          width: "200px",
          height: "52px",
          background: "linear-gradient(135deg, #8aaee6 0%, #8aaee6 65%, #d5e6f6 100%)",
          boxShadow: "0px 4px 16px 0px rgba(138,174,230,0.45)",
        }}
      >
        다시 검색하기
      </Link>
    </div>
  );
}
