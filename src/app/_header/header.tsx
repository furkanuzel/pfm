"use client";

import Link from "next/link";
import Image from "next/image";
import { HeaderLinks } from "@/app/_header/header-links";
import { applicationName } from "@/app-config";
import HeaderActions from "./header-actions";
import { useCurrentSession } from "@/hooks/use-current-session";
import Sidebar from "@/components/sidebar";

export function Header() {
  const { isAuthenticated } = useCurrentSession();
  return (
    <div className="px-5 md:px-6 border-b ">
      <div className="mx-auto flex w-full max-w-7xl py-4 justify-between">
        <div className="w-full flex gap-10 items-center">
          <Link href="/" className="flex items-center gap-2">
            <span className="ml-1 leading-tight tracking-tighter max-md:text-xl lg:text-2xl font-bold">
              {applicationName}
            </span>
          </Link>
          <HeaderLinks isAuthenticated={isAuthenticated === "authenticated"} />
        </div>
        <div className="flex items-center justify-between gap-5">
          <HeaderActions
            isAuthenticated={isAuthenticated === "authenticated"}
          />
          <Sidebar isAuthenticated={isAuthenticated === "authenticated"} />
        </div>
      </div>
    </div>
  );
}
