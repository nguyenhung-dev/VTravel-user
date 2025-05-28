import type { Metadata } from "next";
import { Dancing_Script, Nunito } from "next/font/google";
import "./globals.css";
import "./utilities.css";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'
import { Toaster } from "sonner";
import BackToTop from "@/components/backToTop";
import BoxChat from "@/components/boxchat";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["vietnamese"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing",
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
      <body className="relative">
        <NextIntlClientProvider>
          <Toaster richColors position="top-center" />
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
        <BoxChat />
        <BackToTop />
      </body>
    </html>
  );
}