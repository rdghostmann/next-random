"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



const metadata: Metadata = {
  title: "TSX Randomizer",
  description: "Randomise set Random Numbers",
  manifest: "../public/manifest.json",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={`${inter.className} bg-neutral-200/70`}>
        {children}
        
        </body>
    </html>
  );
}



