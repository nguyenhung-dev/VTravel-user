import Link from "next/link";
import Image from "next/image";
import { FaMapLocationDot } from "react-icons/fa6";

interface IProps {
  title?: string;
  excerpt?: string;
  href?: string;
  imgUrl?: string;
  address?: string;
}

export default function GuideCard(props: IProps) {
  const { title = "", excerpt = "", imgUrl = "", address = "", href = "/" } = props;
  return (
    <div className="relative overflow-hidden rounded-2xl h-[350px] w-[550px] text-[#fff]">
      <Link href={href}>
        <Image src={imgUrl} alt={title} width={1000} height={600} quality={100} />
        <div className="absolute z-1  left-0 right-0 bottom-0 py-5 px-5">
          <div className="flex items-center gap-1.5">
            <FaMapLocationDot />
            <p className="text-[#ffd220] font-medium">{address}</p>
          </div>
          <div className="text-[1.45rem] font-bold">
            {title}
          </div>
          <div className="text-[1rem] opacity-80">
            {excerpt}
          </div>
        </div>
        <div className="absolute z-0 left-0 right-0 bottom-0 h-[60%] bg-gradient-to-t from-black/80 via-black/50 to-transparent"></div>
      </Link>
    </div>
  )
}
