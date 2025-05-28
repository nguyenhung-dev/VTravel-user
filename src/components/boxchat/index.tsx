import styles from "./style.module.css";
import { MdSupportAgent } from "react-icons/md";

export default function BoxChat() {
  return (
    <div className="fixed right-[20px] bottom-[120px] z-7">
      <button className={`${styles.button}`}>
        <MdSupportAgent size={28} />
      </button>
    </div>
  )
}
