'use client'

import styles from './style.module.css'
import { useTranslations } from 'next-intl'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image';

export default function Banner() {
  const t = useTranslations()
  const bannerRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const [bannerHeight, setBannerHeight] = useState(0)

  useEffect(() => {
    if (bannerRef.current) {
      setBannerHeight(bannerRef.current.offsetHeight)
    }

    const handleScroll = () => {
      const scrollY = window.scrollY

      const limitedScrollY = scrollY > bannerHeight ? bannerHeight : scrollY

      const scale = 1 + limitedScrollY / 2000
      const translateY = limitedScrollY / 1.5

      const backgroundSize = 100 + limitedScrollY / 10

      if (bannerRef.current) {
        bannerRef.current.style.backgroundSize = `${backgroundSize}% auto`
      }

      if (titleRef.current) {
        titleRef.current.style.transform = `scale(${scale}) translateY(${translateY}px)`
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [bannerHeight])

  return (
    <>
      <section ref={bannerRef} className={styles.banner}>
        <div className="w-full h-full flex justify-center items-center relative">
          <h1 ref={titleRef} className={`text-8xl font-[900] uppercase ${styles.title}`}>
            {t("homePage.banner.titleBanner")}
          </h1>
          <Image src="/images/maybay.png" alt="plane" width={400} height={400} className='absolute right-0 top-100px transform scale-x-[-1] w-[300px] object-cover' />
        </div>
      </section>
      <section className='w-full h-screen'>
      </section>
    </>
  )
}
