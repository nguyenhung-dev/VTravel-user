import styles from "./style.module.css";
import { useTranslations } from "next-intl";
import ButtonGlobal from "@/components/buttonGlobal";
import Counter from "@/components/counter";
import Image from "next/image";

export default function Intro() {
  const t = useTranslations();
  return (
    <section id="intro" className={`${styles.intro} pb-72 pt-60 relative z-10 flex gap-5 text-[var(--color-primary)]`}>
      <img src="/svg/moutain.svg" alt="moutain" className="absolute top-0 left-0 right-0 w-full transform translate-y-[-60%]" />
      <div className="container m-auto flex gap-24">
        <div className="w-[50%] relative">
          <img src="/images/ellipse.png" alt="ellipse" className="absolute top-0 left-0 transform translate-y-[-50%] translate-x-[-20%]" />
          <div className="uppercase">
            <h1 className="text-7xl font-[900] mb-4 tracking-widest">VTRAVEL</h1>
            <h2 className="text-5xl font-[800]">{t("intro.title")}</h2>
          </div>
          <p className="text-[19px] font-medium text-[var(--color-content)] mt-8">{t("intro.desc")}</p>
          <div className="flex mt-10 gap-[6rem]">
            <div>
              <p className="uppercase text-[#6a6a6a] font-extrabold text-[1.25rem]">Hành trình</p>
              <div className="text-[var(--color-primary)] font-bold text-[4.125rem]">
                <Counter targetNumber={10} duration={2000} />
                <span className="text-[3.125rem] inline-block ml-1">năm</span>
              </div>
              <p className="text-[#454545] font-extrabold text-[1.125rem]">Khởi nguồn và phát triển</p>
            </div>
            <div>
              <p className="uppercase text-[#6a6a6a] font-extrabold text-[1.25rem]">Phủ sóng</p>
              <div className="text-[var(--color-primary)] font-bold text-[4.125rem]">
                <Counter targetNumber={63} duration={2000} />
                <span className="text-[3.125rem] inline-block ml-1">tỉnh thành</span>
              </div>
              <p className="text-[#454545] font-extrabold text-[1.125rem]">Khám phá mọi miền đất nước </p>
            </div>
          </div>
          <div className="mt-12">
            <ButtonGlobal text="về chúng tôi" />
          </div>
        </div>
        <div className="flex-1 relative">
          <div className="absolute left-0 bottom-0 right-0">
            <Image src="/images/vntravel.png" alt="vntravel" width={1000} height={700} quality={100} className="w-full h-full" />
          </div>
          <Image src="/images/earthCircle.png" alt="earthCircle" width={1000} height={1000} quality={100} className="absolute bottom-0 left-0 right-0 z-1" />
        </div>
      </div>
    </section>
  )
}
