import type { Metadata } from "next";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";
import "./globals.css";
import { Inter, Noto_Sans } from 'next/font/google'
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';

export const textFont = Noto_Sans({
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Krishnaveni Vriddhashrama",
  description: "Krishnaveni Vriddhashrama",
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider messages={messages}>
          <div className={`${inter.className} bg-primary-100 w-full h-full`}>
            <Header />
            {children}
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}