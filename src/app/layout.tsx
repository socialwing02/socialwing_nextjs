import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins } from "next/font/google"; // Import Poppins
import "./globals.css";

import MainHeader from "@/components/Header/MainHeader";
import Footer from "@/components/Footer/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Social Wing",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.variable} antialiased`} // Apply Poppins along with other fonts
      >
        <MainHeader />
        {children}
        <Footer />
      </body>
    </html>
  );
}
