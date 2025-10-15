import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { password, slug } = await req.json();

  // 🔑 Same password for all locked case studies
  const correctPassword = process.env.CASESTUDY_PASSWORD || "oriale123";

  if (password === correctPassword) {
    const res = NextResponse.json({ success: true });

    // 🍪 cookie set karte hain slug ke name se
    res.cookies.set(`unlocked_${slug}`, "true", {
      httpOnly: true,
      maxAge: 60 * 60, // 1 hour
      path: "/",
    });

    return res;
  }

  return NextResponse.json(
    { success: false, message: "Invalid password" },
    { status: 401 }
  );
}
