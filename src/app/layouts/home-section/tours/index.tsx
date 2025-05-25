import styles from "./style.module.css";
import ButtonGlobal from "@/components/buttonGlobal";
import FeaturedTourCard from "@/components/featuredTourCard";
import TOURDATA from "@/data/tours.json";

export default function Tours() {
  const firstList = TOURDATA.slice(0, 8);
  const secondList = TOURDATA.slice(8);

  return (
    <section className={`${styles.tours}`}>
      <div className="container m-auto relative h-full">
        <div className={`${styles.stickyBox} uppercase max-w-[480px]`}>
          <h4 className="font-extrabold text-[#c5c5c5]">Danh sách Tours</h4>
          <h2 className="font-extrabold text-[#fff1ba]">Khám phá Việt Nam cùng VTravel</h2>
          <ButtonGlobal text="Khams phá ngay" className="mt-8" />
        </div>
        <div className="w-[calc(100%-500px)] ml-[500px]">
          <div className="flex gap-10">
            <div className="list-tour w-1/2 flex flex-col gap-10">
              {firstList.map((tour, index) => <FeaturedTourCard key={index} imgUrl={tour.imgUrl} nameTour={tour.nameTour} />)}
            </div>
            <div className="list-tour w-1/2 pt-[10.69rem] flex flex-col gap-10">
              {secondList.map((tour, index) => <FeaturedTourCard key={index} imgUrl={tour.imgUrl} nameTour={tour.nameTour} />)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
