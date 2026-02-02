import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajmeraa Construction | Bengaluru's Construction Excellence",
  description: "Leading construction company in Bengaluru specializing in premium Residential, Commercial, and Infrastructure projects. Trust, transparency, and quality guaranteed.",
  keywords: ["Construction", "Bengaluru", "Builders", "Residential", "Commercial", "Infrastructure", "Ajmeraa", "Real Estate"],
  openGraph: {
    title: "Ajmeraa Construction | Building Dreams",
    description: "Specializing in Residential, Commercial, and Infrastructure projects with a focus on trust and transparency.",
    url: "https://ajmeraconstruction.com",
    siteName: "Ajmeraa Construction",
    images: [
      {
        url: "/images/og-image.jpg", // We might not have this, but good to have the tag structure
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL('https://ajmeraconstruction.com'),
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
