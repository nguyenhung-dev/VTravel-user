import styles from "./style.module.css";
import CustomInput from "@/components/customInput";
import CustomButton from "@/components/customButton";
import { useTranslations } from "next-intl";
import { useState } from 'react';
import { validateRegisterForm } from "@/validators/registerValidator";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function RegisterForm({ onSwitch }: { onSwitch: () => void }) {
  const t = useTranslations();
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
  });
  const [formErrors, setFormErrors] = useState({
    fullname: '',
    phone: '',
    email: '',
    password: '',
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setFormErrors({ ...formErrors, [name]: '' });
  };
  const validate = () => {
    const errors = validateRegisterForm(formData);
    setFormErrors(errors);
    const isValid = Object.values(errors).every(error => error === '');
    return isValid;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      toast.success(t("form.registeredSuccessfully"));
      onSwitch();
      router.push("/");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={`${styles.registerForm}`}>
        <h1 className="text-center mb-7 text-2xl font-bold text-blue-900">ĐĂNG KÝ</h1>
        <CustomInput
          label={t("form.fullName")}
          name="fullname"
          placeholder="Nguyen Van A"
          value={formData.fullname}
          onChange={handleChange}
          error={formErrors.fullname}
          required
        />
        <CustomInput
          label={t("form.phone")}
          name="phone"
          placeholder="0966418674"
          value={formData.phone}
          onChange={handleChange}
          error={formErrors.phone}
          required
        />
        <CustomInput
          label={t("form.email")}
          name="email"
          type="email"
          placeholder="vtravel@gmail.com"
          value={formData.email}
          onChange={handleChange}
          error={formErrors.email}
          required
        />
        <CustomInput
          label={t("form.password")}
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={formErrors.password}
          required
        />
        <CustomButton className="flex justify-center items-center w-full py-3 mt-8 cursor-pointer text-[18px] bg-[#8566e2] hover:bg-[#664aba] rounded-[10px]" >
          {t("form.btnRegister")}
        </CustomButton>
      </form>
      <p className="text-sm text-center mt-2">
        {`${t("form.haveAccount")} `}
        <button type="button" onClick={onSwitch} className="text-blue-500 underline cursor-pointer">{t("form.btnLogin")}</button>
      </p >
    </>
  )
}
