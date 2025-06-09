import CustomButton from "../customButton";
import { RiCustomerServiceFill } from "react-icons/ri";
import styles from "./style.module.css";

export default function BookChat() {
  return (
    <div className="fixed right-[25px] bottom-[150px] z-15">
      <CustomButton className={`${styles.button}`}>
        <RiCustomerServiceFill size={28} />
      </CustomButton>
    </div>
  )
}
