import Link from "next/link";
import ExportCard from "@/courses/ui/components/export/ExportCard";

// ── Types ────────────────────────────────────────────────────────────────────

interface PlaceStop {
  id: string;
  name: string;
  nameEn?: string;
  categories: string[];
  timeRange: string;
  address: string;
  description: string;
  image1: string;
  image2: string;
  transitFrom: string;
  transitTo: string;
  transitMode: string;
  transitDuration: string;
}

interface AlternativeCourse {
  id: string;
  label: string;
  title: string;
  path: string;
  location: string;
  duration: string;
}

interface RecommendationDetail {
  title: string;
  location: string;
  startTime: string;
  description: string;
  totalDuration: string;
  stops: PlaceStop[];
  alternatives: AlternativeCourse[];
}

// ── Dummy data (replace with API response when backend is ready) ─────────────

const DUMMY_COURSE: RecommendationDetail = {
  title: "용문에서 탄방까지, 가볍게 걷는 코스",
  location: "대전 서구 남선로",
  startTime: "오후 12시 시작",
  description:
    "용문역에서 출발해 탄방까지 이어지는, 가볍게 이동하며 즐기기 좋은 도심 데이트 코스 입니다.",
  totalDuration: "6시간 ~ 7시간",
  stops: [
    {
      id: "stop-1",
      name: "코티",
      nameEn: "KOTi",
      categories: ["카페"],
      timeRange: "15:00 ~ 17:00",
      address: "대전 서구 남선로 21 102호",
      description:
        "외출의 시작을 달콤한 바나나 푸딩 한입으로, 따듯하고 아늑한 분위기의 인테리어.",
      image1: "https://picsum.photos/seed/stop1a/200/200",
      image2: "https://picsum.photos/seed/stop1b/200/200",
      transitFrom: "용문역",
      transitTo: "코티",
      transitMode: "도보",
      transitDuration: "14분",
    },
    {
      id: "stop-2",
      name: "모선",
      categories: ["저녁", "맛집"],
      timeRange: "17:00 ~ 18:00",
      address: "대전 서구 계룡로 585번길 24 1층",
      description:
        "연어는 주기적으로 꼭 먹어줘야 하는 메뉴. 점심엔 든든한 연어덮밥 추천 !",
      image1: "https://picsum.photos/seed/stop2a/200/200",
      image2: "https://picsum.photos/seed/stop2b/200/200",
      transitFrom: "코티",
      transitTo: "모선",
      transitMode: "도보",
      transitDuration: "11분",
    },
    {
      id: "stop-3",
      name: "남선공원 산책길",
      categories: ["산책"],
      timeRange: "18:00 ~ 20:00",
      address: "대전 서구 탄방동 1084",
      description:
        "낮에는 싱그러운 숲으로, 밤에는 은은한 조명으로 로맨틱해지는 산책로 데이트 ♡",
      image1: "https://picsum.photos/seed/stop3a/200/200",
      image2: "https://picsum.photos/seed/stop3b/200/200",
      transitFrom: "모선",
      transitTo: "남선공원",
      transitMode: "도보",
      transitDuration: "20분",
    },
  ],
  alternatives: [
    {
      id: "alt-1",
      label: "Option A",
      title: "힙한 팝업스토어 투어",
      path: "소문난성수감자탕 > 디올성수 > LCDC",
      location: "서울 성동구",
      duration: "4시간",
    },
    {
      id: "alt-2",
      label: "Option B",
      title: "로맨틱 와인바 코스",
      path: "대림창고 > 서울숲 > TBD",
      location: "서울 성동구",
      duration: "6시간",
    },
  ],
};

// ── Shared inline style ──────────────────────────────────────────────────────

const pretendard = "'Pretendard Variable', Pretendard, sans-serif";
const prompt = "'Prompt', sans-serif";

// ── Sub-components ────────────────────────────────────────────────────────────

function DotGrid() {
  const positions: [number, number][] = [
    [3, 0], [0, 3], [3, 3], [3, 6],
    [6, 3], [6, 6], [6, 9], [9, 3],
    [9, 6], [12, 3], [9, 0],
  ];
  return (
    <svg width="16" height="12" viewBox="0 0 16 12" fill="none" aria-hidden="true">
      {positions.map(([x, y], i) => (
        <rect key={i} x={x} y={y} width="3" height="3" fill="#fcad9e" />
      ))}
    </svg>
  );
}

function IconPin({ color = "#757575" }: { color?: string }) {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path
        d="M8 2C5.79 2 4 3.79 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.79 10.21 2 8 2Z"
        stroke={color}
        strokeWidth="1.5"
      />
      <circle cx="8" cy="6" r="1.5" fill={color} />
    </svg>
  );
}

