"use client";

import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { LogOut } from "lucide-react";
import * as NProgress from "nprogress";
import { signOut } from "next-auth/react";

export function SignOutItem() {
  return (
    <DropdownMenuItem
      className="cursor-pointer"
      onSelect={async () => {
        NProgress.start();
        signOut().then(() => {
          NProgress.done();
        });
      }}
    >
      <LogOut className="w-4 h-4 mr-2" />
      Sign Out
    </DropdownMenuItem>
  );
}
