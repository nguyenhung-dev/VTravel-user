"use client";
import { useEffect, useState, createContext, useContext } from "react";
import { API } from "@/lib/api";
import axios from "axios";
import { toast } from "sonner";
import { clearAllCookies } from "@/lib/auth/logout";

type User = {
  id: string;
  email: string;
  full_name: string;
  phone: string;
  is_verified: boolean;
  avatar_url: string;
  created_at: string;
};

type AuthContextType = {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
  logout: () => void;
  refetchUser: () => Promise<void>;
};

const AuthContext = createContext<AuthContextType>({
  user: null,
  isAuthenticated: false,
  loading: true,
  logout: () => { },
  refetchUser: async () => { },
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  const fetchUser = async () => {
    setLoading(true);
    try {
      const res = await API.get("/me");
      setUser(res.data.user);
      console.log("User fetched:", res.data.user);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      await axios.get("http://localhost:8000/sanctum/csrf-cookie", {
        withCredentials: true,
      });

      function getCookie(name: string) {
        const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
        return match ? decodeURIComponent(match[2]) : null;
      }

      const xsrfToken = getCookie('XSRF-TOKEN');

      console.log("Cookie:", document.cookie);
      console.log("XSRF token:", xsrfToken);

      const res = await API.post("/logout", {}, {
        headers: {
          'X-XSRF-TOKEN': xsrfToken ?? '',
        }
      });

      clearAllCookies();

      if (res?.data?.message) {
        toast.success(res.data.message);
        console.log("Logout success:", res.data.message);
      }

      setUser(null);
    } catch (err: any) {
      toast.error(err?.response?.data?.message || "Lỗi khi đăng xuất");
      console.error("Logout error:", err);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        loading,
        logout,
        refetchUser: fetchUser,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
