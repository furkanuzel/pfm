ALTER TABLE "gf_alt_texts" RENAME TO "alt_texts";--> statement-breakpoint
ALTER TABLE "gf_newsletter" RENAME TO "newsletter";--> statement-breakpoint
ALTER TABLE "gf_profile" RENAME TO "profile";--> statement-breakpoint
ALTER TABLE "gf_reset_tokens" RENAME TO "reset_tokens";--> statement-breakpoint
ALTER TABLE "gf_verify_email_tokens" RENAME TO "verify_email_tokens";--> statement-breakpoint
ALTER TABLE "newsletter" DROP CONSTRAINT "gf_newsletter_email_unique";--> statement-breakpoint
ALTER TABLE "profile" DROP CONSTRAINT "gf_profile_userId_unique";--> statement-breakpoint
ALTER TABLE "reset_tokens" DROP CONSTRAINT "gf_reset_tokens_userId_unique";--> statement-breakpoint
ALTER TABLE "verify_email_tokens" DROP CONSTRAINT "gf_verify_email_tokens_userId_unique";--> statement-breakpoint
ALTER TABLE "alt_texts" DROP CONSTRAINT "gf_alt_texts_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "profile" DROP CONSTRAINT "gf_profile_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "reset_tokens" DROP CONSTRAINT "gf_reset_tokens_userId_user_id_fk";
--> statement-breakpoint
ALTER TABLE "verify_email_tokens" DROP CONSTRAINT "gf_verify_email_tokens_userId_user_id_fk";
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "alt_texts" ADD CONSTRAINT "alt_texts_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reset_tokens" ADD CONSTRAINT "reset_tokens_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "verify_email_tokens" ADD CONSTRAINT "verify_email_tokens_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "public"."user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
ALTER TABLE "newsletter" ADD CONSTRAINT "newsletter_email_unique" UNIQUE("email");--> statement-breakpoint
ALTER TABLE "profile" ADD CONSTRAINT "profile_userId_unique" UNIQUE("userId");--> statement-breakpoint
ALTER TABLE "reset_tokens" ADD CONSTRAINT "reset_tokens_userId_unique" UNIQUE("userId");--> statement-breakpoint
ALTER TABLE "verify_email_tokens" ADD CONSTRAINT "verify_email_tokens_userId_unique" UNIQUE("userId");