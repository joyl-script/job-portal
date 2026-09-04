import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://jobicy.com/api/v2/remote-jobs?count=10&tag=frontend");

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch jobs" }, { status: res.status });
    }

    const data = await res.json();

    // Jobicy отдаёт { jobs: [...] }
    return NextResponse.json(data.jobs ?? []);
  } catch (err) {
    return NextResponse.json({ error: "Jobicy unavailable" }, { status: 502 });
  }
}
