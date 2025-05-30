import { useTranslations } from "next-intl";
import styles from "./style.module.css";
import { PaperAirplaneIcon, UserGroupIcon } from '@heroicons/react/24/outline'
import Image from "next/image";
import ButtonGlobal from "@/components/buttonGlobal";

export default function TravelStory() {

  const t = useTranslations();

  return (
    <section className={`${styles.intro} py-24 text-[#fff]`}>
      <div className="container relative z-1 m-auto flex gap-10">
        <div className={`${styles.left} w-1/2`}>
          <div className="w-full h-full px-5 rounded-[10px] overflow-hidden" data-aos="flip-left">
            <Image src="/images/intro-image.webp" alt="Intro VTravel" width={800} height={1000} quality={100} className="rounded-[15px]" />
          </div>
        </div>
        <div className="w-1/2" data-aos="fade-up">
          <div className="mb-5">
            <h5 className="sub-title">{t("homePage.travelStory.subTitle")}</h5>
            <h2 className="main-title">{t("homePage.travelStory.title")}</h2>
          </div>
          <span className="desc mb-10 inline-block ">
            {t("homePage.travelStory.desc")}
          </span>
          <ul className={`${styles.list}`}>
            <li className="mb-7">
              <div>
                <div className={`${styles.icon}`}>
                  <PaperAirplaneIcon aria-hidden="true" />
                </div>
              </div>
              <div>
                <h6>{t("homePage.travelStory.listTitle1")}</h6>
                <span>{t("homePage.travelStory.listDesc1")}</span>
              </div>
            </li>
            <li>
              <div>
                <div className={`${styles.icon}`}>
                  <UserGroupIcon aria-hidden="true" />
                </div>
              </div>
              <div>
                <h6>{t("homePage.travelStory.listTitle2")}</h6>
                <span>{t("homePage.travelStory.listDesc2")}</span>
              </div>
            </li>
          </ul>
          <ButtonGlobal text={t("textBtn.learnMore")} className="mt-10" />
        </div>
      </div>
    </section >
  )

}