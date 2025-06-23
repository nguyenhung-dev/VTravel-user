"use client"

import styles from "./style.module.css";
import Image from "next/image"
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import BannerPage from "@/layouts/banner";
import MotionFade from "@/components/motionFade";
import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import GoogleSignInButton from "@/components/googleSignInButton";
import { useState } from "react";
import { validateLoginForm, LoginFormData, LoginFormErrors } from "@/validators/loginValidator";
import { toast } from "sonner";

type Props = {
  onSwitch: () => void;
};

export default function LoginPage({ onSwitch }: Props) {

  const [formData, setFormData] = useState<LoginFormData>({
    phoneOrEmail: "",
    password: "",
  });

  const [errors, setErrors] = useState<LoginFormErrors>({
    phoneOrEmail: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validateLoginForm(formData);
    setErrors(validationErrors);

    const hasErrors = Object.values(validationErrors).some((error) => error !== "");
    if (!hasErrors) {
      toast.success("Đăng nhập thành công")
    }
  };
  return (
    <div>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`}>
        <div className='text-center pt-60 relative z-2'>
          <MotionFade animation="fadeInBottomToTop">
            <h3 className={`${styles.subTitle} font-[700] text-[120px] italic w-[1800px] h-auto`}>Welcome Back</h3>
            <h1 className={`${styles.mainTitle} font-[900] text-[180px] leading-[1] w-[1800px] h-auto`}>VTRAVEL</h1>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='loginForm' text='Tiếp tục đăng nhập' className='scroll-down-page' />
      </BannerPage>
      <div id="loginForm" className="py-32 container m-auto">
        <form className={styles.loginForm} onSubmit={handleSubmit}>
          <h1 className="text-center mb-7 text-2xl font-bold text-blue-900">ĐĂNG NHẬP</h1>
          <CustomInput
            label="Email/Số điện thoại"
            name="phoneOrEmail"
            value={formData.phoneOrEmail}
            onChange={handleChange}
            error={errors.phoneOrEmail}
            className="mb-5"
          />

          <CustomInput
            label="Mật khẩu"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
            className="mb-5"
          />
          <CustomButton
            className="flex justify-center items-center w-full py-3 mt-8 cursor-pointer text-[18px] bg-[#8566e2] hover:bg-[#664aba] rounded-[10px]"
          >
            Đăng nhập
          </CustomButton>
        </form >
        <div className={`${styles.line} `}><div></div><p className="text-[15px] text-gray-500">hoặc</p><div></div></div>
        <GoogleSignInButton />
        <p className="text-sm text-center mt-2">
          Bạn chưa có tài khoản?
          <button type="button" onClick={onSwitch} className="text-blue-500 underline cursor-pointer">
            Đăng ký
          </button>
        </p>
      </div>
    </div>
  )
}
