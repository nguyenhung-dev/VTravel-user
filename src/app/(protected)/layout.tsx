"use client";

import { useAuth } from "@/contexts/AuthProvider";
import { useEffect, useState } from "react";
import { notFound } from "next/navigation";

export default function ProtectedLayout({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, loading } = useAuth();
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (!loading) {
      if (!isAuthenticated) {
        notFound();
      } else {
        setShouldRender(true);
      }
    }
  }, [loading, isAuthenticated]);

  if (loading || !shouldRender)
    return
  <div className="absolute w-screen h-screen z-50 bg-[#fff] text-black flex justify-center items-center">
    <p>Đang kiểm tra đăng nhập...</p>
  </div>;

  return <>{children}</>;
}
