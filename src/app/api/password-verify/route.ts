import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password } = await req.json();
  const correctPassword = process.env.CASESTUDY_PASSWORD || "oriale123";

  if (password === correctPassword) {
    return NextResponse.json({ success: true });
  } else {
    return NextResponse.json({ success: false, message: "Invalid password" }, { status: 401 });
  }
}
