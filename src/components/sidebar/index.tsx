"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { MobileHeaderLinks } from "@/app/_header/mobile-header-links";

interface IProps {
  isAuthenticated: boolean;
}

const Sidebar: React.FC<IProps> = ({ isAuthenticated }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button
          className="hidden max-md:flex max-md:justify-center max-md:items-center"
          variant="outline"
          size="icon"
        >
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <MobileHeaderLinks isAuthenticated={isAuthenticated} />
        <SheetFooter></SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
