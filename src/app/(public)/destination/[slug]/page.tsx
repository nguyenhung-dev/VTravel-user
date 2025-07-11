import DESTINATIONDATA from '@/data/destinations.json';
import { notFound } from 'next/navigation';
import { createSlug } from '@/utils/slug';
import styles from "./style.module.css";
import BannerPage from '@/layouts/banner';
import MotionFade from '@/components/motionFade';
import Image from 'next/image';
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import ContentSection from '@/layouts/content-section';

import IntroSection from '@/layouts/destination-section/IntroSection';
import ExperienceSection from '@/layouts/destination-section/ExperienceSection';
import GallerySection from '@/layouts/destination-section/GallerySection';
// import HighlightSection from '@/layouts/destination-section/HighlightSection';
// import DelicaciesSection from '@/layouts/destination-section/DelicaciesSection';
// import EndingImage from '@/layouts/destination-section/EndingImage';

type Section =
  | { type: "intro"; title: string; imgIntro: string; description: string }
  | { type: "experience"; description: string }
  | { type: "highlight"; items: { title: string; description: string }[] }
  | { type: "gallery"; images: string[] }
  | { type: "regionalDelicacies"; intro: string; dishes: { name: string; image: string }[] }
  | { type: "lastImage"; image: string };


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

  const sections = destination.sections as Section[];

  return (
    <>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`} style={{
        backgroundImage: `url(${destination.imgBanner})`
      }}>
        <div className='flex items-center container m-auto justify-center absolute top-0 left-0 right-0 bottom-0 z-2 text-center'>
          <MotionFade animation="fadeInBottomToTop" className='w-full'>
            <h1 className={`${styles.mainTitle} font-[900] text-[160px]`}>{destination.nameDestination}</h1>
            <h3 className={`${styles.subTitle} font-[700] text-[100px]`}>Việt Nam</h3>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='intro' text='Xem chi tiết' className='scroll-down-page' />
      </BannerPage>
      <ContentSection id="intro" >
        {sections.map((section, index) => {
          switch (section.type) {
            case "intro":
              return <IntroSection key={index} data={section} nameDestination={destination.nameDestination} />;
            case "experience":
              return <ExperienceSection key={index} data={section} />;
            case "gallery":
              return <GallerySection key={index} images={section.images || []} />;
            // case "highlight":
            //   return <HighlightSection key={index} data={section.items || []} />;
            // case "regionalDelicacies":
            //   return <DelicaciesSection key={index} data={section} />;
            // case "lastImage":
            //   return <EndingImage key={index} image={section.image} />;
            default:
              return null;
          }
        })}
      </ContentSection >
    </>
  );
}
