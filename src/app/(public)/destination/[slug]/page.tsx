import DESTINATIONDATA from '@/data/destinations.json';
import { notFound } from 'next/navigation';
import { createSlug } from '@/utils/slug';
import styles from "./style.module.css";
import BannerPage from '@/layouts/banner';
import MotionFade from '@/components/motionFade';
import Image from 'next/image';
import ScrollDownIndicator from '@/components/scrollDownIndicator';

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const destination = DESTINATIONDATA.find(
    item => createSlug(item.nameDestination) === params.slug
  );

  if (!destination) return {};

  return {
    title: `${destination.nameDestination} - VTravel`,
    description: destination.desDestination,
  };
}

export default function DestinationDetailPage({ params }: { params: { slug: string } }) {
  const destination = DESTINATIONDATA.find(
    item => createSlug(item.nameDestination) === params.slug
  );

  if (!destination) return notFound();

  return (
    <>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`} style={{
        backgroundImage: `url(${destination.imgUrl})`
      }}>
        <div className='flex items-center container m-auto justify-center absolute top-0 left-0 right-0 bottom-0 z-2 text-center'>
          <MotionFade animation="fadeInBottomToTop" className='w-full'>
            <h1 className={`${styles.mainTitle} font-[900] text-[160px]`}>{destination.nameDestination}</h1>
            <h3 className={`${styles.subTitle} font-[700] text-[100px]`}>Việt Nam</h3>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='destination-detail' text='Xem chi tiết' className='scroll-down-page' />
      </BannerPage>
      <section id='destination-detail' className="container pb-40 pt-28">
        <p className='text-[18px] leading-relaxed'>{destination.desDestination}</p>
      </section>
    </>
  );
}
