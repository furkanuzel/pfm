"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { PROTECTED_ROUTES } from "@/lib/routes";

export function MobileHeaderLinks({
  isAuthenticated,
}: {
  isAuthenticated: boolean;
}) {
  const path = usePathname();
  const isProtected = PROTECTED_ROUTES.includes(path);

  return (
    <div className="w-full gap-2">
      {isProtected && isAuthenticated && (
        <div className="flex flex-col">
          <Link className="h-12 flex items-center" href={"/dashboard"}>
            Dashboard
          </Link>
          <Link className="h-12 flex items-center" href={"/alt-texts"}>
            My Alt Texts
          </Link>
        </div>
      )}

      {!isProtected && (
        <div className="flex flex-col gap-2">
          <Link className="h-12 flex items-center" href="/features">
            Features
          </Link>
          <Link className="h-12 flex items-center" href="/pricing">
            Pricing
          </Link>
          <Link className="h-12 flex items-center" href={"/examples"}>
            Examples
          </Link>
        </div>
      )}
    </div>
  );
}
