import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const movies = await db.movie.findMany({
      orderBy: { createdAt: 'desc' }
    });
    return NextResponse.json(movies, { status: 200 });
  } catch (error) {
    console.error("[MOVIES_GET_ERROR]", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
