import type { Metadata } from "next";
import { Geist, Geist_Mono, Lora, Rethink_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import BackToTop from "@/components/BacktoTopBtn";
// import Footer from "@/components/FooterV2";
import Navigation from "@/components/Navigation";
import Footer from "@/components/FooterV2";
import { Toaster } from "@/components/ui/toaster";

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
  title: {
    template: "%s | Simany Driving School Mongu",
    default: "Simany Driving School - Professional Driving Lessons in Mongu",
  },
  description:
    "Professional driving school in Mongu offering comprehensive driving lessons, road safety education, and license preparation for all types of vehicles.",
  keywords: [
    "driving school",
    "Mongu",
    "Simany",
    "driving lessons",
    "driver education",
    "Zambia",
  ],
  metadataBase: new URL("https://www.simanydrivingschool.online"),
  openGraph: {
    title: "Simany Driving School - Professional Driving Lessons in Mongu",
    description:
      "Professional driving school in Mongu offering comprehensive driving lessons, road safety education, and license preparation for all types of vehicles.",
    url: "https://www.simanydrivingschool.online",
    siteName: "Simany Driving School",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Simany Driving School - Professional Driving Lessons in Mongu",
    description:
      "Professional driving school in Mongu offering comprehensive driving lessons, road safety education, and license preparation for all types of vehicles.",
  },
  verification: {
    google: "your-google-verification-code", // You'll need to replace this with your actual verification code
  },
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
        <Navigation />
        <Header />
        {children}
        <BackToTop />
        <Toaster />
        <script
          src="https://static.elfsight.com/platform/platform.js"
          async
        ></script>
        <div
          className="elfsight-app-c9b0f805-c264-482d-81ef-1bf55f36b832"
          data-elfsight-app-lazy
        ></div>
        <Footer />
      </body>
    </html>
  );
}
