// logout.ts
import { createAsyncThunk } from "@reduxjs/toolkit";
import { API } from "@/lib/api";
import { clearAuth } from "../slices/authSlice";

export const logout = createAsyncThunk("auth/logout", async (_, { dispatch }) => {
  try {
    await API.post("/logout");
    console.log("✅ Đã gọi API logout");
  } catch (error: any) {
    console.warn("⚠️ Logout failed on server, proceeding with local logout");
  } finally {
    localStorage.removeItem("access_token");
    dispatch(clearAuth());
  }
});
