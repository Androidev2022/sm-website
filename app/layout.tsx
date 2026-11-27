import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "SM Solutions | Digital Strategy, Design & Technology",
    template: "%s | SM Solutions",
  },
  description:
    "SM Solutions helps ambitious businesses grow with digital strategy, user experience, web and app development, and performance marketing.",
  keywords: [
    "SM Solutions",
    "digital strategy",
    "web development",
    "mobile app development",
    "UI/UX design",
    "digital marketing",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    type: "website",
    siteName: "SM Solutions",
    locale: "en_IN",
    title: "SM Solutions | Digital Strategy, Design & Technology",
    description:
      "Digital strategy, user experience, engineering and growth solutions for ambitious businesses.",
  },
  twitter: {
    card: "summary",
    title: "SM Solutions | Digital Strategy, Design & Technology",
    description:
      "Digital strategy, user experience, engineering and growth solutions for ambitious businesses.",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="font-sans text-[#16151A] antialiased min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}