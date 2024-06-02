import "../globals.css";

import Header from "~/components/Header/Header";
import Footer from "~/components/Footer/Footer";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={` bg-primary-50 w-full h-full`}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
