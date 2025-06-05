import ServiceCarousel from "@/components/serviceCarousel";
import SERVICEDATA from "@/data/service.json";
import ButtonGlobal from "@/components/buttonGlobal";

export default function Service() {
  return (
    <section className="relative z-10 py-36 bg-[#ffffff]">
      <div className="flex container m-auto" >
        <div className="flex-1">
          <ServiceCarousel data={SERVICEDATA} />
        </div>
        <div className="w-1/2">
          <p className="uppercase text-[#636363] font-bold text-[18px] mb-2 ">Dịch vụ nổi bật
          </p>
          <h3 className="uppercase text-[var(--color-primary)] text-4xl font-[900] leading-[1.3]">Khám phá dịch vụ tiện ích cùng VTravel</h3>
          <p className="text-[18px] text-[var(--color-content)] mt-7">
            VTravel mang đến cho bạn hệ sinh thái dịch vụ du lịch toàn diện, từ đặt xe, thuê phòng nghỉ, đến thuê hướng dẫn viên bản địa và tour trọn gói. Chúng tôi đồng hành cùng bạn trên mọi hành trình, giúp bạn tiết kiệm thời gian, chi phí và tận hưởng chuyến đi một cách trọn vẹn nhất. Với VTravel, mỗi chuyến đi là một trải nghiệm đáng nhớ.
          </p>
          <ButtonGlobal text="Xem thêm" className="mt-10" />
        </div>
      </div >
    </section >
  )
}
