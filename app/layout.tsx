import "./globals.css";
import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { Toaster } from "sonner";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "next-themes";
import { SiteHeader } from "@/components/layouts/site-header";
import { NuqsAdapter } from "nuqs/adapters/next/app";
import TanstackProvider from "@/components/providers/tanstack-provider";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "NFT Marketplace — Next.js App Router",
  description: "View top trending NFT",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          GeistSans.variable
        )}
      >
        <NuqsAdapter>
          <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <TanstackProvider>
              <div className="relative flex flex-col">
                <SiteHeader />
                <div className="flex-1">
                  <Suspense>{children}</Suspense>
                </div>
              </div>
            </TanstackProvider>
            <Toaster closeButton />
          </ThemeProvider>
        </NuqsAdapter>
      </body>
    </html>
  );
}
