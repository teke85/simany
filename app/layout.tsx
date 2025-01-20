import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackToTop from "@/components/BacktoTopBtn";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const lora = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // Regular, Medium, and Bold for body text
  variable: "--font-lora",
  display: "swap", // Improves loading experience
});

const rethink = Rethink_Sans({
  subsets: ["latin"],
  weight: ["400", "700"], // Regular and Bold for headings
  variable: "--font-rethink",
  display: "swap", // Improves loading experience
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Simany Driving School",
  description: "Simany Driving School | Your First Choice Driving School",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${rethink.variable} ${lora.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <BackToTop />
      </body>
    </html>
  );
}
