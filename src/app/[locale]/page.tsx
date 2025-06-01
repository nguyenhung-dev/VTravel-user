import { Banner, TravelStory, Intro, Tours, RegionTour, FeedBack, Guide } from "@/layouts/home-section";
import AutoScrollToTop from "@/components/autoScrollToTop";

export default function Home() {
  return (
    <>
      <AutoScrollToTop />
      <Banner />
      <Intro />
      <Tours />
      <RegionTour />
      <Guide />
      <FeedBack />
      <TravelStory />
    </>
  );
}
