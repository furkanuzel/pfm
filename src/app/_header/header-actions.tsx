"use client";
import type React from "react";
import { ModeToggle } from "@/components/mode-toggle";
import HeaderAuthenticated from "./header-authenticated";
import HeaderUnauthenticated from "./header-unauthenticated";

interface IProps {
  isAuthenticated: boolean;
}

const HeaderActions: React.FC<IProps> = ({ isAuthenticated }) => {
  return (
    <>
      {isAuthenticated ? <HeaderAuthenticated /> : <HeaderUnauthenticated />}
      <ModeToggle />
    </>
  );
};

export default HeaderActions;
