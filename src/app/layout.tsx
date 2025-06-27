import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import BackToTop from "@/components/backToTop";
import BtnBookNow from "@/components/bookNow";
import BookChat from "@/components/boxchat";
import { Providers } from "./providers";
import { Toaster } from 'sonner'
import "./globals.css";
import "./utilities.css";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["vietnamese"],
});
export const metadata: Metadata = {
  title: "VTravel",
  description: "Khám phá các địa điểm du lịch hấp dẫn trên khắp Việt Nam cùng VTravel. Tìm hiểu về các tour, điểm đến và trải nghiệm độc đáo.",
  icons: {
    shortcut: "/images/logo-title.png",
    icon: "/images/logo-title.png",
  },
};
export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className={`${nunito.variable} relative`}>
        <Toaster richColors position="top-center" />
        <Providers>
          <Header />
          {children}
          <Footer />
          <BtnBookNow />
          <BookChat />
          <BackToTop />
        </Providers>
      </body>
    </html>
  );
}