import styles from "./style.module.css";
import Image from "next/image";
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import TourFilterSection from "./destinationFilterSection";
import BannerPage from "@/layouts/banner";
import MotionFade from "@/components/motionFade";
import type { Metadata } from "next";
import SeoHead from "@/components/SEOHead";

export const metadata: Metadata = {
  title: "VTravel - Điểm đến",
};

export default function DestinationPage() {
  return (
    <>
      <SeoHead
        key={`Vtravel, destination`}
        url="https://vtravel.vn/destination"
      />
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`}>
        <div className='absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-between items-center container m-auto'>
          <MotionFade animation="fadeInBottomToTop">
            <h1 className={`${styles.mainTitle} font-[900] text-[180px] leading-[1]`}>VTRAVEL</h1>
            <h3 className={`${styles.subTitle} font-[700] text-[120px]`}>Destinations</h3>
          </MotionFade>
          <MotionFade animation="fadeInRightToLeft">
            <Image src="/images/vietnam-map-tour.png" alt='Vtravel tour' width={500} height={500} className='h-[500px] w-auto' />
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='destinationlist' text='Xem tất cả Điểm đến' className='scroll-down-page' />
      </BannerPage>
      <TourFilterSection />
    </>
  );
}
