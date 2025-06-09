// import style from "./style.module.css";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

/* 
sm: 640px
md: 768px
lg: 1024px
xl: 1280px
*/

export default function ContactPage() {

  return (
    <div>
      <header className=" w-full xl:h-44 lg:h-40 md:h-36 sm:h-32 text-center xl:py-12 lg:py-10 md:py-9 sm:py-8 bg-purple-400">
        <h1 className="xl:text-4xl lg:text-3xl md:text-2xl sm:text-xl font-extrabold text-white">LIÊN HỆ CHÚNG TÔI</h1>
        <p className="xl:text-2xl lg:text-2xl md:text-xl sm:text-lg text-white font-medium mt-3">Chúng tôi luôn sẵn sàng hỗ trợ, dù bạn ở bất cứ nơi đâu!</p>
      </header>
      <Tabs defaultValue="account">
        <TabsList className="w-3xl lg:w-2xl md:w-xl sm:w-lg h-13 mt-5 mb-3 mx-auto ">
          <TabsTrigger value="account" className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-gray-400 font-extrabold focus:text-blue-500 border-s-gray-500">Hỗ trợ khách hàng</TabsTrigger>
          <TabsTrigger value="password" className="xl:text-xl lg:text-xl md:text-lg sm:text-lg text-gray-400 font-extrabold focus:text-blue-500 border-s-gray-500">Tuyển dụng và đối tác</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto mx-auto mb-7 bg-white border border-s-gray-100 rounded-xl px-14 py-7">
            <div>
              <label htmlFor="" className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold">Tên dịch vụ</label>
              <div>
                <Select>
                  <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[60px] rounded-xl border border-blue-400 cursor-pointer mt-2 px-0 py-3">
                    <SelectTrigger>
                      <div className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-medium px-0">
                        <SelectValue placeholder="Chọn dịch vụ" />
                      </div>
                    </SelectTrigger>
                  </div>
                  <SelectContent >
                    <SelectGroup className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-medium rounded-xl">
                      <SelectLabel className="text-xl font-medium">Chọn dịch vụ</SelectLabel>
                      <SelectItem className="xl:text-lg lg:text-lg md:text-sm sm:text-sm px-5 h-12" value="apple">Vé máy bay</SelectItem>
                      <SelectItem className="xl:text-lg lg:text-lg md:text-sm sm:text-sm px-5 h-12" value="banana">Du lịch</SelectItem>
                      <SelectItem className="xl:text-lg lg:text-lg md:text-sm sm:text-sm h-12" value="blueberry">Khách sạn</SelectItem>
                      <SelectItem className="xl:text-lg lg:text-lg md:text-sm sm:text-sm px-5 h-12" value="grapes">Visa</SelectItem>
                      <SelectItem className="xl:text-lg lg:text-lg md:text-sm sm:text-sm px-5 h-12" value="pineapple">Tuyển dụng</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className=" xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-auto mt-8">
              <Label className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold mb-2" htmlFor="fullname">Tên của bạn</Label>
              <div className="w-full border border-blue-400 rounded-xl">
                <Input type="text" name="fullname" placeholder="Nhập tên đầy đủ" />
              </div>
            </div>
            <div className="flex xl:flex-nowrap lg:flex-nowrap md:flex-wrap sm:flex-wrap mt-7 ">
              <div>
                <Label className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold mb-2" htmlFor="email">Email</Label>
                <div className="xl:w-[600px] lg:w-[480px] md:w-xl sm:w-lg border border-blue-400 rounded-xl">
                  <Input type="text" name="email" placeholder="Nhập email" />
                </div>
              </div>
              <div className="xl:ml-3 lg:ml-3 md:ml-0 sm:ml-0 xl:mt-0 lg:mt-0 md:mt-7 sm:mt-7">
                <Label className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold mb-2" htmlFor="phone">Số điện thoại</Label>
                <div className="xl:w-full lg:w-full md:w-xl sm:w-lg border border-blue-400 rounded-xl">
                  <Input type="text" name="phone" placeholder="Nhập số điện thoại" />
                </div>
              </div>
            </div>
            <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-auto mt-8">
              <Label className="xl:text-xl lg:text-xl md:text-lg sm:text-lg font-bold mb-2" htmlFor="">Nội dung bạn muốn gửi</Label>
              <div className="w-full min-h-56 border border-blue-400 rounded-xl mb-3" >
                <Textarea placeholder="Nhập nội dung của bạn ở đây!" />
              </div>
            </div>
            <button className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[60px] xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold text-center text-white bg-blue-400 rounded-2xl mt-4 cursor-pointer">Gửi ngay</button>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7  bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Tổng đài hỗ trợ</h1>
            <p className="text-lg font-medium text-gray-400 mb-4">Áp dụng cước phí nhà mạng thông thường</p>
            <h3 className="text-lg text-gray-600 font-normal">Hotline:
              <p className="text-lg font-bold text-blue-500 ml-1.5 inline-flex">0987 654 321</p>
            </h3>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7  bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Công ty cổ phần VTravel Discover Việt Nam</h1>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Hà Nội</h2>
              <p className="text-base text-gray-700 font-normal ml-8">123 Lê Duẩn - Văn Miếu - Đống Đa - TĐ. Hà Nội</p>
              <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[1px] bg-gray-300 mt-4"></div>
            </div>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Đà Nẵng</h2>
              <p className="text-base text-gray-700 font-normal ml-8">116 Nguyễn Huy Tưởng - Hòa Minh - TP. Đà Nẵng</p>
              <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[1px] bg-gray-300 mt-4"></div>
            </div>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Hồ Chí Minh</h2>
              <p className="text-base text-gray-700 font-normal ml-8">345 Lý Thái Tổ - Phường 1 - Quận 3 - TP. Hồ chí Minh</p>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="password">
          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7 bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Tuyển dụng</h1>
            <h3 className="xl:text-lg lg:text-lg md:text-base sm:text-base font-medium text-gray-800 mt-4 ">Để tìm hiểu thêm về cơ hội nghề nghiệp, vui lòng nhắn tin hoặc liên hệ đến chúng tôi qua <p className="font-bold text-blue-500 inline-flex">email</p> hoặc <p className="font-bold text-blue-500 inline-flex">số điện thoại</p>.</h3>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7 bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Đối tác và truyền thông</h1>
            <h3 className="xl:text-lg lg:text-lg md:text-base sm:text-base font-medium text-gray-800 mt-4">Đối với các yêu cầu hoặc đề nghị hợp tác, vui lòng gửi email về cho chúng tôi tại: <p className="font-bold text-blue-500 inline-flex">vtravel@gmail.com</p> hoặc liên hệ <p className="font-bold text-blue-500 inline-flex">0987 654 321</p>.</h3>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7 bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Đăng ký đối tác khách sạn</h1>
            <h2 className="xl:text-lg lg:text-lg md:text-base sm:text-base font-medium text-gray-800 mt-4">Đăng ký bán phòng khách sạn tại VTravel, Quý đối tác sẽ mở ra cơ hội tiếp cận vô vàn khách hàng tiềm năng không chỉ trong nước mà còn đến từ khắp nơi trên thế giới. Quý đối tác sẽ được cung cấp các công cụ, dữ liệu phân tích chuyên sâu và sự hỗ trợ tốt nhất từ đội ngũ chuyên viên nhiều kinh nghiệm.<h3 className="text-lg font-medium text-gray-800">Liên hệ chúng tôi qua email: <p className="font-bold text-blue-500 inline-flex">vtravel@gmail.com</p></h3> </h2>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7 bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Đăng ký tài khoản đại lý</h1>
            <h2 className="xl:text-lg lg:text-lg md:text-base sm:text-base font-medium text-gray-800 mt-4">Đăng ký làm Đại Lý/Cộng Tác Viên với những chính sách hỗ trợ, đảm bảo tối đa quyền lợi, Vtravel hân hạnh đồng hành cùng quý Đại Lý trên chặng đường khẳng định thương hiệu, vươn tầm quốc tế!<h3 className="text-lg font-medium text-gray-800">Vui lòng gửi để nghị với chúng tôi qua email <p className="font-bold text-blue-500 inline-flex">vtravel@gmail.com</p> hoặc liên hệ qua hotline để được hỗ trợ.</h3></h2>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7 bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Chăm sóc khách hàng</h1>
            <h2 className="xl:text-lg lg:text-lg md:text-base sm:text-base font-medium text-gray-800 mt-4">Đội ngũ Dịch vụ & Chăm sóc Khách hàng luôn sẵn sàng hỗ trợ quý khách 24/7, bất kể nơi đâu. Với tôn chỉ “khách hàng là cốt lõi của doanh nghiệp”, Vietnam Booking xin cam kết mang đến cho bạn dịch vụ chăm sóc tận tình! Vui lòng liên hệ <p className="font-bold text-blue-500 inline-flex">1900 686 686</p>, email <p className="font-bold text-blue-500 inline-flex">cskh@vtravel.com</p> để chúng tôi được hỗ trợ bạn chu đáo hơn.</h2>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7  bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Tổng đài hỗ trợ</h1>
            <p className="text-lg font-medium text-gray-400 mb-4">Áp dụng cước phí nhà mạng thông thường</p>
            <h3 className="text-lg text-gray-600 font-normal">Hotline:
              <p className="text-lg font-bold text-blue-500 ml-1.5 inline-flex">0987 654 321</p>
            </h3>
          </div>

          <div className="xl:w-5xl lg:w-3xl md:w-2xl sm:w-xl h-auto rounded-2xl mx-auto mb-7 px-14 py-7  bg-white border border-s-gray-100">
            <h1 className="xl:text-2xl lg:text-2xl md:text-xl sm:text-xl font-bold mb-1.5">Công ty cổ phần VTravel Discover Việt Nam</h1>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Hà Nội</h2>
              <p className="text-base text-gray-700 font-normal ml-8">123 Lê Duẩn - Văn Miếu - Đống Đa - TĐ. Hà Nội</p>
              <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[1px] mr-14 bg-gray-300 mt-4"></div>
            </div>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Đà Nẵng</h2>
              <p className="text-base text-gray-700 font-normal ml-8">116 Nguyễn Huy Tưởng - Hòa Minh - TP. Đà Nẵng</p>
              <div className="xl:w-4xl lg:w-2xl md:w-xl sm:w-lg h-[1px] bg-gray-300 mt-4"></div>
            </div>
            <div className="my-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6 inline-flex mr-2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
              </svg>
              <h2 className="text-lg font-bold inline-flex">Hồ Chí Minh</h2>
              <p className="text-base text-gray-700 font-normal ml-8">345 Lý Thái Tổ - Phường 1 - Quận 3 - TP. Hồ chí Minh</p>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
