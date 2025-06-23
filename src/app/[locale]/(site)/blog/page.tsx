import styles from "./style.module.css";
import Image from "next/image"
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import BannerPage from "@/layouts/banner";
import MotionFade from "@/components/motionFade";
export default function BlogPage() {
  return (
    <div>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`}>
        <div className='text-center pt-60 relative z-2'>
          <MotionFade animation="fadeInBottomToTop">
            <h3 className={`${styles.subTitle} font-[700] text-[120px] italic w-[1800px] h-auto`}>Blog</h3>
            <h1 className={`${styles.mainTitle} font-[900] text-[180px] leading-[1] w-[1800px] h-auto`}>VTRAVEL</h1>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='destinationlist' text='Xem tất cả Blog' className='scroll-down-page' />
      </BannerPage>
      <div className="w-[1530px] px-32">
        <div className="grid grid-flow-row-dense grid-cols-2 gap-10">
          <div>
            <h1>Điểm nổi bật</h1>
            <Image src="/images/banner2-about.jpg" width={300} height={300} quality={100} alt="Ảnh blog" className="w-full h-[350px] rounded-xl" />
            <p className="inline-flex">Mẹo</p>
            <p className="inline-flex">Đặt Tour</p>
            <h2>18 mẹo tiết kiệm tiền đi du lịch dễ dàng hơn lúc nào hết</h2>
            <p>Đã bao nhiêu lần bạn ngậm ngùi ở nhà vì lỡ tay xài số tiền dành dụm cho chuyến du lịch trong mơ? Năm 2016 này, đừng lặp lại “bi kịch” cũ nữa mà hãy thử áp dụng 18 mẹo nhỏ do các phượt thủ và blogger du lịch trên khắp thế giới mách nước, đảm bảo bạn sẽ luôn để dành đủ tiền để vi vu từ A đến Z!</p>
          </div>
          <div>
            <h1></h1>
            <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-7">
              <div>2</div>
              <div>3</div>
              <div>4</div>
              <div>5</div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
