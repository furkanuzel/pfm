import { AltTextsPage, SignupPage } from "@/util/seo";
import type { Metadata } from "next";
import type React from "react";

export const metadata: Metadata = {
  title: SignupPage.title,
};

const layout = ({ children }: { children: React.ReactNode }) => {
  return <>{children}</>;
};

export default layout;
