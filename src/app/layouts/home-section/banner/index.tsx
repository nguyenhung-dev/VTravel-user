import styles from './styles.module.css'
import { useTranslations } from 'next-intl';

export default function Banner() {

  const t = useTranslations();

  return (
    <section>
      {t("header.about")}
    </section>
  )
}
