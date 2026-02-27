import { getSessionCookie } from "better-auth/cookies";
import { type NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);
  const pathName = request.nextUrl.pathname;
  const isAuthpage = pathName.startsWith("/auth/");
  const isProtectedPage = pathName.startsWith("/dashboard");

  if (!sessionCookie && isProtectedPage) {
    return NextResponse.redirect(new URL("/auth/login", request.url));
  }
  if (sessionCookie && isAuthpage) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/auth/:path*"],
};
