'use client'

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
        src="/images/logo-title.png"
        alt="Picture of the login"
        width={80}
        height={80}
        />
        <div>
        <p className={styles.form_heading_top}>Đăng nhập hệ thống đặt vé du lịch bằng</p>
        <Image className={styles.form_logo_heading}
        src="/images/logo.png"
        alt="Picture of the login heading"
        width={40}
        height={40} /> 
        <p className={styles.form_heading_bottom}>tài khoản VTravel của bạn</p>
        </div>
      </div>

        <div>
        <div className={styles.form_row}>
          <label htmlFor="" className={styles.form_label}>Nhập email hoặc sđt</label>
          <input placeholder="Nhập Email hoặc SĐT tài khoản VTravel của bạn" name="email"  type="email" className={styles.form_input} />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="" className={styles.form_label}>Nhập mật khẩu</label>
          <input placeholder="Nhập mật khẩu của bạn" name="pass"  type="text" className={styles.form_input} />
        </div>
        <div className={styles.form_btn_login}>
          <button type="submit" className={styles.form_btn_login}>
            <span> Đăng nhập</span>
            </button>
        </div>
        </div>

        <p className={styles.form_line}>Hoặc</p>

        <div className={styles.form_btn_link}>
          <div className={styles.form_item_link}>
            <button>
               <p>Đăng nhập với Google</p>
            </button>
          </div>
        </div>

      <p className="text-sm text-center">
        Bạn chưa có tài khoản?{" "}
      <button type="button" onClick={onSwitch} className="text-blue-500 underline">Tạo tài khoản mới</button>
      </p>
    </form>
  )
}