function IconClock({ color = "#757575", size = 16 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="7" stroke={color} strokeWidth="1.5" />
      <path d="M8 5V9L10.5 10.5" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

/** Two circular place images that overlap — right image sits 85 px from left edge */
function PlaceImages({ image1, image2, name }: { image1: string; image2: string; name: string }) {
  return (
    <div className="relative h-[101px] w-[186px] shrink-0">
      <img
        src={image1}
        alt={name}
        className="absolute left-0 top-[3px] z-[2] h-[95px] w-[95px] rounded-full border-[2.5px] border-white object-cover"
      />
      <img
        src={image2}
        alt={name}
        className="absolute top-[3px] z-[1] h-[95px] w-[95px] rounded-full border-[2.5px] border-white object-cover"
        style={{ left: 85 }}
      />
    </div>
  );
}

/** Gray-background stop card with white inner card, category badges, and transit info */
function StopCard({ stop, isLast }: { stop: PlaceStop; isLast: boolean }) {
  return (
    <div className="flex flex-col">
      {/* Gray outer container */}
      <div className="rounded-[20px] bg-[#f5f5f5] px-[6px] pt-[6px] pb-[8px]">
        {/* White inner card — relative so badges can be anchored to its top-left */}
        <div className="relative rounded-[18px] bg-white px-[9px] pt-[30px] pb-[16px] shadow-[0px_4px_5px_rgba(0,0,0,0.10)]">
          {/* Category badges — overlapping top-left corner of the white card */}
          <div
            className="absolute top-[8px] left-[9px] flex gap-[8px]"
            style={{ fontFamily: pretendard }}
          >
            {stop.categories.map((cat) => (
              <span
                key={cat}
                className="flex h-[20px] items-center justify-center rounded-full bg-[#2a4874] px-[14px] text-[10px] text-white"
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <PlaceImages image1={stop.image1} image2={stop.image2} name={stop.name} />

            <div className="flex flex-col gap-[14px]" style={{ fontFamily: pretendard }}>
              {/* Time & address meta */}
              <div className="flex flex-col gap-[6px]">
                <div className="flex items-center gap-[3px]">
                  <IconClock color="#707070" size={12} />
                  <span className="whitespace-nowrap text-[8px] text-[#707070]">
                    {stop.timeRange}
                  </span>
                </div>
                <div className="flex items-center gap-[3px]">
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M8 2C5.79 2 4 3.79 4 6C4 9 8 14 8 14C8 14 12 9 12 6C12 3.79 10.21 2 8 2Z"
                      stroke="#707070"
                      strokeWidth="1.5"
                    />
                    <circle cx="8" cy="6" r="1.5" fill="#707070" />
                  </svg>
                  <span className="whitespace-nowrap text-[8px] text-[#707070]">
                    {stop.address}
                  </span>
                </div>
              </div>

              {/* Place name */}
              <p className="text-[20px] text-black">
                {stop.name}
                {stop.nameEn && (
                  <span className="ml-1" style={{ fontFamily: prompt }}>
                    {stop.nameEn}
                  </span>
                )}
              </p>

              {/* Description */}
              <p className="text-[10px] font-light leading-[15px] text-[#2d2d2d]">
                {stop.description}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom row: transit info (centered) */}
        <div
          className="mt-[10px] flex items-center justify-center px-[3px]"
          style={{ fontFamily: pretendard }}
        >
          <div className="flex items-center gap-[8px] text-[10px] text-[#959595]">
            <span className="whitespace-nowrap">
              {stop.transitFrom} → {stop.transitTo}
            </span>
            <span className="inline-block h-[2.6px] w-[2.6px] shrink-0 rounded-full bg-[#959595]" />
            <span className="whitespace-nowrap">
              {stop.transitMode} {stop.transitDuration}
            </span>
          </div>
        </div>
      </div>

      {/* Down-arrow connector between stops */}
      {!isLast && (
        <div className="flex items-center justify-center py-[4px]">
          <svg width="28" height="16" viewBox="0 0 28 16" fill="none">
            <line x1="14" y1="0" x2="14" y2="11" stroke="#c0c0c0" strokeWidth="1.5" />
            <polyline
              points="9,8 14,13 19,8"
              stroke="#c0c0c0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </svg>
        </div>
      )}
    </div>
  );
}


/** Single alternative course card in the sidebar */
function AlternativeCard({ course }: { course: AlternativeCourse }) {
  return (
    <div className="w-full rounded-[30px] bg-white p-[15px] shadow-[3px_6px_10px_rgba(187,199,211,0.25)]">
      <div className="flex items-end justify-between gap-3">
        <div className="flex min-w-0 flex-col gap-[12px]" style={{ fontFamily: pretendard }}>
          {/* Option label + title */}
          <div className="flex flex-col gap-[9px]">
            <span
              className="flex h-[23px] w-fit items-center justify-center rounded-full bg-[#333] px-[13px] text-[10px] text-white"
              style={{ fontFamily: prompt }}
            >
              {course.label}
            </span>
            <p className="text-[18px] font-medium text-black">{course.title}</p>
          </div>
          {/* Route path */}
          <p className="text-[10px] font-light tracking-[1px] text-[#7b7b7b]">
            {course.path}
          </p>
          {/* Location & duration */}
          <div className="flex items-center gap-[24px]">
            <div className="flex items-center gap-[3px]">
              <IconPin color="#707070" />
              <span className="text-[11px] text-[#707070]">{course.location}</span>
            </div>
            <div className="flex items-center gap-[3px]">
              <IconClock color="#707070" size={12} />
              <span className="text-[11px] text-[#707070]">{course.duration}</span>
            </div>
          </div>
        </div>

        {/* Arrow-up-right button */}
        <button
          type="button"
          className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-[#d5e6f6] shadow-[0px_2px_2.5px_rgba(0,0,0,0.07)]"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path
              d="M3 13L13 3M13 3H7M13 3V9"
              stroke="#2a4874"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

// ── Main component ────────────────────────────────────────────────────────────

interface Props {
  /** Course ID — swap DUMMY_COURSE for a real API call once backend is ready */
  courseId: string;
}

export default function RecommendationDetailPage({ courseId }: Props) {
  const course = DUMMY_COURSE;

  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{ background: "linear-gradient(180deg, #ffffff 50%, #eaf2fb 100%)" }}
    >
      {/* Decorative background blob */}
      <div
        className="pointer-events-none absolute left-1/2 top-[200px] -z-0 h-[860px] w-[860px] -translate-x-1/2 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(213,230,246,0.65) 0%, rgba(255,255,255,0) 68%)",
          filter: "blur(70px)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-4 md:px-10 lg:px-[120px]">
        {/* ── Header ──────────────────────────────────────────────────────── */}
        <section
          className="flex flex-col pb-[24px] md:pb-[32px] pt-[32px] md:pt-[48px]"
          style={{ fontFamily: pretendard }}
        >
          {/* Back link — text link at very top */}
          <Link
            href="/recommendation"
            className="mb-[20px] w-fit text-[16px] text-[#2a4874] transition-opacity hover:opacity-75"
          >
            ← 추천 코스 돌아가기
          </Link>

          {/* Location & start time */}
          <div className="mb-[10px] flex flex-wrap items-center gap-[14px] md:gap-[23px]">
            <div className="flex items-end gap-[3px]">
              <IconPin />
              <span className="text-[12px] text-[#757575]">{course.location}</span>
            </div>
            <div className="flex items-end gap-[3px]">
              <IconClock />
              <span className="text-[12px] text-[#757575]">{course.startTime}</span>
            </div>
          </div>

          {/* Course title */}
          <h1 className="mb-[10px] text-[22px] md:text-[32px] lg:text-[40px] font-medium leading-tight text-black">
            {course.title}
          </h1>

          {/* Description with dot-grid accent */}
          <div className="flex items-start gap-[12px]">
            <DotGrid />
            <p className="text-[12px] md:text-[14px] text-[#757575]">{course.description}</p>
          </div>
        </section>

        {/* ── 2-column (lg+) / 1-column (mobile·tablet) ───────────────────── */}
        <section className="flex flex-col lg:flex-row lg:items-start lg:gap-[25px] pb-20 gap-6">
          {/* ── Left: timeline card ─────────────────────────────────────────── */}
          <div className="flex min-w-0 flex-1 flex-col">
            {/* White outer card: badge + title header + all stops */}
            <div className="w-full rounded-[30px] bg-white px-[17px] pb-[19px] pt-[22px] shadow-[0px_8px_32px_rgba(42,72,116,0.12)]">

              {/* ── Card header: "Best Course!" + "상세 일정" (stacked) ──── */}
              <div className="mb-[22px] flex flex-col gap-[26px]">
                <span
                  className="flex h-[26px] w-fit items-center justify-center rounded-full bg-[#d5e6f6] px-[13px] text-[11px] text-black"
                  style={{ fontFamily: prompt }}
                >
                  Best Course !
                </span>
                <div className="flex items-center gap-[17px]" style={{ fontFamily: pretendard }}>
                  <span className="text-[20px] font-medium text-black">상세 일정</span>
                  <div className="flex items-end gap-[3px]">
                    <IconClock />
                    <span className="text-[12px] text-[#757575]">{course.totalDuration}</span>
                  </div>
                </div>
              </div>

              {/* ── Stop timeline ─────────────────────────────────────────── */}
              <div className="flex flex-col">
                {course.stops.map((stop, idx) => (
                  <StopCard
                    key={stop.id}
                    stop={stop}
                    isLast={idx === course.stops.length - 1}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ── Right: sidebar — 모바일에서 아래로, lg+에서 우측 고정 ────── */}
          <div className="flex w-full lg:w-[273px] lg:shrink-0 flex-col gap-[40px] lg:gap-[77px]">
            {/* Export card */}
            <ExportCard courseTitle={course.title} courseId={courseId} />

            {/* Alternative courses */}
            <div className="flex flex-col items-center gap-[25px]">
              <span
                className="flex h-[29px] items-center justify-center rounded-full border border-[rgba(255,255,255,0.45)] bg-[#2a4874] px-[21px] py-[7px] text-[13px] text-white shadow-[0px_3px_5px_rgba(0,0,0,0.10)]"
                style={{ fontFamily: pretendard }}
              >
                다른 추천 코스 !
              </span>
              <div className="flex w-full flex-col gap-[16px]">
                {course.alternatives.map((alt) => (
                  <AlternativeCard key={alt.id} course={alt} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
