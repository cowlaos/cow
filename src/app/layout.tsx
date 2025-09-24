import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Furbom - ງົວງົນ | Professional Portfolio & Development Services",
  description: "Furbom.com - ງົວງົນ professional portfolio showcasing innovative projects, technical skills, and development expertise. Discover quality web development and digital solutions.",
  keywords: ["furbom", "furbom.com", "ງົວງົນ", "web development", "portfolio", "software engineer", "developer", "programming", "technology"],
  authors: [{ name: "Furbom" }],
  creator: "Furbom",
  publisher: "Furbom",
  metadataBase: new URL('https://furbom.com'),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
      'lo-LA': '/lo-LA',
    },
  },
  openGraph: {
    title: "Furbom - ງົວງົນ | Professional Portfolio & Development Services",
    description: "Furbom.com - ງົວງົນ professional portfolio showcasing innovative projects, technical skills, and development expertise.",
    url: 'https://furbom.com',
    siteName: 'Furbom',
    images: [
      {
        url: '/cow-1.png',
        width: 800,
        height: 600,
        alt: 'Furbom Portfolio',
      },
      {
        url: '/cow-2.png',
        width: 1200,
        height: 630,
        alt: 'Furbom - ງົວງົນ Professional Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Furbom - ງົວງົນ | Professional Portfolio",
    description: "Furbom.com - ງົວງົນ professional portfolio showcasing innovative projects and technical expertise.",
    images: ['/cow-1.png'],
    creator: '@furbom',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/cow-1.png" />
        <meta name="theme-color" content="#0f172a" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Furbom" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="mobile-web-app-capable" content="yes" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navigation />
        <main className="pt-16">
          {children}
        </main>
      </body>
    </html>
  );
}
