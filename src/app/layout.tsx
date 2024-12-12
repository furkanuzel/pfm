import "@/app/globals.css";
import "fumadocs-ui/style.css";
import NextTopLoader from "nextjs-toploader";
import { Toaster } from "@/components/ui/sonner";
import { cn } from "@/lib/utils";
import { type ReactNode, Suspense } from "react";
import { Providers } from "@/providers/providers";
import { Footer } from "@/components/footer";
import { Header } from "@/app/_header/header";
import { Inter } from "next/font/google";
import { BreakpointOverlay } from "@/components/breakpoint-overlay";
import { ReactQueryClientProvider } from "@/components/query-client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SessionProvider } from "next-auth/react";
import { auth } from "@/auth";
import Wrapper from "@/components/wrapper";

const inter = Inter({ subsets: ["latin"], display: "swap" });

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const session = await auth();

  return (
    <SessionProvider session={session}>
      <ReactQueryClientProvider>
        <html lang="en" suppressHydrationWarning>
          <body
            className={cn(
              "min-h-screen bg-background antialiased",
              inter.className
            )}
          >
            <Providers>
              <NextTopLoader />
              <div className="flex flex-col w-full min-h-screen">
                <div className="flex-1">{children}</div>
              </div>
            </Providers>
            <Toaster position="top-center" richColors={true} />
          </body>
        </html>
      </ReactQueryClientProvider>
    </SessionProvider>
  );
}
