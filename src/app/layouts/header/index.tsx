import { getTranslations } from 'next-intl/server';
import HeaderClient from "./HomeHeaderClient";

export default async function Header() {
  const t = await getTranslations();

  const navigation = [
    { name: t("header.home"), href: '/', current: true },
    { name: t("header.about"), href: '/about', current: false },
    { name: t("header.tours"), href: '/tours', current: false },
    { name: t("header.service"), href: '/service', current: false },
    { name: t("header.contact"), href: '/contact', current: false },
  ];

  return <HeaderClient navigation={navigation} />;
}
