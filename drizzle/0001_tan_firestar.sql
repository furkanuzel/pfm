CREATE TABLE IF NOT EXISTS "gf_alt_texts" (
	"id" serial PRIMARY KEY NOT NULL,
	"userId" serial NOT NULL,
	"imageUrl" text,
	"altText" text,
	"createdAt" timestamp
);
--> statement-breakpoint
DROP TABLE "gf_events";--> statement-breakpoint
DROP TABLE "gf_following";--> statement-breakpoint
DROP TABLE "gf_invites";--> statement-breakpoint
DROP TABLE "gf_notifications";--> statement-breakpoint
DROP TABLE "gf_posts";--> statement-breakpoint
DROP TABLE "gf_replies";--> statement-breakpoint
ALTER TABLE "gf_accounts" ADD COLUMN "credits" integer DEFAULT 0;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "gf_alt_texts" ADD CONSTRAINT "gf_alt_texts_userId_gf_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."gf_user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "gf_subscriptions" ADD CONSTRAINT "gf_subscriptions_userId_unique" UNIQUE("userId");