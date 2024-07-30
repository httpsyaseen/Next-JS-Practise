// middleware.js
import { NextResponse } from "next/server";

export async function middleware(req) {
  const { pathname } = req.nextUrl;

  // Example: Redirect to login page if not authenticated
  if (pathname.startsWith("/secure") && !req.cookies.get("auth_token")) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  // Example: Logging request URL
  console.log(`Request URL: ${pathname}`);

  // Allow the request to proceed
  return NextResponse.next();
}

// Specify paths to apply the middleware
export const config = {
  matcher: ["/((?!api|_next|static|favicon.ico).*)"], // Apply to all paths except for API routes and static files
};
