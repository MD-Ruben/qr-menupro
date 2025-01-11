"use client";

import Footer from "@/components/CompteClient/Footer";
import Header from "@/components/CompteClient/Header";
import ScrollToTop from "@/components/ScrollToTop";
import { Inter, Playfair_Display } from "next/font/google";
import { Providers } from "./providers";
import "../styles/index.css";
import Banner from "@/components/CompteClient/Banner";

const inter = Inter({ subsets: ["latin"] });

const playfairVietnam = Playfair_Display({
  subsets: ['vietnamese'],
  variable: '--font-playfair-vietnam',
})

const playfairIndian = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair-indian',
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body className={`bg-[#FCFCFC] dark:bg-black ${inter.className} ${playfairVietnam.variable} ${playfairIndian.variable}`}>
        <Providers>
          <Banner />
          <Header />
          {children}
          <Footer />
          <ScrollToTop />
        </Providers>
      </body>
    </html>
  );
}
