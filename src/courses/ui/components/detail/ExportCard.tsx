export default function ExportCard() {
  return (
    <div className="rounded-[20px] bg-brand-navy p-4 text-white">
      <p className="text-sm font-semibold leading-snug">이 코스가 마음에 드시나요?</p>
      <p className="mt-1 text-[11px] leading-snug text-white/70">추천 코스를 이메일로 보내드릴게요</p>
      <button
        type="button"
        className="mt-3 w-full rounded-full bg-white py-2 text-[12px] font-semibold text-brand-navy transition-colors hover:bg-white/90"
      >
        코스 내보내기
      </button>
    </div>
  );
}
