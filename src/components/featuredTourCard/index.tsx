import Link from "next/link";
import Image from "next/image";
import { IoMdAirplane } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";

interface IProps {
  href?: string;
  imgUrl?: string;
  nameTour?: string;
  originalPrice?: number,
  promotionPrice?: number,
  time?: string,
  startAddress?: string,
  rating?: number,
}

export default function FeaturedTourCard(props: IProps) {
  const { nameTour = "", originalPrice, promotionPrice, time, startAddress, rating, href = "/", imgUrl = "" } = props;
  return (
    <div className="rounded-[20px] overflow-hidden relative h-[600px]">
      <Link href={href}>
        <Image src={imgUrl} alt={nameTour} width={600} height={1000} quality={100} className="w-full h-full object-cover object-center" />
        <div>
          <div>
            <IoMdAirplane />
            <span>Xuất phát</span>
            <span>{nameTour}</span>
          </div>
          <div>
            <MdAccessTime />
            <span>{time}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}
