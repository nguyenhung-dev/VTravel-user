import { useTranslations } from "next-intl";
import styles from "./style.module.css";
import { PaperAirplaneIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import CustomButton from "@/components/customButton";

export default function Intro() {

  const t = useTranslations();

  return (
    <section className={`${styles.intro} py-24 text-[#fff]`}>
      <div className="container relative z-1 m-auto flex gap-10">
        <div className={`${styles.left} w-1/2`}>
          <div className="w-full h-full px-5 rounded-[10px] overflow-hidden">
            <Image src="/images/intro-image.webp" alt="Intro VTravel" width={800} height={1000} quality={100} className="rounded-[15px]" />
          </div>
        </div>
        <div className="w-1/2">
          <div className="mb-5">
            <h5 className="sub-title">{t("homePage.intro.subTitle")}</h5>
            <h2 className="main-title">{t("homePage.intro.title")}</h2>
          </div>
          <span className="desc mb-10 inline-block ">
            {t("homePage.intro.desc")}
          </span>
          <ul className={`${styles.list}`}>
            <li className="mb-7">
              <div>
                <div className={`${styles.icon}`}>
                  <PaperAirplaneIcon aria-hidden="true" />
                </div>
              </div>
              <div>
                <h6>{t("homePage.intro.listTitle1")}</h6>
                <span>{t("homePage.intro.listDesc1")}</span>
              </div>
            </li>
            <li>
              <div>
                <div className={`${styles.icon}`}>
                  <UserGroupIcon aria-hidden="true" />
                </div>
              </div>
              <div>
                <h6>{t("homePage.intro.listTitle2")}</h6>
                <span>{t("homePage.intro.listDesc2")}</span>
              </div>
            </li>
          </ul>
          <CustomButton
            text={t("textBtn.learnMore")}
            asLink
            href="/"
            className="mt-10 inline-block py-5 px-24 bg-transparent border border-amber-50 hover:text-[#eaee70] text-[18px] rounded-2xl font-bold hover:bg-[#ffffff3e]"
          />
        </div>
      </div>
    </section >
  )

}