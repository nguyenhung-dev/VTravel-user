// app/(public)/destination/[slug]/page.tsx
import { notFound } from 'next/navigation';
import { createSlug } from '@/utils/slug';
import styles from "./style.module.css";
import BannerPage from '@/layouts/banner';
import MotionFade from '@/components/motionFade';
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import ContentSection from '@/layouts/content-section';
import IntroSection from '@/layouts/destination-section/IntroSection';
import ExperienceSection from '@/layouts/destination-section/ExperienceSection';
import GallerySection from '@/layouts/destination-section/GallerySection';
import HighlightSection from '@/layouts/destination-section/HighlightSection';
import DelicaciesSection from '@/layouts/destination-section/DelicaciesSection';
import EndingImage from '@/layouts/destination-section/EndingImage';
import RelatedSection from '@/layouts/destination-section/RelatedSection';
import TourCarousel from '@/components/tourCarousel';
import { PUBLIC_API } from '@/lib/api';

// Nếu bạn muốn lấy dữ liệu tour thực, gọi API tour ở đây thay vì json
import TUORDATA from '@/data/tours_miennam.json';

type Section =
  | { type: "intro"; title: string; content: string }
  | { type: "experience"; description: string } // giả sử chưa có từ API
  | { type: "highlight"; content: { title: string; description: string }[] }
  | { type: "gallery"; content: string[] }
  | { type: "regionalDelicacies"; intro: string; dishes: { name: string; image: string }[] }
  | { type: "lastImage"; image: string };

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const res = await PUBLIC_API.get("/destinations");
  const allDestinations = res.data;

  const destination = allDestinations.find(
    (item: any) => createSlug(item.name) === params.slug
  );

  if (!destination) return {};

  return {
    title: `${destination.name} - VTravel`,
    description: destination.description,
  };
}

export default async function DestinationDetailPage({ params }: { params: { slug: string } }) {
  // Gọi API
  const res = await PUBLIC_API.get("/destinations");
  const allDestinations = res.data;

  const destination = allDestinations.find(
    (item: any) => createSlug(item.name) === params.slug
  );

  if (!destination) return notFound();

  const sections = destination.sections as Section[];

  return (
    <>
      <BannerPage
        classNameSection={`${styles.banner} h-screen w-full`}
        style={{
          backgroundImage: `url(${destination.img_banner_url})`,
        }}
      >
        <div className='flex items-center container m-auto justify-center absolute top-0 left-0 right-0 bottom-0 z-2 text-center'>
          <MotionFade animation="fadeInBottomToTop" className='w-full'>
            <h1 className={`${styles.mainTitle} font-[900] text-[160px]`}>{destination.name}</h1>
            <h3 className={`${styles.subTitle} font-[700] text-[100px]`}>Việt Nam</h3>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='intro' text='Xem chi tiết' className='scroll-down-page' />
      </BannerPage>

      <ContentSection id="intro">
        {sections.map((section, index) => {
          switch (section.type) {
            case "intro":
              return (
                <IntroSection
                  key={index}
                  data={{
                    title: section.title,
                    imgIntro: destination.img_banner_url,
                    description: section.content,
                  }}
                  nameDestination={destination.name}
                />
              );
            case "highlight":
              return (
                <HighlightSection
                  key={index}
                  data={section.content || []}
                />
              );
            case "gallery":
              return (
                <GallerySection
                  key={index}
                  images={section.content || []}
                />
              );
            case "experience":
              return <ExperienceSection key={index} data={section} />;
            case "regionalDelicacies":
              return <DelicaciesSection key={index} data={section} />;
            case "lastImage":
              return <EndingImage key={index} image={section.image} />;
            default:
              return null;
          }
        })}

        <RelatedSection />

        <div className='container m-auto mt-20'>
          <h2 className="text-4xl font-bold text-[#005089] text-center mb-14">
            Khám phá thêm nhiều điểm đến thú vị
          </h2>
          <TourCarousel tours={TUORDATA} />
        </div>
      </ContentSection>
    </>
  );
}
