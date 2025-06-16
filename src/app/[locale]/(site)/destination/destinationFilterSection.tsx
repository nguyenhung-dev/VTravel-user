'use client'

import { useState, useEffect } from 'react';
import TOURDATA from '@/data/tours.json';
import TourCard from '@/components/tourCard';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ButtonGlobal from '@/components/buttonGlobal';

const selectRegion = [
  { id: "mienbac", label: "Miền Bắc" },
  { id: "mientrung", label: "Miền Trung" },
  { id: "miennam", label: "Miền Nam" }
];

const selectPrice = [
  { id: "price1", label: "Dưới 1 triệu" },
  { id: "price2", label: "1 - 3 triệu" },
  { id: "price3", label: "3 - 5 triệu" },
  { id: "price4", label: "Trên 5 triệu" }
];

export default function DestinationFilterSection() {
  const [regionFilter, setRegionFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [filteredTours, setFilteredTours] = useState(TOURDATA);

  useEffect(() => {
    let filtered = [...TOURDATA];

    if (regionFilter.length > 0) {
      filtered = filtered.filter(tour => regionFilter.includes(tour.category));
    }

    if (priceFilter.length > 0) {
      filtered = filtered.filter(tour => {
        const price = tour.promotionPrice || tour.originalPrice;
        return priceFilter.some(p => (
          (p === 'price1' && price < 1000000) ||
          (p === 'price2' && price >= 1000000 && price <= 3000000) ||
          (p === 'price3' && price > 3000000 && price <= 5000000) ||
          (p === 'price4' && price > 5000000)
        ));
      });
    }

    setFilteredTours(filtered);
  }, [regionFilter, priceFilter]);

  const toggleRegion = (id: string) => {
    setRegionFilter(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const togglePrice = (id: string) => {
    setPriceFilter(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  return (
    <section id='destinationlist' className="container m-auto mb-20 pt-28">
      <h1 className='text-center mb-12 text-[35px] font-extrabold text-blue-800'>Danh sách Điểm đến - VTravel</h1>
      <div className="flex gap-8">
        <div className="w-1/4 ">
          <div className='rounded-[20px] px-6 py-8 sticky top-28 shadow-lg' style={{
            background: "linear-gradient(60deg,rgba(176, 252, 255, 1) 0%, rgba(232, 234, 255, 1) 51%, rgba(255, 255, 255, 1) 100%);"
          }}>
            <div>
              <h4 className='font-bold text-[23px] text-[#6169db]'>Theo khu vực</h4>
              <ul>
                {selectRegion.map(region => (
                  <li key={region.id} className='flex items-center gap-2 my-3'>
                    <Checkbox
                      id={region.id}
                      className='custom-checkbox size-4'
                      checked={regionFilter.includes(region.id)}
                      onCheckedChange={() => toggleRegion(region.id)}
                    />
                    <Label htmlFor={region.id} className='text-[15px]'>{region.label}</Label>
                  </li>
                ))}
              </ul>
            </div>
            <div className='mt-10'>
              <h4 className='font-bold text-[23px] text-[#6169db]'>Theo giá</h4>
              <ul>
                {selectPrice.map(price => (
                  <li key={price.id} className='flex items-center gap-2 my-3'>
                    <Checkbox
                      id={price.id}
                      className='custom-checkbox size-4'
                      checked={priceFilter.includes(price.id)}
                      onCheckedChange={() => togglePrice(price.id)}
                    />
                    <Label htmlFor={price.id} className='text-[15px]'>{price.label}</Label>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="flex-1">
          {filteredTours.length > 0 ? (
            <div className='grid grid-cols-3 gap-7'>
              {
                filteredTours.map((tour, index) => (
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
                ))
              }
            </div>
          ) : (
            <div className='flex flex-col items-center justify-center w-full gap-10 mt-10'>
              <p className="text-center text-[25px] text-fuchsia-700 col-span-3">Không tìm thấy điểm đến phù hợp</p>
              <ButtonGlobal text='Xem tất cả điểm đến' />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
