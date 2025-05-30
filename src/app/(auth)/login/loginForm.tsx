import { useState } from "react";
import styles from "./style.module.css";
import CustomButton from "@/components/customButton";
import CustomInput from "@/components/customInput";
import GoogleSignInButton from "@/components/googleSignInButton";
import { useTranslations } from "next-intl";
import { validateLoginForm, LoginFormData, LoginFormErrors } from "@/validators/loginValidator";
import { toast } from "sonner";

type Props = {
  onSwitch: () => void;
};

export default function LoginForm({ onSwitch }: Props) {
  const t = useTranslations();

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
      toast.success(t("form.loginSuccessfully"))
    }
  };

  return (
    <>
      <form className={styles.loginForm} onSubmit={handleSubmit}>
        <h1 className="text-center mb-7 text-2xl font-bold text-blue-900">ĐĂNG NHẬP</h1>
        <CustomInput
          label={t("form.phoneOrEmail")}
          name="phoneOrEmail"
          value={formData.phoneOrEmail}
          onChange={handleChange}
          error={errors.phoneOrEmail}
          required
        />

        <CustomInput
          label={t("form.password")}
          name="password"
          type="password"
          value={formData.password}
          onChange={handleChange}
          error={errors.password}
          required
        />
        <CustomButton
          className="flex justify-center items-center w-full py-3 mt-8 cursor-pointer text-[18px] bg-[#8566e2] hover:bg-[#664aba] rounded-[10px]"
        >
          {t("form.btnLogin")}
        </CustomButton>
      </form >
      <div className={`${styles.line} `}><div></div><p className="text-[15px] text-gray-500">{t("form.or")}</p><div></div></div>
      <GoogleSignInButton />
      <p className="text-sm text-center mt-2">
        {`${t("form.noAccount")} `}
        <button type="button" onClick={onSwitch} className="text-blue-500 underline cursor-pointer">
          {t("form.btnRegister")}
        </button>
      </p>
    </>
  );
}
