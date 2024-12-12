import { database } from "@/db";
import { accounts } from "@/db/schema";
import type { UserId } from "@/use-cases/types";
import { eq } from "drizzle-orm";

export async function getAccountByUserId(userId: UserId) {
  const account = await database.query.accounts.findFirst({
    where: eq(accounts.userId, userId),
  });

  return account;
}

export async function createAccount(userId: UserId, password: string) {
  const [account] = await database
    .insert(accounts)
    .values({
      userId,
      type: "email",
      provider: "email",
      providerAccountId: userId,
      refresh_token: null,
      access_token: null,
      expires_at: null,
      token_type: null,
      scope: null,
      id_token: null,
      session_state: null,
    })
    .returning();
  return account;
}
