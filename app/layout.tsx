import type { Metadata } from "next";
import {
  Pinyon_Script,
  Lusitana,
  Jost,
  Ballet,
  Tangerine,
  Marcellus,
} from "next/font/google";
import "./globals.css";

const pinyon = Pinyon_Script({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-script",
  display: "swap",
});

const ballet = Ballet({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const lusitana = Lusitana({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
});

const jost = Jost({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const tangerine = Tangerine({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-faq",
  display: "swap",
});

const marcellus = Marcellus({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-marcellus",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Carlo & Trixia — Are Getting Married",
  description:
    "Join us as we celebrate the wedding of Carlo & Trixia on Saturday, 28 November 2026 in Cebu.",
  openGraph: {
    title: "Carlo & Trixia — Are Getting Married",
    description:
      "Saturday, 28 November 2026 · Cebu. Find the details, dress code, and RSVP.",
    type: "website",
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
      className={`${pinyon.variable} ${ballet.variable} ${lusitana.variable} ${jost.variable} ${tangerine.variable} ${marcellus.variable} antialiased`}
    >
      <body>{children}</body>
    </html>
  );
}
