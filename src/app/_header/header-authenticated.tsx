import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import { SignOutItem } from "./sign-out-item";
import { User } from "lucide-react";
import { usePathname } from "next/navigation";
import { PROTECTED_ROUTES } from "@/lib/routes";

const HeaderAuthenticated = () => {
  const pathname = usePathname();
  const isProtectedRoute = PROTECTED_ROUTES.includes(pathname);

  return (
    <>
      {!isProtectedRoute && (
        <Button variant="ghost" asChild>
          <Link href={"/dashboard"}>Go to Dashboard</Link>
        </Button>
      )}
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" size="icon">
            <User className="h-[1.2rem] w-[1.2rem]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="space-y-2">
          <SignOutItem />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

export default HeaderAuthenticated;
