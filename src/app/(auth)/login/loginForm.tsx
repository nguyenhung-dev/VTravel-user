
import styles from "./style.module.css";

type Props = {
  onSwitch: () => void
}

export default function LoginForm({ onSwitch }: Props) {
  return (
    <form >
      <div className={styles.logo}>
        <img src="" alt="" />
      </div>
      <p className={styles.heading}>Đăng nhập hệ thống đặt vé du lịch bằng tài khoản VTravel của bạn</p>
      <div>
        <div className={styles.form_row}>
          <label htmlFor="" className={styles.form_label}>Vui lòng nhập thông tin của bạn</label>
          <input placeholder="Nhập Email hoặc SĐT tài khoản VTravel của bạn" name="email" type="text" className={styles.form_input} />
          <input placeholder="Nhập mật khẩu của bạn" name="pass" type="text" className={styles.form_input} />
        </div>
        <div className={styles.form_btn_login}>
          <button type="submit" className="">
            <span> Đăng nhập</span>
          </button>
        </div>
      </div>

      <p className={styles.form_line}>Hoặc</p>

      <div >
        <div className={styles.form_btn_link}>
          <button>
            <img src="" alt="" />
            <p>Đăng nhập với Google</p>
          </button>
        </div>
        <div className={styles.form_btn_link}>
          <button>
            <img src="" alt="" />
            <p>Đăng nhập với FaceBook</p>
          </button>
        </div>
        <div className={styles.form_btn_link}>
          <button>
            <img src="" alt="" />
            <p>Đăng nhập với Microsoft</p>
          </button>
        </div>
      </div>
      <p className="text-sm text-center">
        Bạn chưa có tài khoản?{" "}s
        <button type="button" onClick={onSwitch} className="text-blue-500 underline">Đăng ký</button>
      </p>
    </form>
  )
}
