"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { signIn } from "next-auth/react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const phoneRegex = /^\+?\d{10,15}$/;

const formSchema = z.object({
  info: z
    .string()
    .min(1, "Email hoặc số điện thoại không được bỏ trống")
    .refine(
      (value) =>
        z.string().email().safeParse(value).success ||
        phoneRegex.test(value),
      {
        message: "Email hoặc số điện thoại không hợp lệ",
      }
    ),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự").max(50),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  onSwitch: () => void;
  onLoginVerifiedSuccess: (user: any) => void;
  onNeedVerify: (userId: string) => void;
};


export default function LoginForm({ onSwitch, onLoginVerifiedSuccess, onNeedVerify }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      info: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const payload = {
      login: values.info,
      password: values.password,
    };

    try {
      const res = await signIn("credentials", {
        redirect: false,
        payload
      });

      if (res?.ok) {
        // ✅ đăng nhập thành công, session sẽ được lưu bởi NextAuth
        const session = await getSession();
        const user = session?.user;

        onLoginVerifiedSuccess(user);
      } else {
        toast.warning("Tài khoản chưa xác thực hoặc thông tin sai.");
      }

    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false);
    }

  }
  const RequiredLabel = ({ label, required = false }: { label: string; required?: boolean }) => (
    <FormLabel className="text-[15px] font-[700] inline-block text-gray-600">
      {label} {required && <span className="text-red-500">*</span>}
    </FormLabel>
  );
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel label="Email/Số điện thoại" required />
              <FormControl>
                <Input className="input-style" placeholder="example@gmail.com / 0912345678" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <RequiredLabel label="Mật khẩu" required />
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    {...field}
                    className="input-style"
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? (
                    <EyeOff size={23} className="cursor-pointer" />
                  ) : (
                    <Eye size={23} className="cursor-pointer" />
                  )}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="button-style mt-5" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>
      </form>

      <div className="text-sm text-center mt-4">
        <span>Bạn chưa có tài khoản? </span>
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 underline cursor-pointer"
        >
          Đăng ký
        </button>
      </div>
    </Form>
  );
}
