import type { Metadata } from "next";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import "./globals.css";
import { Inter, Noto_Sans } from 'next/font/google'

export const textFont = Noto_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krishnaveni Vriddhashrama",
  description: "Krishnaveni Vriddhashrama",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={`${inter.className} bg-primary-50 w-full h-full`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
