import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import Script from "next/script";

export const metadata: Metadata = {
  title: "The BurgerDudes — Premium Burgers • Fast Delivery | Fort Worth, TX",
  description:
    "The BurgerDudes — Fort Worth's boldest burger joint. Premium burgers, Philly cheesesteaks, fried chicken, and more. Order via UberEats, DoorDash, or Grubhub.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17869738192"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17869738192');
          `}
        </Script>
      </head>
      <body>
        <ScrollToTop />
        {children}
      </body>
    </html>
  );
}
