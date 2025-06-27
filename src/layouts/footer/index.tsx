import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { FiChevronsRight } from "react-icons/fi";
import { FaLocationDot } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Footer() {

  const listLink = [
    {
      title: "Trang chủ",
      link: "/"
    },
    {
      title: "Về chúng tôi",
      link: "/about"
    },
    {
      title: "Tours",
      link: "/tours"
    },
    {
      title: "Điểm đến",
      link: "/destination"
    },
    {
      title: "Dịch vụ",
      link: "/service"
    },
    {
      title: "Liên hệ",
      link: "/contact"
    }
  ]

  return (
    <footer className={`${styles.footer} pt-20 relative z-10 bg-[#fcf6eb]`}>
      <div className="container m-auto flex gap-10 relative z-1">
        <div className="flex-1">
          <Image src="/images/logo.png" alt="VTravel" width={500} height={500} quality={100} className="w-[150px] h-auto mb-3" />
          <p className="text-[15px] text-[var(--color-content)] font-bold">
            Hãy cùng chúng tôi đồng hành trên hành trình khám phá những danh lam thắng cảnh tuyệt đẹp, thưởng thức những món ăn đặc sản hấp dẫn và tìm hiểu về lịch sử, văn hóa đa dạng của từng vùng miền.
          </p>
          <div>
            <p className="text-2xl font-bold text-[#250052] mb-2 mt-7">Theo dõi chúng tôi</p>
            <div className={`${styles.parent}`}>
              <div className={`${styles.child}`}>
                <button className={`${styles.button}`}>
                  <Image src="/svg/social/facebook.svg" alt="facebook" width={30} height={30} />
                </button>
              </div>
              <div className={`${styles.child}`}>
                <button className={`${styles.button}`}>
                  <Image src="/svg/social/instagram.svg" alt="instagram" width={30} height={30} />
                </button>
              </div>
              <div className={`${styles.child}`}>
                <button className={`${styles.button}`}>
                  <Image src="/svg/social/linkedln.svg" alt="linkedln" width={30} height={30} />
                </button>
              </div>
              <div className={`${styles.child}`}>
                <button className={`${styles.button}`}>
                  <Image src="/svg/social/youtube.svg" alt="youtube" width={30} height={30} />
                </button>
              </div>
            </div>
          </div >
        </div >
        <div className="w-1/5">
          <h5 className={`${styles.headingFooter}`}>Liên kết</h5>
          <ul className="flex flex-col gap-3">
            {listLink.map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <FiChevronsRight color="#01b9f0" />
                <Link href={item.link} className="text-[17px] text-[#505050] font-bold inline-block hover:text-[#01b9f0]">
                  {item.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="w-1/4">
          <h5 className={`${styles.headingFooter}`}>Liên hệ với chúng tôi</h5>
          <ul className="flex flex-col gap-4">
            <li className="flex items-center gap-1.5">
              <FaLocationDot color="#01b9f0" size={20} />
              <div>
                <span className="font-bold mr-1 inline-block text-[black]">Địa chỉ:</span>
                <span>Tòa nhà VTravel số 1 đường Không tên, Hải Châu, Đà Nẵng</span>
              </div>
            </li>
            <li className="flex items-center gap-1.5">
              <FaHeadphones color="#01b9f0" size={20} />
              <div>
                <span className="font-bold mr-1 inline-block text-[black]">Hotline:</span>
                <span>0987654321</span>
              </div>
            </li>
            <li className="flex items-center gap-1.5">
              <MdEmail color="#01b9f0" size={20} />
              <div>
                <span className="font-bold mr-1 inline-block text-[black]">Email:</span>
                <span>vtravel@gmail.com</span>
              </div>
            </li>
            <li className="flex items-center gap-1.5">
              <TbWorld color="#01b9f0" size={20} />
              <div>
                <span className="font-bold mr-1 inline-block text-[black]">Website:</span>
                <span>www.vtravel.com.vn</span>
              </div>
            </li>
          </ul>
        </div>
        <div className="w-1/4">
          <h5 className={`${styles.headingFooter}`}>Đăng ký nhận thông báo</h5>
          <p className="mb-5 text-[18px]">Chúng tôi sẽ cập nhật những ưu đãi tours mới nhất cho bạn.</p>
          <form action="#">
            <div className={`${styles.inputGroup}`}>
              <input
                className={`${styles.inputText}`}
                name="text"
                type="text"
                placeholder="Your Email"
              />
              <label className={`${styles.inputTextLabel}`} htmlFor="text">Your Email</label>
              <button className="absolute cursor-pointer right-0 top-[50%] transform translate-y-[-50%]">
                <FaArrowRightLong size={20} />
              </button>
            </div>
          </form>
          <div className="w-full h-[200px]">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.483555045352!2d108.24559147575981!3d16.040377840208386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421778ce3d3481%3A0x33fad7e713c5f9d!2sTRAVEL%20BUDDY!5e0!3m2!1svi!2s!4v1748412098844!5m2!1svi!2s" className="w-full h-full" loading="lazy" ></iframe>
          </div>
        </div>
      </div >
      <div className="container m-auto relative z-1">
        <div className="flex justify-center py-5 mt-10 border-t border-t-[#0c176829]">
          © 2025 <span className="text-[#01b5f1] inline-block font-bold px-1.5">VTravel</span>. All rights reserved.
        </div>
      </div>
    </footer >
  )
}
