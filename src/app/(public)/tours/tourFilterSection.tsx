'use client'

import { useState, useEffect } from 'react';
import TOURDATA from '@/data/tours.json';
import TourCard from '@/components/tourCard';
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import ButtonGlobal from '@/components/buttonGlobal';
import CustomButton from '@/components/customButton';
import { TbRefresh } from "react-icons/tb";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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

const selectRating = [
  { id: "rating1", label: "1 sao" },
  { id: "rating2", label: "2 sao" },
  { id: "rating3", label: "3 sao" },
  { id: "rating4", label: "4 sao" },
  { id: "rating5", label: "5 sao" }
]

export default function TourFilterSection() {
  const [regionFilter, setRegionFilter] = useState<string[]>([]);
  const [priceFilter, setPriceFilter] = useState<string[]>([]);
  const [ratingFilter, setRatingFilter] = useState<string[]>([]);
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

    if (ratingFilter.length > 0) {
      filtered = filtered.filter(tour => {
        const tourRating = Math.ceil(tour.rating);
        return ratingFilter.some(r => {
          const ratingNumber = parseInt(r.replace('rating', ''));
          return tourRating === ratingNumber;
        });
      });
    }

    setFilteredTours(filtered);
  }, [regionFilter, priceFilter, ratingFilter]);

  const resetFilter = () => {
    setRegionFilter([]);
    setPriceFilter([]);
    setRatingFilter([]);
    setFilteredTours(TOURDATA);
  }

  const toggleRegion = (id: string) => {
    setRegionFilter(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const togglePrice = (id: string) => {
    setPriceFilter(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  const togglerating = (id: string) => {
    setRatingFilter(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  }

  return (
    <section id='tourlist' className="container m-auto mb-20 pt-28">
      <h1 className='text-center mb-10 text-[45px] font-extrabold text-blue-800'>Khám phá tour du lịch tốt nhất</h1>
      <div className='mb-5 flex gap-4'>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomButton
              className='bg-[#2a0094] text-[#fff] cursor-pointer'>
              <span className=''>Theo miền</span>
            </CustomButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomButton
              className='bg-[#2a0094] text-[#fff] cursor-pointer'>
              <span className=''>Theo giá</span>
            </CustomButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
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
          </DropdownMenuContent>
        </DropdownMenu>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <CustomButton
              className='bg-[#2a0094] text-[#fff] cursor-pointer'>
              <span className=''>Theo đánh giá</span>
            </CustomButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <ul>
              {selectRating.map(rating => (
                <li key={rating.id} className='flex items-center gap-2 my-3'>
                  <Checkbox
                    id={rating.id}
                    className='custom-checkbox size-4'
                    checked={ratingFilter.includes(rating.id)}
                    onCheckedChange={() => togglerating(rating.id)}
                  />
                  <Label htmlFor={rating.id} className='text-[15px]'>{rating.label}</Label>
                </li>
              ))}
            </ul>
          </DropdownMenuContent>
        </DropdownMenu>
        <CustomButton
          className='bg-[#2a0094] text-[#fff] cursor-pointer'
          onClick={resetFilter}>
          <TbRefresh />
        </CustomButton>
      </div>
      <div className='flex gap-8'>
        <div className="flex-1">

          {filteredTours.length > 0 ? (
            <div className='grid grid-cols-3 gap-6'>
              {filteredTours.map((tour, index) => (
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
          ) : (
            <div className='flex flex-col items-center justify-center w-full gap-10 mt-10'>
              <p className="text-center text-[25px] text-fuchsia-700 col-span-3">Không tìm thấy tour phù hợp</p>
              <ButtonGlobal text='Xem tất cả tour' onClick={resetFilter} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
