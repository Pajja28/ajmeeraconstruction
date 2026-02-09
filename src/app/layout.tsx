import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Ajmeraa Constructions Pvt Ltd | Construction Excellence",
  description: "Leading construction company in Bengaluru specializing in premium Residential, Commercial, and Infrastructure projects. Trust, transparency, and quality guaranteed.",
  keywords: ["Construction", "Bengaluru", "Builders", "Residential", "Commercial", "Infrastructure", "Ajmeraa", "Real Estate"],

  openGraph: {
    title: "Ajmeraa Constructions Pvt Ltd",
    description: "Specializing in Residential, Commercial, and Infrastructure projects with a focus on trust and transparency.",
    url: "https://ajmeraaconstruction.org",
    siteName: "Ajmeraa Constructions Pvt Ltd",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/images/logo.png",
    shortcut: "/images/logo.png",
    apple: "/images/logo.png",
  },
  metadataBase: new URL('https://ajmeraaconstruction.org'),
  alternates: {
    canonical: './',
  },
};

import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "name": "Ajmeraa Constructions Private Ltd",
    "image": "https://ajmeraaconstruction.org/images/logo.png",
    "url": "https://ajmeraaconstruction.org",
    "telephone": "+917795840938",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "SLV Complex, Kattigenahalli",
      "addressLocality": "Bengaluru",
      "postalCode": "560063",
      "addressCountry": "IN"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+917795840938",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": ["en", "kn", "hi"]
    },
    // "geo": {
    //   "@type": "GeoCoordinates",
    //   "latitude": 12.9716, // Approximate, update if known
    //   "longitude": 77.5946
    // },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
      ],
      "opens": "09:00",
      "closes": "18:00"
    }
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-dark-slate`}>
        <Navbar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
