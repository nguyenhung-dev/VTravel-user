import styles from './style.module.css';
import { useTranslations } from 'next-intl';

export default function Banner() {
  const t = useTranslations();

  return (
    <>
      <section className={styles.banner}>
        <div className={styles.wrapper}>
          <iframe
            src="https://intro-vtravel.pages.dev/"
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay"
          ></iframe>
          <div className={`${styles.overlay}`}></div>
          <div className={`${styles.title}`}>
            <h1 className="text-white font-bold text-center">
              {t('homePage.banner.titleBanner')}
            </h1>
          </div>
        </div>
      </section>
      <div className={`${styles.spacing}`}></div>
    </>
  )
}
