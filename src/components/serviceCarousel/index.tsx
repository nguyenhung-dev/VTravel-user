'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';


export default function ServiceCarousel() {
  return (
    <Swiper
      effect={'coverflow'}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={'auto'}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
      }}
      pagination={{ clickable: true }}
      modules={[EffectCoverflow, Pagination]}
      className="mySwiper"
    >
      <SwiperSlide><img src="/images/1.jpg" /></SwiperSlide>
      <SwiperSlide><img src="/images/2.jpg" /></SwiperSlide>
      <SwiperSlide><img src="/images/3.jpg" /></SwiperSlide>
      <SwiperSlide><img src="/images/4.jpg" /></SwiperSlide>
    </Swiper>
  );
}
