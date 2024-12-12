import { AuthenticationError } from "@/app/util";
import { auth } from "@/auth";
import { cache } from "react";
import { redirect } from "next/navigation";
import { DEFAULT_UNAUTHENTICATED_REDIRECT } from "./routes";

export const getCurrentUser = cache(async () => {
  const session = await auth();
  return session?.user ?? undefined;
});

export const assertAuthenticated = async () => {
  const user = await getCurrentUser();
  if (!user) {
    redirect(DEFAULT_UNAUTHENTICATED_REDIRECT);
  }
  return user;
};
