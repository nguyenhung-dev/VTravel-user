import styles from "./style.module.css";
import Image from "next/image"
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import BannerPage from "@/layouts/banner";
import MotionFade from "@/components/motionFade";
import { IoMdTime } from "react-icons/io";
import { LiaEyeSolid } from "react-icons/lia";
import { VscAccount } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationEllipsis,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";

const newsData = [
  {
    id: 1,
    title: "18 mẹo tiết kiệm tiền đi du lịch dễ dàng và mang lại nhiều cảm xúc",
    tag: "Kinh nghiệm du lịch", 
    describe: "Đã bao nhiêu lần bạn ngậm ngùi ở nhà vì lỡ tay xài số tiền dành dụm cho chuyến du lịch trong mơ? Năm 2016 này, đừng lặp lại “bi kịch” cũ nữa mà hãy thử áp dụng 18 mẹo nhỏ do các phượt thủ và blogger du lịch",
    date: "01/07/2025",
    view: "999",
    author: "Phan Tuấn",
    image: "https://cdn3.ivivu.com/2023/11/du-lich-vung-tau-ivivu.jpg"
  },
  {
    id: 2,
    title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z (Update thông tin mới nhất 2025)",
    tag: "Lịch trình gợi ý", 
    describe: "Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km. Vũng Tàu là một trong những điểm đến yêu thích của du khách.",
    date: "02/07/2025",
    view: "1.299",
    author: "Nguyên Hùng",
    image: "https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
  },
  {
    id: 3,
    title: "Top 3 trải nghiệm hoàn hảo cùng siêu du thuyền Spectrum of the Seas",
    tag: "Lịch trình gợi ý", 
    describe: "Siêu du thuyền Spectrum of the Seas là biểu tượng của sự sang trọng trên biển. Du thuyền dài 347 mét, có sức chứa hơn 4.000 hành khách. Được ví như một thành phố thu nhỏ di chuyển giữa đại dương.",
    date: "03/07/2025",
    view: "4.999",
    author: "Trọng Quân",
    image: "https://cdn3.ivivu.com/2023/11/du-lich-vung-tau-ivivu1.jpg"
  },
  {
    id: 4,
    title: "Du lịch Đà Lạt – Cẩm nang từ A đến Z (update thông tin mới nhất năm 2025)",
    tag: "Du lịch văn hóa - lễ hội", 
    describe: "Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1500 mét trên mặt nước biển, Đà Lạt tiết trời mát lạnh và là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.",
    date: "03/07/2025",
    view: "6.789",
    author: "Trần Tuấn",
    image: "https://cdn3.ivivu.com/2023/10/du-lich-Da-Lat-ivivu.jpg"
  }
];

const popularData = [
   {
    id: 1,
    title: "Top combo Phú Quốc dành cho gia đình giá dưới 5 triệu",
    tag: "Lịch trình gợi ý", 
    describe: "Khám phá top combo Phú Quốc dành cho gia đình với giá dưới 5 triệu. Tận hưởng kỳ nghỉ tiện nghi và tiết kiệm cùng những trải nghiệm đáng nhớ.",
    date: "03/07/2025",
    view: "2.000",
    author: "Nguyễn Hưởng",
    image: "https://cdn3.ivivu.com/2025/07/du-lich-phu-quoc-1.png"
   },
   {
    id: 2,
    title: "Trọn vị kỳ nghỉ’ tại top 3 resort cao cấp cho người sành ăn",
    tag: "Lịch trình gợi ý", 
    describe: "Những kỳ nghỉ đáng nhớ bắt đầu từ món ăn ngon và một chỗ ở tinh tế. Gợi ý 3 resort cao cấp với ẩm thực độc đáo – từ Cần Thơ, Quy Nhơn đến Huế – dành cho người biết tận hưởng.",
    date: "10/10/2025",
    view: "5.000",
    author: "Nguyễn Hưởng",
    image: "https://cdn3.ivivu.com/2025/06/resort-cao-cap-ivivu-min-2048x1365.jpg"
   }
];

