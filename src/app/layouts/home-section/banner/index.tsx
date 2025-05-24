'use client'

import styles from './style.module.css'
import { useTranslations } from 'next-intl'

export default function Banner() {
  const t = useTranslations()

  return (
    <div className={styles.banner}>
      <iframe
        src="https://intro-vtravel.pages.dev/"
        width="100%"
        height="100%"
        frameBorder="0"
        allow="autoplay"
      ></iframe>
      <div className={`${styles.overlay}`}></div>
      <div className={`${styles.title}`}>
        <h1>Khám phá Việt Nam</h1>
      </div>
    </div>
  )
}
