import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
});

export const metadata: Metadata = {
  title: "NextJS Blog Learning Platform",
  description: "Cơ sở học tập và thực hành Next.js từ cơ bản đến nâng cao.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${inter.variable}`}>
      <body className="font-sans min-h-screen flex flex-col bg-gray-50/50">
        <Header />
        <main className="flex-grow pt-8 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
