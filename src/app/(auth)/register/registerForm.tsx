
import styles from "./style.module.css";
import Image from 'next/image';

type Props = {
  onSwitch: () => void
}

export default function RegisterForm({ onSwitch }: Props) {
  return (
    <form className={styles.form_register}>
      <div>
      <Image className={styles.form_logo}
        src="/images/logo-title.png"
        alt="Picture of the register"
        width={80}
        height={80}
      />
      <p className={styles.form_heading}>Tạo tài khoản VTravel mới</p>
      </div>
      <div className={styles.form_row}>
        <div className={styles.form_input}>
          <label htmlFor="" className={styles.form_label}>Nhập họ tên</label>
          <input placeholder="Nhập họ tên" name="fullname" type="text" className={styles.form_item_input} />
        </div>
        <div className={styles.form_input}>
          <label htmlFor="" className={styles.form_label}>Nhập email hoặc sđt</label>
          <input placeholder="Nhập email hoặc sđt" name="email" type="email" className={styles.form_item_input} />
        </div>
        <div className={styles.form_input}>
          <label htmlFor="" className={styles.form_label}>Nhập mật khẩu</label>
          <input placeholder="Nhập mật khẩu" name="pass" type="text" className={styles.form_item_input} />
        </div>
        <div className={styles.form_input}>
          <label htmlFor="" className={styles.form_label}>Nhập lại mật khẩu</label>
          <input placeholder="Nhập lại mật khẩu" name="pass" type="text" className={styles.form_item_input} />
        </div>
      </div>

      <div className={styles.form_btn_register}> 
      <button type="submit" className={styles.form_btn_register}>Đăng ký</button>
      </div>

      <p className="text-sm text-center">
        Đã có tài khoản?{" "}
        <button type="button" onClick={onSwitch} className="text-blue-500 underline">Đăng nhập</button>
      </p>
    </form>
  )
}
