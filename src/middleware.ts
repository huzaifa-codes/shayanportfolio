import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const lockedStudies = ["poppy-store", "vista-landscapes", "shell-technologies"];

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname.startsWith("/casestudy/")) {
    const slug = pathname.split("/").pop();

    if (slug && lockedStudies.includes(slug)) {
      const cookie = req.cookies.get(`unlocked_${slug}`);

      if (!cookie) {
        const redirectUrl = new URL("/", req.url);
        redirectUrl.searchParams.set("lockedSlug", slug); // pass slug
        return NextResponse.redirect(redirectUrl);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/casestudy/:path*"],
};
