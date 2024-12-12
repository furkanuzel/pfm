import Container from "@/components/container";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function VerifySuccess() {
  return (
    <Container>
      <div className="py-24 mx-auto max-w-xl space-y-6">
        <h1 className="text-2xl font-bold">Email Successfully Verified</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Your email has been successfully verified. You can now sign in to your
          account.
        </p>
        <Button asChild>
          <Link href="/log-in">Sign In</Link>
        </Button>
      </div>
    </Container>
  );
}
