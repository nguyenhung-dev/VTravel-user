'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa6';

interface IServiceItem {
  id: number;
  title?: string;
  description?: string;
  ImgUrl?: string;
  price?: string;
  buttonText: string;
  rating?: number;
}

type TProps = {
  data: IServiceItem[];
}

export default function ServiceCarousel({ data }: TProps) {
  return (
    <div>
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
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <div>
              <div className='relative'>
                <Image src={item.ImgUrl ?? ""} alt={item.title ?? ""} width={300} height={300} />
                <div className='absolute top-[10px] left-[10px] flex items-center'>
                  <span>{item.rating}</span>
                  <FaStar className="text-yellow-400 text-[1rem]" />
                </div>
              </div>
              <div>
                <h4>{item.title}</h4>
                <p>{item.price}</p>
                <p>{item.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
