ALTER TABLE "verify_email_tokens" DROP CONSTRAINT "verify_email_tokens_userId_unique";--> statement-breakpoint
ALTER TABLE "verify_email_tokens" ALTER COLUMN "id" SET DATA TYPE text;--> statement-breakpoint
ALTER TABLE "verify_email_tokens" ALTER COLUMN "userId" SET DATA TYPE text;