import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "BreakdownInsurance.co.nz | Mechanical Breakdown Insurance NZ | Compare & Save",
  description: "Compare mechanical breakdown insurance in New Zealand. Get independent MBI quotes from licensed NZ brokers. Comprehensive cover for engine, transmission, electrical systems, EV batteries and more.",
  keywords: [
    "mechanical breakdown insurance NZ",
    "MBI New Zealand",
    "breakdown insurance NZ",
    "mechanical breakdown cover",
    "used car warranty NZ",
    "vehicle breakdown insurance",
    "engine failure insurance NZ",
    "transmission insurance NZ",
    "EV breakdown insurance NZ",
    "electric vehicle MBI",
    "cheap MBI NZ",
    "best mechanical breakdown insurance",
    "compare MBI NZ",
    "roadside assistance NZ",
    "mechanical breakdown insurance Auckland",
    "mechanical breakdown insurance cost NZ",
    "Japanese import MBI NZ",
    "MBI extended warranty NZ",
    "car breakdown cover NZ",
    "drivetrain insurance NZ",
  ],
  authors: [{ name: "BreakdownInsurance.co.nz" }],
  alternates: { canonical: "https://breakdowninsurance.co.nz" },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    type: "website",
    locale: "en_NZ",
    url: "https://breakdowninsurance.co.nz",
    title: "BreakdownInsurance.co.nz | Mechanical Breakdown Insurance NZ | Compare & Save",
    description: "Compare mechanical breakdown insurance from NZ's top MBI providers. Independent advice, free quotes, and expert guidance on engine, transmission, electrical and EV cover.",
    siteName: "BreakdownInsurance.co.nz",
    images: [{ url: 'https://breakdowninsurance.co.nz/android-chrome-512x512.png', width: 512, height: 512, alt: 'BreakdownInsurance.co.nz' }],
  },
  twitter: {
    card: "summary_large_image",
    title: "BreakdownInsurance.co.nz | Mechanical Breakdown Insurance NZ",
    description: "Compare MBI providers in New Zealand. Free expert quotes from licensed brokers within 24 hours.",
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [{ rel: 'manifest', url: '/site.webmanifest' }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased scroll-smooth">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#f59e0b" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col bg-white font-sans antialiased">
        <NavBar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
