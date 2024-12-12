import {
  timestamp,
  text,
  pgEnum,
  serial,
  pgTable,
  integer,
  primaryKey,
} from "drizzle-orm/pg-core";
import { z } from "zod";
import type { AdapterAccountType } from "next-auth/adapters";

export const roleEnum = pgEnum("role", ["member", "admin"]);
export const accountTypeEnum = pgEnum("type", ["email", "google", "github"]);

export const resetTokens = pgTable("reset_tokens", {
  id: serial("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  token: text("token"),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
});

export const verifyEmailTokens = pgTable("verify_email_tokens", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  token: text("token"),
  tokenExpiresAt: timestamp("tokenExpiresAt", { mode: "date" }),
});

export const profiles = pgTable("profile", {
  id: text("id").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),
  displayName: text("displayName"),
  imageId: text("imageId"),
  image: text("image"),
  bio: text("bio").notNull().default(""),
});

export const alttexts = pgTable("alt_texts", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  imageUrl: text("imageUrl"),
  altText: text("altText"),
  createdAt: timestamp("createdAt", { mode: "date" }),
});

export const users = pgTable("user", {
  id: text("id")
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: text("name"),
  password: text("password"),
  email: text("email").unique(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: text("image"),
});

export const accounts = pgTable(
  "account",
  {
    userId: text("userId")
      .notNull()
      .references(() => users.id, { onDelete: "cascade" }),
    type: text("type").$type<AdapterAccountType>().notNull(),
    provider: text("provider").notNull(),
    providerAccountId: text("providerAccountId").notNull(),
    refresh_token: text("refresh_token"),
    access_token: text("access_token"),
    expires_at: integer("expires_at"),
    token_type: text("token_type"),
    scope: text("scope"),
    id_token: text("id_token"),
    session_state: text("session_state"),
    credits: integer("credits").default(0),
  },
  (account) => ({
    compoundKey: primaryKey({
      columns: [account.provider, account.providerAccountId],
    }),
  })
);

export const sessions = pgTable("session", {
  sessionToken: text("sessionToken").primaryKey(),
  userId: text("userId")
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const newsletters = pgTable("newsletter", {
  id: serial("id").primaryKey(),
  email: text("email").notNull().unique(),
});

export const imageUploadFormSchema = z
  .object({
    imageUrl: z.string().url().optional(),
    imageFile: z.any().optional(),
    language: z.string().min(1, "Language is required."),
    isProduct: z.boolean().default(false),
    hasKeywords: z.boolean().default(false),
    productName: z.string().optional(),
    brandName: z.string().optional(),
    extraInformation: z.string().optional(),
    seoKeywords: z.array(z.string()).optional(),
  })
  .refine((data) => !data.isProduct || data.productName, {
    message: "Product name is required.",
    path: ["productName"],
  })
  .refine((data) => data.imageUrl || data.imageFile, {
    message: "Either image url or image file must be provided.",
    path: ["imageUrl"],
  });

// @Types
export type User = typeof users.$inferSelect;
export type Profile = typeof profiles.$inferSelect;
