import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST & Accounting Services",
  description:
    "Comprehensive GST filing, accounting, statutory audit, payroll, and strategic advisory services for modern businesses.",
  keywords: [
    "GST services",
    "GST return filing",
    "GST consultant",
    "accounting services",
    "statutory audit",
    "payroll management",
    "tax advisory",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "GST & Accounting Services | Petkar Accounting & Co.",
    description:
      "End-to-end GST, accounting, and compliance services for businesses.",
    url: "https://petkaraccounting.co/services",
    type: "website",
  },
};

export default function ServicesLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
