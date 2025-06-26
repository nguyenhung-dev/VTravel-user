"use client";

import { Button } from "@/components/ui/button";
import { Mail, Phone, Loader2 } from "lucide-react";
import { useState } from "react";

type Props = {
  onSelect: (method: "email" | "phone") => Promise<void>;
};

export default function MethodSelect({ onSelect }: Props) {
  const [loadingMethod, setLoadingMethod] = useState<"email" | "phone" | null>(null);

  const handleSelect = async (method: "email" | "phone") => {
    setLoadingMethod(method);
    try {
      await onSelect(method);
    } finally {
      setLoadingMethod(null); // reset sau khi xong
    }
  };

  return (
    <div className="space-y-4 text-center">
      <p className="text-muted-foreground text-sm">
        Vui lòng chọn phương thức để xác thực tài khoản của bạn.
      </p>

      <div className="flex flex-col gap-4 mt-6">
        <Button
          variant="outline"
          disabled={loadingMethod !== null}
          className="w-full flex items-center gap-2 justify-center"
          onClick={() => handleSelect("email")}
        >
          {loadingMethod === "email" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Đang gửi Email...
            </>
          ) : (
            <>
              <Mail size={18} />
              Xác thực qua Email
            </>
          )}
        </Button>

        <Button
          variant="outline"
          disabled={loadingMethod !== null}
          className="w-full flex items-center gap-2 justify-center"
          onClick={() => handleSelect("phone")}
        >
          {loadingMethod === "phone" ? (
            <>
              <Loader2 className="animate-spin" size={18} />
              Đang gửi SMS...
            </>
          ) : (
            <>
              <Phone size={18} />
              Xác thực qua Số điện thoại
            </>
          )}
        </Button>
      </div>
    </div>
  );
}
