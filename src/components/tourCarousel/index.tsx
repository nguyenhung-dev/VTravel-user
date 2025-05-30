"use client";

import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import 'keen-slider/keen-slider.min.css';
import styles from './style.module.css';
import "./btnanimation.css";
import { GiSteeringWheel } from "react-icons/gi";
import CustomButton from '@/components/customButton';

interface ITour {
  id: number;
  imgUrl: string;
  vehicle: string;
  tourName: string;
  time: string;
}

type TProps = {
  tours: ITour[];
  href?: string;
}

export default function TourCarousel({ tours, href = "/" }: TProps) {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1 },
    breakpoints: {
      "(min-width: 640px)": {
        slides: { perView: 2, spacing: 15 },
      },
      "(min-width: 1024px)": {
        slides: { perView: 4, spacing: 20 },
      },
    },
  });

  const prev = () => slider.current?.prev();
  const next = () => slider.current?.next();

  return (
    <div className="relative">
      <div ref={sliderRef} className="keen-slider">
        {tours.map((tour) => (
          <div key={tour.id} className={`${styles.keenSliderSlid} keen-slider__slide`}>
            <div className="relative rounded-[10px] h-full flex flex-col shadow-lg bg-[#ffffff80]">
              <Image src={tour.imgUrl} alt={tour.tourName} width={300} height={200} className="object-cover w-full h-[250px] rounded-[10px]" />
              <div className="p-4 flex flex-col justify-between gap-8 flex-1">
                <div className='flex-1'>
                  <div className='flex items-center text-[#01b5f3] uppercase gap-2 mb-2'>
                    <GiSteeringWheel size={18} />
                    <p className="text-[14px] font-[700]">Phương tiện: {tour.vehicle}</p>
                  </div>
                  <h3>
                    <Link href={href} className="font-bold text-[#2d2d2d] text-[22px] inline-block transition-all duration-300 hover:text-[#01b5f3] hover:underline">
                      {tour.tourName}
                    </Link>
                  </h3>
                </div>
                <div>
                  <Link href={href} className="cssbuttons-io-button"> Khám phá
                    <div className="icon">
                      <svg height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M0 0h24v24H0z" fill="none"></path><path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z" fill="currentColor"></path></svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div className='absolute top-[10px] left-[10px]'>
                <div className='bg-[#ab00f2] px-5 py-1 text-[#fff] rounded-tl-[10px]'>{tour.time}</div>
              </div>
            </div>
          </div >
        ))
        }
      </div >
      <div className='absolute left-0 right-0 top-[50%] transform -translate-y-1/2 w-full flex justify-between z-10'>
        <CustomButton onClick={prev} className={`${styles.btn} ${styles.prev}`}><IoIosArrowBack size={23} color='#fff' /></CustomButton>
        <CustomButton onClick={next} className={`${styles.btn} ${styles.next}`}><IoIosArrowForward size={23} color='#fff' /></CustomButton>
      </div>
    </div >
  );
}
