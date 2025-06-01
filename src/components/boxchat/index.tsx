import styles from "./style.module.css";
import { MdSupportAgent } from "react-icons/md";
import CustomButton from "@/components/customButton";

export default function BoxChat() {
  return (
    <div className="fixed right-[25px] bottom-[150px] z-15">
      <CustomButton className={`${styles.button}`}>
        <MdSupportAgent size={28} />
      </CustomButton>
    </div>
  )
}
