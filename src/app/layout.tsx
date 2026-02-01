import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajmeraa Construction | Bengaluru's Constructio Excellence",
  description: "Specializing in Residential, Commercial, and Infrastructure projects with a focus on trust and transparency.",
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-dark-slate`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
