
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/component/layout/Header";
import Footer from "@/component/layout/Footer";
import { ThemeProvider } from "@/component/shared/ui/Theme-provider";
import ContextProvider from "@/context/useContext";
import type { Metadata } from 'next'
import Head from "next/head";
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  title: 'Shayandesigns UI UX Designer',
  description: 'This is me Shayan Designs',
  icons: {
    icon: '/images/shayan-logo.svg',  
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={jakarta.variable}>
      <Head>
       <meta name="google-site-verification" content="kovY2fOWBJnu2cBtv0jrTiD0BozLPQaXTVtTmG1fMfs" />
      </Head>
      <body>
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        > */}
          {/* ✅ Wrap ContextProvider */}
          <ContextProvider>
            <Header />
            {children}
            <Footer />
          </ContextProvider>
        {/* </ThemeProvider> */}
      </body>
    </html>
  );
}
