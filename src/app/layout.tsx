"use client";

import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import { ThemeProvider } from "@/component/shared/ui/Theme-provider";
import ContextProvider from "@/context/useContext";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta", // CSS variable
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <ContextProvider>
            <Header />
            {children}
            <Footer />
          </ContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
