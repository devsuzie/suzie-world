// import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export const meta = {
  title: "Suzie World",
  description: "Welcome to Suzie World",
  image: "/images/thumbnail.png",
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
        <meta name="description" content={meta.description} />
        <meta property="og:site_name" content={meta.title} />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />

        {/* Google tag (gtag.js) */}
        {/* <script async src="https://www.googletagmanager.com/gtag/js?id=G-RPWP13FV8T"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-RPWP13FV8T');
        </script> */}
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
