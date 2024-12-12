import { DrizzleAdapter } from "@auth/drizzle-adapter";
import NextAuth from "next-auth";
import { encode as defaultEncode } from "next-auth/jwt";
import Credentials from "next-auth/providers/credentials";
import Github from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { v4 as uuid } from "uuid";
import { database } from "./db";
import { env } from "./env";
import { LoginSchema } from "./schemas/login-schema";
import { getUserByEmail, getUserById } from "./actions/user.actions";
import bcrypt from "bcryptjs";

const adapter = DrizzleAdapter(database);

const authConfig = {
  adapter,
  providers: [
    Credentials({
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials);
        if (validatedFields.success) {
          const { email, password } = validatedFields.data;
          const user = await getUserByEmail(email);
          if (!user || !user.password) return null;
          const passwordMatch = await bcrypt.compare(password, user.password);
          if (passwordMatch) return user;
        }
        return null;
      },
    }),
  ],
  callbacks: {
    async jwt({ token }: any) {
      return token;
    },
    async session({ session, token }: any) {
      if (token.sub && session.user) {
        session.user.id = token.sub;
      }
      return session;
    },
    async signIn({ user, account }: any) {
      const existingUser = await getUserById(user.id);
      if (
        account.provider &&
        (account.provider === "google" || account.provider === "github")
      ) {
        return true;
      }

      if (!existingUser) return false;
      if (account.provider === "credentials" && !existingUser.emailVerified) {
        return false;
      }
      return true;
    },
  },
  jwt: {
    encode: async (params: any) => {
      if (params.token?.credentials) {
        const sessionToken = uuid();

        if (!params.token.sub) {
          throw new Error("No user ID found in token");
        }

        const createdSession = await adapter?.createSession?.({
          sessionToken: sessionToken,
          userId: params.token.sub,
          expires: new Date(Date.now() + 30 * 24 * 60 * 60 * 1000), // 30 days
        });

        if (!createdSession) {
          throw new Error("Failed to create session");
        }

        return sessionToken;
      }
      return defaultEncode(params);
    },
  },
  secret: env.AUTH_SECRET,
  session: { strategy: "jwt" as const },
};

export const { handlers, signIn, signOut, auth } = NextAuth(authConfig);
export { authConfig };
