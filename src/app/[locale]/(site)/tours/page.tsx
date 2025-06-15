import TOURDATA from '@/data/tours.json';
import TourCard from '@/components/tourCard';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import Image from 'next/image';
import styles from "./style.module.css";
import ScrollDownIndicator from '@/components/scrollDownIndicator';

export default function ToursPage() {
  return (
    <>
      <section className={`${styles.banner} h-[700px] w-full`}>
        <div className='absolute z-1 top-0 left-0 right-0 bottom-0 flex justify-between items-center container m-auto'>
          <div>
            <h1 className={`${styles.mainTitle} font-[900] text-[180px]`}>VTRAVEL</h1>
            <h3>Our Tour</h3>
          </div>
          <div>
            <Image src="/images/vietnam-map-tour.png" alt='Vtravel tour' width={500} height={500} className='h-[500px] w-auto' />
          </div>
        </div>
        <ScrollDownIndicator idSection='tourlist' text='Xem tất cả Tour' className='absolute z-2 bottom-[0] left-[50%] transform translate-x-[-50%] translate-y-[100%]' />
      </section>
      <section id='tourlist' className="flex container m-auto gap-8 bg-[] mb-20 mt-40">
        <div className="w-1/4 bg-[#fff] rounded-[20px] px-5 py-5">
          <div>
            <h4 className='font-bold text-[22px] text-[#6169db]'>Khu vực</h4>
            <ul>
              <li className='flex items-center gap-3'>
                <Checkbox id="mienbac" />
                <Label htmlFor="mienbac">Miền Bắc</Label>
              </li>
              <li className='flex items-center gap-3'>
                <Checkbox id="mientrung" />
                <Label htmlFor="mientrung">Miền Trung</Label>
              </li>
              <li className='flex items-center gap-3'>
                <Checkbox id="miennam" />
                <Label htmlFor="miennam">Miền Nam</Label>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-1">
          <div className='grid grid-cols-3 gap-7'>
            {TOURDATA.map((tour, index) => (
              <TourCard
                key={index}
                href={`/tours/${tour.id}`}
                imgUrl={tour.imgUrl}
                nameTour={tour.nameTour}
                originalPrice={tour.originalPrice}
                promotionPrice={tour.promotionPrice}
                time={tour.time}
                startAddress={tour.startAddress}
                rating={tour.rating}
                category={tour.category}
                clasName='h-[450px]'
                bottomClassName='flex-col'
                startAddressHidden
              />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
