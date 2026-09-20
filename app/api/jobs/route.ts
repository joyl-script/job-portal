import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const count = searchParams.get("count") ?? "10";
    const tag = searchParams.get("tag");
    const params = new URLSearchParams({ count });
    if (tag) params.set("tag", tag);

    const res = await fetch(`https://jobicy.com/api/v2/remote-jobs?${params.toString()}`);

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
