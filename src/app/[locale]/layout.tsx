import type { Metadata } from "next";
import { Nunito } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import Header from "@/layouts/header";
import Footer from "@/layouts/footer";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'
import { Toaster } from "sonner";
import BackToTop from "@/components/backToTop";
import BtnBookNow from "@/components/bookNow";
import BookChat from "@/components/boxchat";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["vietnamese"],
});
export const metadata: Metadata = {
  title: "VTravel - Trang chủ",
  description: "Du lịch Việt Nam",
  icons: {
    icon: "/images/logo-title.png"
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
  return (
    <html lang={locale}>
      <body className={`${nunito.variable} relative`}>
        <NextIntlClientProvider>
          <Toaster richColors position="top-center" />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <BtnBookNow />
        <BookChat />
        <BackToTop />
      </body>
    </html>
  );
}