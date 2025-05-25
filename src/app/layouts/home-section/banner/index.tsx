'use client'

import styles from './style.module.css';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

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
            <motion.h1
              className="text-white font-bold text-center"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
            >
              {t('homePage.banner.titleBanner')}
            </motion.h1>
          </div>
        </div>
      </section>
      <div className={`${styles.spacing}`}></div>
    </>
  )
}
