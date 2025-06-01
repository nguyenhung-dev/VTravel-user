import styles from './style.module.css';
import OverlayBanner from '@/components/overlayBanner';
import TitleBanner from '@/components/titleBanner';
import ContentBanner from '@/components/contentBanner';
import ScrollBlocker from '@/components/scrollBlocker';
import ScrollBannerEffect from '@/components/scrollBannerEffect';

export default function Banner() {

  return (
    <>
      <ScrollBlocker />
      <ScrollBannerEffect >
        <section className={styles.banner}>
          <div className={styles.wrapper}>
            <iframe
              src="https://intro-vtravel.pages.dev/"
              width="100%"
              height="100%"
              frameBorder="0"
              allow="autoplay"
              loading="eager"
              className={styles.iframe}
            ></iframe>
          </div>
          <TitleBanner title='DISCOVER VIETNAM' />
          <ContentBanner />
          <OverlayBanner />
        </section>
      </ScrollBannerEffect>
      <div className={`${styles.spacing}`}></div>
    </>
  );
}
