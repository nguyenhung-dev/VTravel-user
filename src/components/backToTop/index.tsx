'use client'

import styles from "./style.module.css";
import CustomButton from "../customButton";
import { FaLocationArrow } from "react-icons/fa6";

export default function BackToTop() {
  const handleBackToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return (
    <div className="fixed z-15 bottom-[70px] right-[25px]">
      <CustomButton className={`${styles.button}`} onClick={handleBackToTop}>
        <div className={`${styles.buttonBox}`}>
          <span className={`${styles.buttonElem}`}>
            <FaLocationArrow size={20} />
          </span>
          <span className={`${styles.buttonElem}`}>
            <FaLocationArrow size={20} />
          </span>
        </div>
      </CustomButton>
    </div>
  )
}
