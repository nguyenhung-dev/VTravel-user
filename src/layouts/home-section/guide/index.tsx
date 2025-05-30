import TourGuideCarousel from "@/components/tourGuideCarousel"
import TOURGUIDEDATA from "@/data/tour_guide.json";

export default function Guide() {
  return (
    <section className="relative pt-32 pb-60 bg-[#f7f3ee]">
      <div className="container m-auto flex">
        <div className="text-center mb-15">
          <p className="uppercase text-[#636363] font-bold text-[18px] mb-2 ">Hành trình an tâm, trải nghiệm tuyệt vời</p>
          <h3 className="text-[var(--color-primary)] text-4xl font-[900] leading-[1.3]">Đồng hành cùng đội ngũ hướng dẫn viên chuyên nghiệp</h3>
        </div>
        <TourGuideCarousel guides={TOURGUIDEDATA} />
      </div>
    </section>
  )
}
