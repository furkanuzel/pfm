"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "./theme-provider";
import { RootProvider } from "fumadocs-ui/provider";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <RootProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </RootProvider>
  );
}
