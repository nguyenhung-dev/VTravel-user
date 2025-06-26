"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  full_name: z.string().min(1, "Tên không được bỏ trống").max(100),
  email: z.string().email("Email không hợp lệ"),
  phone: z
    .string()
    .min(10, "Số điện thoại phải có ít nhất 10 chữ số")
    .max(15)
    .regex(/^(0|\+84)[0-9]{9,10}$/, "Số điện thoại không hợp lệ"),
  password: z.string().min(6, "Mật khẩu tối thiểu 6 ký tự").max(50),
});

type FormValues = z.infer<typeof formSchema>;

type Props = {
  onSwitch: () => void;
  onSuccess: (user: { id: string }, expireTime: number) => void;
};

export default function RegisterForm({ onSwitch, onSuccess }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      full_name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(values: FormValues) {
    setLoading(true);
    const payload = {
      full_name: values.full_name,
      email: values.email,
      phone: values.phone,
      password: values.password,
    }
    try {
      const res = await axios.post("http://localhost:8000/api/register", payload);

      const data = res.data;

      toast.success("Tạo tài khoản thành công! Vui lòng xác thực tài khoản của bạn.");

      console.log(data)

      if (!data?.user?.id) {
        throw new Error(data?.message || "Đăng ký thất bại");
      }

      // Lưu user + thời gian OTP hết hạn vào parent
      const expireTime = Date.now() + 2 * 60 * 1000;
      onSuccess(data.user, expireTime);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        const errors = error.response?.data?.errors;
        const messageDetail =
          errors?.email?.[0] ||
          errors?.phone?.[0] ||
          errors?.password?.[0] ||
          error.response?.data?.message ||
          "Đã có lỗi xảy ra.";

        toast.error(messageDetail);
      } else {
        toast.error("Lỗi hệ thống.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="full_name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Họ và tên</FormLabel>
              <FormControl>
                <Input placeholder="Nguyễn Văn A" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" placeholder="example@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder="0123456789" {...field} />
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
              <FormLabel>Mật khẩu</FormLabel>
              <div className="relative">
                <FormControl>
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="••••••"
                    {...field}
                    className="pr-10"
                  />
                </FormControl>
                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                  tabIndex={-1}
                >
                  {showPassword ? <EyeOff size={23} /> : <Eye size={23} />}
                </button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" className="w-full mt-2 text-black" disabled={loading}>
          {loading ? "Đang đăng ký..." : "Đăng ký"}
        </Button>
      </form>

      <div className="text-sm text-center mt-4">
        <span>Bạn đã có tài khoản? </span>
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 underline"
        >
          Đăng nhập
        </button>
      </div>
    </Form>
  );
}
