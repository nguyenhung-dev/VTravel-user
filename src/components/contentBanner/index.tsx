"use client";

import { CiSearch } from "react-icons/ci";
import { SlArrowDown } from "react-icons/sl";
import CustomInput from "../customInput";
import CustomButton from "../customButton";

export default function ContentBanner() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 z-3 flex flex-col justify-center items-center">
      <div className="relative">
        <div className="text-center">
          <h1 className="font-extrabold text-[130px] uppercase text-[#ffffffd0] leading-[1]">VTRAVEL</h1>
          <h3 className="text-[50px] font-extrabold text-[#ffeb3b]">Hành trình đáng nhớ bắt đầu</h3>
        </div>
        <div className="bg-[#ffffff] rounded-[30px] py-2 px-2 flex items-center gap-2 w-[800px] mt-10">
          <CiSearch size={25} className="ml-4" />
          <CustomInput placeholder="Tour Vịnh Hạ Long được yêu thích" className="flex-1 mb-0" disableFocusRing />
          <CustomButton className="bg-[#7775de] py-3 px-5 rounded-[30px] text-[#fff]">Tìm kiếm</CustomButton>
        </div>
        <div className="absolute cursor-pointer bottom-[-100px] left-[50%] transform translate-x-[-50%] translate-y-[100%] flex flex-col items-center" onClick={() => {
          const section = document.getElementById("intro");
          section?.scrollIntoView({ behavior: "smooth" });
        }}>
          <div className="relative h-[40px]">
            <SlArrowDown
              size={23}
              color="#818181"
              className="absolute top-0 left-[50%] transform translate-x-[-50%] animate-bounce"
            />
            <SlArrowDown
              size={23}
              color="#fff"
              className="absolute top-[12px] left-[50%] transform translate-x-[-50%] animate-bounce"
            />
          </div>
          <span className="text-[#fff] uppercase font-bold">Khám phá</span>
        </div>

      </div>
    </div>
  )
}
