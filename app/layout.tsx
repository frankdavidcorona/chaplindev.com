import { Metadata } from "next";
import { Inter } from "next/font/google";
import LocalFont from "next/font/local";

// https://vercel.com/docs/concepts/analytics/quickstart
import { Analytics } from "@vercel/analytics/react";

import "../global.css";

export const metadata: Metadata = {
  title: {
    default: "chaplindev.com",
    template: "%s | chaplindev.com",
  },
  description: "Software engineer at SamSystems.io",
  openGraph: {
    title: "chaplindev.com",
    description: "Software engineer at SamSystems.io",
    url: "https://chaplindev.com",
    siteName: "chaplindev.com",
    images: [
      {
        url: "https://chaplindev.com/og.png",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Chronark",
    card: "summary_large_image",
  },
  icons: {
    shortcut: "/favicon.png",
  },
};
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const calSans = LocalFont({
  src: "../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={[inter.variable, calSans.variable].join(" ")}>
      <head></head>
      <body
        className={`bg-black ${
          process.env.NODE_ENV === "development" ? "debug-screens" : undefined
        }`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
