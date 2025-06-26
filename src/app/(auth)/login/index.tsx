"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
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
};

export default function LoginForm({ onSwitch }: Props) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      info: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(values: FormValues) {
    console.log("Dữ liệu đăng nhập:", values);
    // TODO: Gọi API đăng nhập tại đây
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="info"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email/Số điện thoại</FormLabel>
              <FormControl>
                <Input placeholder="example@gmail.com / 0912345678" {...field} />
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

        <Button type="submit" className="w-full mt-2">
          Đăng nhập
        </Button>
      </form>

      <div className="text-sm text-center mt-4">
        <span>Bạn chưa có tài khoản? </span>
        <button
          type="button"
          onClick={onSwitch}
          className="text-blue-600 underline"
        >
          Đăng ký
        </button>
      </div>
    </Form>
  );
}
