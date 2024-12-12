"use server";

import { database } from "@/db";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";
import bcryptjs from "bcryptjs";
import { LoginSchema } from "@/schemas/login-schema";
import { signIn } from "@/auth";
import { RegisterSchema } from "@/schemas/register-schema";
import type { z } from "zod";
import { DEFAULT_LOGIN_REDIRECT } from "@/lib/routes";
import { AuthError } from "next-auth";
import { createAccount } from "@/data-access/accounts";

export async function getUserFromDb(email: string, password: string) {
  try {
    const existedUser = await database.query.users.findFirst({
      where: eq(users.email, email),
    });

    if (!existedUser || !existedUser.password) {
      return {
        success: false,
        message: "LoginError",
      };
    }

    const isPasswordMatches = await bcryptjs.compare(
      password,
      existedUser.password
    );

    if (!isPasswordMatches) {
      return {
        success: false,
        message: "LoginError",
      };
    }

    const isEmailVerified = existedUser.emailVerified;

    if (!isEmailVerified) {
      return {
        success: true,
        message: "EmailVerificationError",
      };
    }

    return {
      success: true,
      data: existedUser,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export async function login(values: z.infer<typeof LoginSchema>) {
  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error: any) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentails!" };
        default:
          return { error: "Something went wrong!" };
      }
    }
    throw error;
  }
}

export async function loginWithGithub() {
  await signIn("github", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
}

export async function loginWithGoogle() {
  await signIn("google", { callbackUrl: DEFAULT_LOGIN_REDIRECT });
}

export async function register({
  email,
  password,
  confirmPassword,
}: {
  email: string;
  password: string;
  confirmPassword: string;
}) {
  try {
    RegisterSchema.parse({
      email,
      password,
      confirmPassword,
    });
    const existedUser = await getUserFromDb(email, password);
    if (
      existedUser.success &&
      existedUser.message === "EmailVerificationError"
    ) {
      return {
        success: false,
        message: "You need to verify your email",
      };
    }

    if (existedUser.success) {
      return {
        success: false,
        message: "Email is already in use",
      };
    }

    const hash = await bcryptjs.hash(password, 10);

    const [insertedUser] = await database
      .insert(users)
      .values({
        email,
        password: hash,
      })
      .returning({
        id: users.id,
        email: users.email,
      });

    await createAccount(insertedUser.id, hash);

    return {
      success: true,
      data: insertedUser,
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
}

export async function getUserByEmail(email: string) {
  const existedUser = await database.query.users.findFirst({
    where: eq(users.email, email),
  });
  return existedUser;
}

export async function getUserById(userId: string) {
  const existedUser = await database.query.users.findFirst({
    where: eq(users.id, userId),
  });
  return existedUser;
}
