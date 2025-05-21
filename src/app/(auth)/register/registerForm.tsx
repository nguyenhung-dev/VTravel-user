'use client'

import styles from "./style.module.css";

type Props = {
  onSwitch: () => void
}

export default function RegisterForm({ onSwitch }: Props) {
  return (
    <form className="space-y-2">
      <input type="text" placeholder="Họ tên" className="w-full border p-2" />
      <input type="email" placeholder="Email" className="w-full border p-2" />
      <input type="password" placeholder="Mật khẩu" className="w-full border p-2" />
      <button type="submit" className="w-full bg-green-600 text-white p-2 rounded">Đăng ký</button>
      <p className="text-sm text-center">
        Đã có tài khoản?{" "}
        <button type="button" onClick={onSwitch} className="text-blue-500 underline">Đăng nhập</button>
      </p>
    </form>
  )
}
