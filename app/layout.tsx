import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { personJsonLd, websiteJsonLd } from "@/lib/jsonld";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dash Dunmire - Finance Student",
  description: "Passionate finance student at The Ohio State University with expertise in technology, including Python, React, and quantum computing. Explore my projects and professional experience.",
  keywords: ["Dash Dunmire", "finance student", "technology enthusiast", "Python developer", "React developer", "The Ohio State University"],
  authors: [{ name: "Dash Dunmire" }],
  creator: "Dash Dunmire",
  publisher: "Dash Dunmire",
  openGraph: {
    title: "Dash Dunmire - Finance Student",
    description: "Passionate finance student at The Ohio State University with knowledge in technology, including Python, React, and quantum computing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-resume.svg",
        width: 1200,
        height: 630,
        alt: "Dash Dunmire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash Dunmire - Finance Student",
    description: "Passionate finance student at The Ohio State University with expertise in technology, including Python, React, and quantum computing.",
    images: ["/og-resume.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const plausibleDomain = process.env.NEXT_PUBLIC_PLAUSIBLE_DOMAIN;

  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteJsonLd()),
          }}
        />

        {/* Plausible Analytics */}
        {plausibleDomain && (
          <script
            defer
            data-domain={plausibleDomain}
            src="https://plausible.io/js/script.js"
          />
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}

        {/* Vercel Analytics */}
        <Analytics />
      </body>
    </html>
  );
}
