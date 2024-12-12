import { database } from "@/db";
import { type User, users } from "@/db/schema";
import { eq } from "drizzle-orm";
import type { UserId } from "@/use-cases/types";
import bcryptjs from "bcryptjs";

export async function deleteUser(userId: UserId) {
  await database.delete(users).where(eq(users.id, userId));
}

export async function getUser(userId: UserId) {
  const user = await database.query.users.findFirst({
    where: eq(users.id, userId),
  });

  return user;
}

export async function createUser(email: string) {
  const [user] = await database
    .insert(users)
    .values({
      email,
    })
    .returning();
  return user;
}

export async function getUserByEmail(email: string) {
  const user = await database.query.users.findFirst({
    where: eq(users.email, email),
  });

  return user;
}

export async function setEmailVerified(userId: UserId) {
  await database
    .update(users)
    .set({
      emailVerified: new Date(),
    })
    .where(eq(users.id, userId));
}

export async function updateUser(userId: UserId, updatedUser: Partial<User>) {
  await database.update(users).set(updatedUser).where(eq(users.id, userId));
}

export async function updatePassword(
  userId: UserId,
  password: string,
  trx = database
) {
  const hash = await bcryptjs.hash(password, 10);
  await trx
    .update(users)
    .set({
      password: hash,
    })
    .where(eq(users.id, userId));
}
