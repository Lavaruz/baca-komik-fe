'use client'

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Poppins } from "next/font/google";
import "./globals.css";
import { usePathname } from "next/navigation";
import Navbar from "../components/layout/Navbar/page"
import Footer from "../components/layout/Footer/page"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"], // sesuaikan kebutuhan
  variable: "--font-poppins",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  const hideNavbarOn = ["/chapters"]; // sesuaikan sesuai routing kamu

  const shouldHideNavbar = hideNavbarOn.some(path => 
    pathname?.startsWith(path.replace("[slug]", ""))
  );

  return (
    <html lang="en" className={`${poppins.variable}`}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="stylesheet" href="https://unicons.iconscout.com/release/v4.0.8/css/line.css" />
      </head>
      <body className={`antialiased`}>
        {!shouldHideNavbar && <Navbar />}
        <div className="min-h-screen py-8">
          {children}
        </div>
        <Footer></Footer>
      </body>
    </html>
  );
}