const allBlogsData = [
  {
    id: 1,
    title: "18 mẹo tiết kiệm tiền đi du lịch dễ dàng và mang lại nhiều cảm xúc",
    tag: "Kinh nghiệm du lịch", 
    describe: "Đã bao nhiêu lần bạn ngậm ngùi ở nhà vì lỡ tay xài số tiền dành dụm cho chuyến du lịch trong mơ? Năm 2016 này, đừng lặp lại “bi kịch” cũ nữa mà hãy thử áp dụng 18 mẹo nhỏ do các phượt thủ và blogger du lịch",
    date: "01/07/2025",
    view: "999",
    author: "Phan Tuấn",
    image: "https://cdn3.ivivu.com/2023/11/du-lich-vung-tau-ivivu.jpg"
  },
  {
    id: 2,
    title: "Du lịch Vũng Tàu: Cẩm nang từ A đến Z (Update thông tin mới nhất 2025)",
    tag: "Lịch trình gợi ý", 
    describe: "Cách trung tâm thành phố Hồ Chí Minh chỉ khoảng 3 tiếng lái xe, với đường bờ biển trải dài 20km. Vũng Tàu là một trong những điểm đến yêu thích của du khách.",
    date: "02/07/2025",
    view: "1.299",
    author: "Nguyên Hùng",
    image: "https://cdn3.ivivu.com/2022/09/T%E1%BB%95ng-quan-du-l%E1%BB%8Bch-V%C5%A9ng-T%C3%A0u-ivivu.jpg"
  },
  {
    id: 3,
    title: "Top 3 trải nghiệm hoàn hảo cùng siêu du thuyền Spectrum of the Seas",
    tag: "Lịch trình gợi ý", 
    describe: "Siêu du thuyền Spectrum of the Seas là biểu tượng của sự sang trọng trên biển. Du thuyền dài 347 mét, có sức chứa hơn 4.000 hành khách. Được ví như một thành phố thu nhỏ di chuyển giữa đại dương.",
    date: "03/07/2025",
    view: "4.999",
    author: "Trọng Quân",
    image: "https://cdn3.ivivu.com/2023/11/du-lich-vung-tau-ivivu1.jpg"
  },
  {
    id: 4,
    title: "Du lịch Đà Lạt – Cẩm nang từ A đến Z (update thông tin mới nhất năm 2025)",
    tag: "Du lịch văn hóa - lễ hội", 
    describe: "Đà Lạt là thủ phủ của tỉnh Lâm Đồng. Với độ cao 1500 mét trên mặt nước biển, Đà Lạt tiết trời mát lạnh và là nơi nghỉ dưỡng lý tưởng ở khu vực miền Nam.",
    date: "03/07/2025",
    view: "6.789",
    author: "Trần Tuấn",
    image: "https://cdn3.ivivu.com/2023/10/du-lich-Da-Lat-ivivu.jpg"
  },
  {
    id: 5,
    title: "Top combo Phú Quốc dành cho gia đình giá dưới 5 triệu",
    tag: "Lịch trình gợi ý", 
    describe: "Khám phá top combo Phú Quốc dành cho gia đình với giá dưới 5 triệu. Tận hưởng kỳ nghỉ tiện nghi và tiết kiệm cùng những trải nghiệm đáng nhớ.",
    date: "03/07/2025",
    view: "2.000",
    author: "Nguyễn Hưởng",
    image: "https://cdn3.ivivu.com/2025/07/du-lich-phu-quoc-1.png"
   },
   {
    id: 6,
    title: "Trọn vị kỳ nghỉ’ tại top 3 resort cao cấp cho người sành ăn",
    tag: "Lịch trình gợi ý", 
    describe: "Những kỳ nghỉ đáng nhớ bắt đầu từ món ăn ngon và một chỗ ở tinh tế. Gợi ý 3 resort cao cấp với ẩm thực độc đáo – từ Cần Thơ, Quy Nhơn đến Huế – dành cho người biết tận hưởng.",
    date: "10/10/2025",
    view: "5.000",
    author: "Nguyễn Hưởng",
    image: "https://cdn3.ivivu.com/2025/06/resort-cao-cap-ivivu-min-2048x1365.jpg"
   }

];

