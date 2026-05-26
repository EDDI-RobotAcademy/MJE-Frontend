import { chromium } from "playwright";

const URL = "http://localhost:3000/courses/detail/11db603b-4924-488b-8059-8379dee6d894?grade=best";

const browser = await chromium.launch({ headless: true });
// 캐시 완전 비활성화
const context = await browser.newContext({
  viewport: { width: 390, height: 844 },
  bypassCSP: true,
  extraHTTPHeaders: { "Cache-Control": "no-cache, no-store" },
});
const page = await context.newPage();
await page.route("**/*", route => route.continue({ headers: { ...route.request().headers(), "Cache-Control": "no-cache" } }));

const consoleLogs = [];
const networkErrors = [];
const kakaoRequests = [];

page.on("console", msg => {
  if (msg.type() === "error") consoleLogs.push(`[ERR] ${msg.text()}`);
  if (msg.type() === "warning") consoleLogs.push(`[WARN] ${msg.text()}`);
});
page.on("requestfailed", req => {
  networkErrors.push(`FAILED: ${req.url()} — ${req.failure()?.errorText}`);
});
page.on("request", req => {
  if (req.url().includes("kakao")) kakaoRequests.push(req.url());
});

// 1. 페이지 로드
await page.goto(URL, { waitUntil: "domcontentloaded", timeout: 20000 });

// 스켈레톤 캡처 (로드 직후)
const skeletonEarly = await page.evaluate(() => !!document.querySelector(".animate-pulse"));
console.log(`[1] 로드 직후 스켈레톤: ${skeletonEarly}`);
await page.screenshot({ path: "verify-1-initial.png" });

// 2. NEXT_PUBLIC 환경변수 확인
const mapKeyInBrowser = await page.evaluate(() => {
  // Next.js는 NEXT_PUBLIC_ 변수를 번들에 인라인하므로 window에 없을 수 있음
  // 대신 script src로 확인
  const script = document.getElementById("kakao-map-sdk");
  return script ? script.getAttribute("src") : "script-not-injected";
});
console.log(`[2] kakao script src: ${mapKeyInBrowser}`);

// 3. Kakao SDK 로드 대기 (최대 8초)
const kakaoLoaded = await page.waitForFunction(
  () => typeof window.kakao !== "undefined",
  { timeout: 8000 }
).then(() => true).catch(() => false);
console.log(`[3] kakao 전역 객체 로드: ${kakaoLoaded}`);

if (kakaoLoaded) {
  // kakao.maps.load 완료 대기
  await page.waitForFunction(
    () => window.kakao?.maps?.Map !== undefined,
    { timeout: 8000 }
  ).catch(() => {});
}

await page.waitForTimeout(2000);
await page.screenshot({ path: "verify-2-after-kakao.png" });

// 4. 지도 DOM 상태
const mapDom = await page.evaluate(() => {
  const wrapper = document.querySelector(".h-\\[200px\\]");
  if (!wrapper) return { found: false };
  const allChildren = Array.from(wrapper.querySelectorAll("*"));
  const visible = wrapper.querySelector("[style*='visibility: visible']");
  const hidden = wrapper.querySelector("[style*='visibility: hidden']");
  const canvas = wrapper.querySelectorAll("canvas").length;
  const imgs = wrapper.querySelectorAll("img[src*='map']").length;
  return {
    found: true,
    hasVisibleDiv: !!visible,
    hasHiddenDiv: !!hidden,
    canvasCount: canvas,
    mapImgCount: imgs,
    childCount: allChildren.length,
    outerHTML_snippet: wrapper.outerHTML.substring(0, 300),
  };
});
console.log("[4] 지도 DOM:", JSON.stringify(mapDom, null, 2));

// 5. fallback 텍스트 확인
const fallbackText = await page.evaluate(() => {
  const spans = Array.from(document.querySelectorAll("span"));
  return spans.find(s => s.textContent?.includes("지도를 불러올 수 없어요"))?.textContent ?? null;
});
console.log(`[5] fallback 텍스트 표시: ${fallbackText}`);

// 6. 스켈레톤 잔존 여부
const skeletonAfter = await page.evaluate(() => !!document.querySelector(".animate-pulse"));
console.log(`[6] 완료 후 스켈레톤 잔존: ${skeletonAfter}`);

// 7. 장소 목록이 지도 아래에 있는지 순서 확인
const orderOk = await page.evaluate(() => {
  const scheduleCard = Array.from(document.querySelectorAll(".rounded-\\[30px\\]")).find(el =>
    el.textContent?.includes("상세 일정")
  );
  if (!scheduleCard) return "schedule-card-not-found";
  const children = Array.from(scheduleCard.children);
  const mapWrapIdx = children.findIndex(c => c.querySelector(".h-\\[200px\\]") || c.classList.contains("h-\\[200px\\]"));
  const placesIdx = children.findIndex(c => c.querySelector(".rounded-\\[18px\\]"));
  return { mapWrapIdx, placesIdx, correct: mapWrapIdx !== -1 && placesIdx !== -1 && mapWrapIdx < placesIdx };
});
console.log("[7] 지도↑ 장소목록↓ 순서:", JSON.stringify(orderOk));

console.log("[kakao network requests]", kakaoRequests);
if (consoleLogs.length) console.log("[console]", consoleLogs);
if (networkErrors.length) console.log("[network errors]", networkErrors);

// 8. 전체 스크린샷
await page.screenshot({ path: "verify-3-fullpage.png", fullPage: true });
console.log("[done] screenshots: verify-1-initial.png, verify-2-after-kakao.png, verify-3-fullpage.png");

await browser.close();
