import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeaderUnauthenticated = () => {
  return (
    <>
      <Button asChild variant="outline">
        <Link href="/log-in">
          <span>Log In</span>
        </Link>
      </Button>
      <Button className="block max-sm:hidden" asChild>
        <Link href="/sign-up">
          <span>Sign Up</span>
        </Link>
      </Button>
    </>
  );
};

export default HeaderUnauthenticated;