export default function BlogPage() {
  return (
    <>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`}>
        <div className='text-center pt-60 relative z-2'>
          <MotionFade animation="fadeInBottomToTop">
            <h3 className={`${styles.subTitle} font-[700] text-[120px] italic h-auto mx-auto`}>Blog</h3>
            <h1 className={`${styles.mainTitle} font-[900] text-[180px] leading-[1] h-auto mx-auto`}>VTRAVEL</h1>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='blog' text='Xem tất cả Blog' className='scroll-down-page' />
      </BannerPage>
      <section id="blog" className="container pb-40 pt-28">
        <div>
          <div className="w-full mx-auto">
            <div className="grid grid-flow-row-dense grid-cols-2 gap-8">
              <div className="cursor-pointer">
                <h1 className="text-3xl font-extrabold text-black mt-5 mb-3">Nổi bật</h1>
                <div className="overflow-hidden rounded-xl">
                <Image src="/images/banner2-about.jpg" width={300} height={300} quality={100} alt="Ảnh blog" className="w-full h-[400px] rounded-xl transition-all duration-300 hover:scale-110"/>
                </div>
                <p className="inline-flex mb-1 px-7 mt-4 py-1 text-[13px] font-bold bg-gray-200 rounded-[7px] text-blue-500">Kinh nghiệm du lịch</p>
                <p className="inline-flex ml-2 px-7 py-1 text-[13px] font-bold bg-gray-200 rounded-[7px] text-blue-500">Lịch trình gợi ý</p>
                <h2 className="text-2xl font-extrabold text-black my-1 hover:text-blue-500">18 mẹo tiết kiệm tiền đi du lịch dễ dàng hơn lúc nào hết</h2>
                <p className="mb-1 text-[18px] font-normal text-gray-700">Đã bao nhiêu lần bạn ngậm ngùi ở nhà vì lỡ tay xài số tiền dành dụm cho chuyến du lịch trong mơ? Năm 2016 này, đừng lặp lại “bi kịch” cũ nữa mà hãy thử áp dụng 18 mẹo nhỏ do các phượt thủ và blogger du lịch trên khắp thế giới mách nước, đảm bảo bạn sẽ luôn để dành đủ tiền để vi vu từ A đến Z!</p>
                <p className="inline-flex text-[14px] font-normal text-gray-700">
                 <IoMdTime className="m-0.5"/>23/06/2025</p>
                <p className="inline-flex text-[14px] font-normal text-gray-700 px-3">
                 <LiaEyeSolid className="m-0.5"/>2.000</p>
                <p className="inline-flex text-[14px] font-normal text-gray-700">
                 <VscAccount className="m-0.5"/>Văn Hưởng</p>
              </div>
              <div>
                <h1 className="text-3xl font-extrabold text-black mt-5 mb-3">Mới nhất</h1>
                <div className="grid grid-flow-row-dense grid-cols-2 grid-rows-2 gap-4">
                  {
                    newsData.map((item)=>(
                  <div className="mb-3 cursor-pointer" key={item.id}>
                    <div className="overflow-hidden rounded-xl">
                    <Image src={item.image} width={100} height={100} quality={100} alt={item.title} className="w-full h-[170px] rounded-xl transition-all duration-300 hover:scale-110" />
                    </div>
                    <p className="inline-flex px-5 mt-3 py-1 text-[13px] font-bold bg-gray-200 rounded-[7px] text-blue-500">{item.tag}</p>
                    <p className="text-xl font-bold text-black my-1.5 hover:text-blue-500">{item.title}</p>
                    <p className="inline-flex text-[14px] font-normal text-gray-700"><IoMdTime className="m-0.5"/>{item.date}</p>
                    <p className="inline-flex text-[14px] font-normal text-gray-700 px-3"><LiaEyeSolid className="m-0.5"/>{item.view}</p>
                    <p className="inline-flex text-[14px] font-normal text-gray-700"><VscAccount className="text-[13px] m-0.5"/>{item.author}</p>
                  </div>
                    ))
                  }
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-[1px] bg-gray-500 mx-auto my-[30px]"></div>
           <div className="flex w-full">
             <div className="flex-1">
             <h1 className="text-2xl text-black font-extrabold mb-4">Tất cả Blogs</h1>
            {
             allBlogsData.map((item)=>(
             <div key={item.id}>
             <div className="grid grid-flow-row-dense grid-cols-2 pb-8 cursor-pointer">
             <div className="overflow-hidden rounded-xl">
             <Image src={item.image} width={100} height={100} quality={100} alt={item.title} className="w-full h-[260px] rounded-xl transition-all duration-300 hover:scale-110"/></div>
             <div className="w-[420px] ml-5 py-5">
             <p className="inline-flex mb-1 py-1 px-5 text-[13px] font-bold bg-gray-200 rounded-[7px] text-blue-500">{item.tag}</p>
             <p className="text-2xl font-bold text-black my-0.5 hover:text-blue-500">{item.title}</p>
             <p className="mb-0.5 text-[16px] font-normal text-gray-700">{item.describe}</p>
             <p className="inline-flex text-[14px] font-normal text-gray-700"><IoMdTime className="m-0.5"/>{item.date}</p>
             <p className="inline-flex text-[14px] font-normal text-gray-700 px-3"><LiaEyeSolid className="m-0.5"/>{item.view}</p>
             <p className="inline-flex text-[14px] font-normal text-gray-700 "><VscAccount className="text-[13px] m-1"/>{item.author}</p>
             </div>
             </div>
             </div>
              ))
            }
            </div>

             <div className="w-[300px] ml-10">
              <div className="w-full h-[45px] border border-gray-500 rounded-[5px] py-3"><IoSearch className="inline-flex text-[24px] ml-3"/>
               <input type="text" placeholder="Tìm kiếm" className="inline-flex ml-1.5"/>
              </div>
              <div className="cursor-pointer">
                <h1 className="text-2xl text-black font-extrabold my-5">Thể loại</h1>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-purple-700 border border-purple-700 rounded-[10px] hover:bg-purple-700 hover:text-white mb-2">Hướng dẫn du lịch</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-green-500 border border-green-500 rounded-[10px] hover:bg-green-500 hover:text-white mb-2">Kinh nghiệm du lịch</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-blue-600 border border-blue-600 rounded-[10px] hover:bg-blue-600 hover:text-white mb-2">Lịch trình gợi ý</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-yellow-500 border border-yellow-500 rounded-[10px] hover:bg-yellow-500 hover:text-white mb-2">Ẩm thực du lịch</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-pink-500 border border-pink-500 rounded-[10px] hover:bg-pink-500 hover:text-white mb-2">Đánh giá dịch vụ</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-blue-400 border border-blue-400 rounded-[10px] hover:bg-blue-400 hover:text-white mb-2">Ảnh & Video du lịch</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-red-400 border border-red-400 rounded-[10px] hover:bg-red-400 hover:text-white mb-2">Du lịch văn hóa - lễ hội</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-purple-400 border border-purple-400 rounded-[10px] hover:bg-purple-400 hover:text-white mb-2">Tin tức & xu hướng du lịch</p>
                <p className="w-full h-[40px] text-[18px] font-bold pl-4 py-2 text-orange-500 border border-orange-500 rounded-[10px] hover:bg-orange-500 hover:text-white mb-2">Câu chuyện truyền cảm hứng</p>
              </div>
              <div className="w-full h-auto bg-slate-100 border border-slate-200 rounded-xl mt-6">
                <h1 className="text-2xl text-black font-extrabold py-5">Phổ biến</h1>
                  {
                    popularData.map((item)=>(
                     <div key={item.id}>
                      <div className="mx-[15px] pb-5 cursor-pointer overflow-hidden rounded-xl">
                       <div className="overflow-hidden rounded-xl">
                       <Image src={item.image} width={100} height={100} quality={100} alt={item.title} className="w-full h-[140px] rounded-xl transition-all duration-300 hover:scale-110"/>
                       </div>
                       <p className="inline-flex my-2 py-1 px-5 text-[13px] font-bold bg-gray-200 rounded-[7px] text-blue-500">{item.tag}</p>
                       <p className="text-xl font-bold text-black mb-0.5 hover:text-blue-500">{item.title}</p>
                       <p className="inline-flex text-[13px] font-normal text-gray-700"><IoMdTime className="m-0.5"/>{item.date}</p>
                       <p className="inline-flex text-[13px] font-normal text-gray-700 px-3"><LiaEyeSolid className="m-0.5"/>{item.view}</p>
                       <p className="inline-flex text-[13px] font-normal text-gray-700 "><VscAccount className="text-[13px] m-0.5"/>{item.author}</p>
                      </div>
                     </div>
                    ))
                  }
              </div>
              <div className="mt-6">
                <Image src="https://cdn3.ivivu.com/2025/06/iVIVU-x-LUG-2025.png" width={300} height={300} quality={100} alt="Ảnh blog" className="w-full h-[270px] rounded-xl mb-4 object-fill cursor-pointer " />
              </div>
             </div>
           </div>
           <div>
            <Image src="/images/slideBar-blog.jpg" width={300} height={300} quality={100} alt="Ảnh blog" className="w-full h-[500px] rounded-xl mb-4 object-cover cursor-pointer"/>
            <h1 className="text-4xl text-white font-extrabold ml-20 mt-[-250px] mb-5">Bạn cần tư vấn booking tour du lịch?</h1>
            <a href="" className="text-xl text-white font-bold ml-20 px-3 py-1 bg-blue-500 rounded-[5px]">Đặt lịch tư vấn miễn phí ngay!</a>
            </div>
  
        </div>
      </section>
    </>
  )
}
