import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Dash Dunmire - Finance Student & Technology Enthusiast",
  description: "Passionate finance student at The Ohio State University with expertise in technology, including Python, React, and quantum computing. Explore my projects and professional experience.",
  keywords: ["Dash Dunmire", "finance student", "technology enthusiast", "Python developer", "React developer", "quantum computing", "The Ohio State University"],
  authors: [{ name: "Dash Dunmire" }],
  creator: "Dash Dunmire",
  publisher: "Dash Dunmire",
  openGraph: {
    title: "Dash Dunmire - Finance Student & Technology Enthusiast",
    description: "Passionate finance student at The Ohio State University with expertise in technology, including Python, React, and quantum computing.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/og-resume.svg",
        width: 1200,
        height: 630,
        alt: "Dash Dunmire - Professional Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dash Dunmire - Finance Student & Technology Enthusiast",
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
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
