// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import { GoogleAnalytics } from "@next/third-parties/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Metadata } from "next";
import { openGraphMetaData, twitterMetaData } from "./shared-metadata";

export const metadata: Metadata = {
  metadataBase: new URL("http://localhost:3000"),
  title: "Suzie World",
  description: "Welcome to Suzie World",
  openGraph: openGraphMetaData,
  twitter: twitterMetaData,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="follow, index" />
        {/* Google tag (gtag.js) */}
        {/* https://nextjs.org/docs/messages/next-script-for-ga#use-nextthird-parties-to-add-google-analytics */}
        <GoogleAnalytics gaId="G-RPWP13FV8T" />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
