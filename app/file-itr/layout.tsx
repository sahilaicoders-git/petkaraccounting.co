import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "ITR Filing Services",
  description:
    "Fast, affordable, and accurate ITR filing service. Submit PAN and contact details to get CA-led income tax return filing support.",
  keywords: [
    "ITR filing",
    "income tax return filing",
    "ITR filing online",
    "ITR filing services",
    "tax return filing India",
    "CA ITR filing",
  ],
  alternates: {
    canonical: "/file-itr",
  },
  openGraph: {
    title: "ITR Filing Services | Petkar Accounting & Co.",
    description:
      "Get expert ITR filing support with high accuracy and quick turnaround.",
    url: "https://petkaraccounting.co/file-itr",
    type: "website",
  },
};

export default function ItrLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return children;
}
