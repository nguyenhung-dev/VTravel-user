
import styles from "./style.module.css";
import Image from 'next/image';

type Props = {
  onSwitch: () => void
}

export default function LoginForm({ onSwitch }: Props) {
  return (
    <form >
      <div>
        <Image className={styles.form_logo}
          src="/images/logo.png"
          alt="Picture of the login"
          width={100}
          height={100}
        />
        <div>
          <p className={styles.form_heading_top}>Đăng nhập tài khoản VTravel của bạn</p>
        </div>
      </div>

      <div>
        <div className={styles.form_row}>
          <label htmlFor="" className={styles.form_label}>Nhập email hoặc sđt</label>
          <input placeholder="Nhập Email hoặc SĐT tài khoản VTravel của bạn" name="email" type="email" className={styles.form_input} />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="" className={styles.form_label}>Nhập mật khẩu</label>
          <input placeholder="Nhập mật khẩu của bạn" name="pass" type="text" className={styles.form_input} />
        </div>
        <div className={styles.form_btn_login}>
          <button type="submit" className={styles.form_btn_login}>
            <span> Đăng nhập</span>
          </button>
        </div>
      </div>

      <div >
        <p className={styles.form_line}>Hoặc</p>
        <div className={styles.form_btn_link}>
          <div className={styles.form_item_link}>
            <a href="" title="google icons">
              <Image className={styles.form_icon_gg}
                src="/images/icon_gg.png"
                alt="Icon link google"
                width={60}
                height={60}
              />
              <p>Đăng nhập với Google</p>
            </a>
          </div>
        </div>
      </div>
      <p className="text-sm text-center">
        Bạn chưa có tài khoản?{" "}
        <button type="button" onClick={onSwitch} className="text-blue-500 underline">Tạo tài khoản mới</button>
      </p >
    </form >
  )
}
