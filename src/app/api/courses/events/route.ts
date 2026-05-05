import { NextRequest, NextResponse } from "next/server";

const BACKEND_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    console.log("[courses/events] 전송:", JSON.stringify(body));
    const res = await fetch(`${BACKEND_URL}/courses/events`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    console.log("[courses/events] 백엔드 응답:", res.status);
  } catch (e) {
    console.error("[courses/events] 전송 실패:", e);
  }
  return new NextResponse(null, { status: 204 });
}
