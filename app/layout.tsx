import type { Metadata } from "next";
import "./globals.css";

import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Muhammad Adlan Azzikra | AI Technologist & Strategic Leader",
  description: "Informatics Engineering graduate (GPA 3.92) bridging technical AI implementation with organizational growth to deliver innovative, data-driven solutions.",
  icons: {
    icon: "/ttd.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="antialiased h-full">
      <body className="font-sans min-h-full flex flex-col bg-slate-50 dark:bg-[#030712] text-slate-800 dark:text-slate-200 selection:bg-purple-500/30 selection:text-purple-200 transition-colors duration-300">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
