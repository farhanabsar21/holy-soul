import { NextRequest, NextResponse } from "next/server";
import { createQuranService } from "../../../services/quranService";

const quranService = createQuranService(
  process.env.QF_CLIENT_ID!,
  process.env.QF_CLIENT_SECRET!,
  process.env.QF_API_BASE_URL!,
  process.env.QF_OAUTH_TOKEN_URL!
);

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export async function GET(req: NextRequest) {
  try {
    const chapters = await quranService.getChapters();
    return NextResponse.json(chapters);
  } catch (err) {
    console.error(err);
    return NextResponse.json(
      { error: "Failed to fetch chapters" },
      { status: 500 }
    );
  }
}
