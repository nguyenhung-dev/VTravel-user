"use client";

import styles from "./style.module.css";
import ScrollDownIndicator from '@/components/scrollDownIndicator';
import BannerPage from "@/layouts/banner";
import MotionFade from "@/components/motionFade";
import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { toast } from "sonner";
import OtpInput from "react-otp-input";
import axios from "axios";

interface FormData {
  full_name: string;
  phone: string;
  email: string;
  password: string;
}

const schema = yup.object({
  full_name: yup.string().required("Vui lòng nhập họ tên"),
  phone: yup.string().matches(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ").required("Vui lòng nhập số điện thoại"),
  email: yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
  password: yup.string().min(6, "Mật khẩu phải có ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu")
}).required();

export default function RegisterPage() {
  const [step, setStep] = useState(1);
  const [otpCode, setOtpCode] = useState('');
  const [userId, setUserId] = useState<number | null>(null);
  const [otpMethod, setOtpMethod] = useState<'email' | 'phone' | ''>('');
  const [otpExpireSeconds, setOtpExpireSeconds] = useState(120);
  const [canResendOtp, setCanResendOtp] = useState(false);
  const [resendTimeout, setResendTimeout] = useState(30);

  const steps = ['Thông tin', 'Chọn phương thức', 'Nhập mã OTP', 'Hoàn tất'];

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (step === 3 && otpExpireSeconds > 0) {
      timer = setTimeout(() => setOtpExpireSeconds((prev) => prev - 1), 1000);
    }
    return () => clearTimeout(timer);
  }, [step, otpExpireSeconds]);

  useEffect(() => {
    let resendTimer: NodeJS.Timeout;
    if (step === 3 && !canResendOtp && resendTimeout > 0) {
      resendTimer = setTimeout(() => setResendTimeout((prev) => prev - 1), 1000);
    } else if (resendTimeout === 0) {
      setCanResendOtp(true);
    }
    return () => clearTimeout(resendTimer);
  }, [step, resendTimeout, canResendOtp]);

  useEffect(() => {
    if (step !== 3) {
      setCanResendOtp(false);
      setResendTimeout(30);
    }
  }, [step]);

  const onSubmit = async (data: FormData) => {
    try {
      const res = await axios.post("http://localhost:8000/api/register", data);
      toast.success("Đăng ký thành công, hãy chọn phương thức gửi mã OTP");
      setUserId(res.data.user.id);
      setStep(2);
    } catch (err: any) {
      const msg = err?.response?.data?.message || 'Đăng ký thất bại';
      toast.error(msg);
    }
  };

  const handleSendOtp = async (method: 'email' | 'phone') => {
    console.log(method)
    if (!userId) return;
    try {
      await axios.post("http://localhost:8000/api/otp/send", {
        user_id: userId,
        method
      });
      setOtpMethod(method);
      setStep(3);
      setOtpExpireSeconds(120);
      toast.success(`Đã gửi mã OTP qua ${method === 'email' ? 'email' : 'số điện thoại'}`);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Không thể gửi OTP');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      await axios.post("http://localhost:8000/api/otp/verify", {
        user_id: userId,
        method: otpMethod,
        code: otpCode
      });
      setStep(4);
      toast.success("Xác thực thành công!");
    } catch (err: any) {
      toast.error(err?.response?.data?.message || 'Mã OTP không đúng hoặc đã hết hạn');
    }
  };

  return (
    <div>
      <BannerPage classNameSection={`${styles.banner} h-screen w-full`}>
        <div className='text-center pt-60 relative z-2'>
          <MotionFade animation="fadeInBottomToTop">
            <h3 className={`${styles.subTitle} font-[700] text-[120px] italic`}>Welcome To</h3>
            <h1 className={`${styles.mainTitle} font-[900] text-[180px] leading-[1]`}>VTRAVEL</h1>
          </MotionFade>
        </div>
        <ScrollDownIndicator idSection='registerForm' text='Tiếp tục đăng ký' className='scroll-down-page' />
      </BannerPage>

      <div id="registerForm" className="py-32 container m-auto">
        <h1 className="text-center mb-10 text-2xl font-extrabold text-blue-900">ĐĂNG KÝ TÀI KHOẢN</h1>
        <div className="flex justify-between items-center mb-10 px-4">
          {steps.map((label, index) => (
            <div key={index} className="flex-1 text-center relative">
              <div className={`w-10 h-10 mx-auto rounded-full flex items-center justify-center text-white text-sm font-bold z-10 ${step > index + 1 ? 'bg-green-500' : step === index + 1 ? 'bg-blue-600' : 'bg-gray-300'}`}>
                {index + 1}
              </div>
              <p className="text-sm mt-2">{label}</p>
              {index < steps.length - 1 && <div className="absolute top-5 transform translate-x-[50%] right-0 h-1 w-[60%] bg-gray-300 z-0" />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <h2 className="text-center mb-7 text-xl font-bold text-blue-900">THÔNG TIN CÁ NHÂN</h2>
            <div className="grid grid-cols-2 gap-15">
              <CustomInput inputClassName={styles.input} required placeholder="Nguyễn Văn A" label="Họ và tên" {...register("full_name")} error={errors.full_name?.message} />
              <CustomInput inputClassName={styles.input} required placeholder="0964587515" label="Số điện thoại" {...register("phone")} error={errors.phone?.message} />
              <CustomInput inputClassName={styles.input} required placeholder="example@gmail.com" label="Email" {...register("email")} error={errors.email?.message} />
              <CustomInput inputClassName={styles.input} required placeholder="********" label="Mật khẩu" type="password" {...register("password")} error={errors.password?.message} />
            </div>
            <CustomButton className="mt-16 w-full flex justify-center text-white font-bold rounded-[8px] cursor-pointer py-4 bg-[#8566e2] hover:bg-[#664aba]">Đăng ký</CustomButton>
          </form>
        )}

        {step === 2 && (
          <div className="text-center">
            <h2 className="text-center mb-7 text-xl font-bold text-blue-900">XÁC THỰC TÀI KHOẢN</h2>
            <p>Chọn phương thức nhận mã</p>
            <div className="flex justify-center gap-4 mt-4">
              <CustomButton onClick={() => handleSendOtp('email')} className="py-3 px-5 rounded-[5px] cursor-pointer text-white hover:opacity-5" style={{ backgroundColor: "#00daf0" }}>Qua Email</CustomButton>
              <CustomButton onClick={() => handleSendOtp('phone')} className="py-3 px-5 rounded-[5px] cursor-pointer text-white hover:opacity-5" style={{ backgroundColor: "#155dfc" }}>Qua SĐT</CustomButton>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="text-center max-w-md mx-auto">
            <h2 className="text-center mb-7 text-xl font-bold text-blue-900">NHẬP MÃ OTP</h2>
            <OtpInput
              value={otpCode}
              onChange={setOtpCode}
              numInputs={6}
              inputType="text"
              shouldAutoFocus
              containerStyle="flex justify-center gap-2"
              renderInput={(props) => (
                <input
                  {...props}
                  inputMode="numeric"
                  pattern="[0-9]*"
                  maxLength={1}
                  onKeyDown={(e) => {
                    if (!/^[0-9]$/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
                      e.preventDefault();
                    }
                  }}
                  className={styles.otpInput}
                />
              )}
            />
            <div className="mt-4 text-sm text-gray-600">
              {otpExpireSeconds > 0 ? `Mã OTP sẽ hết hạn sau ${otpExpireSeconds}s` : 'Mã OTP đã hết hạn'}
            </div>
            <CustomButton className="mt-4 w-full py-3 cursor-pointer bg-blue-600 text-white font-bold flex justify-center" onClick={handleVerifyOtp}>Xác minh</CustomButton>
            <CustomButton
              className="mt-2 w-full cursor-pointer py-2 bg-gray-300 text-gray-800 hover:bg-gray-400 font-bold flex justify-center"
              disabled={!canResendOtp}
              onClick={() => handleSendOtp(otpMethod as 'email' | 'phone')}
            >
              {canResendOtp ? 'Gửi lại mã OTP' : `Gửi lại sau ${resendTimeout}s`}
            </CustomButton>
          </div>
        )}

        {step === 4 && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-green-600">🎉 Tạo tài khoản thành công!</h2>
            <p className="mt-2">Bạn có thể đăng nhập để sử dụng dịch vụ.</p>
          </div>
        )}
      </div>
    </div>
  );
}
