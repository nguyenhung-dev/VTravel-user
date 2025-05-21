import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/app/layouts/header";
import Footer from "@/app/layouts/footer";
import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing'

const robotoFont = Roboto({
  variable: "--font-roboto",
  subsets: ["vietnamese"],
});

export const metadata: Metadata = {
  title: "VTravel - Trang chủ",
  description: "Du lịch Việt Nam",
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
      <body
        suppressHydrationWarning
        className={`${robotoFont.variable}`}
      >
        <NextIntlClientProvider>
          <Header />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
s