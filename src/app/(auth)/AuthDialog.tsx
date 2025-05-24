'use client'

import { useState, useEffect } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import LoginForm from "./login/loginForm";
import RegisterForm from "./register/registerForm";

type Props = {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export default function AuthDialog({ open, onOpenChange }: Props) {
  const [isLogin, setIsLogin] = useState(true);

  useEffect(() => {
    if (open) {
      setIsLogin(true)
    }
  }, [open])

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
        </DialogHeader>

        {isLogin ? (
          <LoginForm onSwitch={() => setIsLogin(false)} />
        ) : (
          <RegisterForm onSwitch={() => setIsLogin(true)} />
        )}
      </DialogContent>
    </Dialog>
  )
}
