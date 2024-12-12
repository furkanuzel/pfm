import NextAuth from "next-auth";

import {
  DEFAULT_UNAUTHENTICATED_REDIRECT,
  PROTECTED_ROUTES,
  AUTH_ROUTES,
  DEFAULT_LOGIN_REDIRECT,
} from "./lib/routes";
import { authConfig } from "./auth";
import { NextResponse, type NextRequest } from "next/server";
import { env } from "./env";

const { auth } = NextAuth(authConfig);

export default auth((req: any) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;
  const isAuthRoute = AUTH_ROUTES.includes(nextUrl.pathname);
  const isProtectedRoute = PROTECTED_ROUTES.includes(nextUrl.pathname);

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
  }

  if (!isLoggedIn && isProtectedRoute) {
    return Response.redirect(
      new URL(DEFAULT_UNAUTHENTICATED_REDIRECT, nextUrl)
    );
  }
});

export const config = {
  matcher: [
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    "/(api|trpc)(.*)",
  ],
};
