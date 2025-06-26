import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { hasLocale } from 'next-intl';
import { getMessages } from "next-intl/server";
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'
import BackToTop from "@/components/backToTop";
import BtnBookNow from "@/components/bookNow";
import BookChat from "@/components/boxchat";
import { Providers } from "../providers";
import { Toaster } from 'sonner'

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
  children, params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${nunito.variable} relative`}>
        <Toaster richColors position="top-center" />
        <Providers locale={locale} messages={messages}>
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