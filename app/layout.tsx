import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://petkaraccounting.co"),
  title: {
    default: "Petkar Accounting & Co. | ITR Filing & GST Services",
    template: "%s | Petkar Accounting & Co.",
  },
  description:
    "Affordable and accurate ITR filing, GST return filing, accounting, and tax advisory services for individuals, professionals, and businesses.",
  keywords: [
    "ITR filing",
    "income tax return filing",
    "ITR filing online",
    "ITR filing services",
    "ITR filling",
    "GST filing",
    "GST return filing",
    "GST consultant",
    "tax consultant",
    "CA services",
    "accounting services",
    "Petkar Accounting",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Petkar Accounting & Co. | ITR Filing & GST Services",
    description:
      "Expert ITR filing and GST compliance services with high accuracy and transparent pricing.",
    url: "https://petkaraccounting.co",
    siteName: "Petkar Accounting & Co.",
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Petkar Accounting & Co. | ITR Filing & GST Services",
    description:
      "Affordable ITR filing and GST services for individuals and businesses.",
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-background selection:bg-indigo-500/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              name: "Petkar Accounting & Co.",
              url: "https://petkaraccounting.co",
              areaServed: "IN",
              serviceType: [
                "ITR Filing",
                "GST Return Filing",
                "Tax Advisory",
                "Accounting Services",
              ],
              telephone: "+91-7020945991",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Mumbai",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
