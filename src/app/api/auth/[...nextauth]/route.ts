import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        login: { label: "Email or Phone", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.login || !credentials?.password) {
          return null;
        }
        try {
          const res = await axios.post("http://localhost:8000/api/login", {
            login: credentials.login,
            password: credentials.password,
          });

          const user = res.data.user;

          if (user && user.is_verified === 1) {
            return user; // ✅ cho phép đăng nhập
          }

          return null; // ❌ từ chối nếu chưa xác thực
        } catch (error) {
          console.error("Authorize error:", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user; // lưu user vào token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login", // nếu có custom page
  },
  secret: process.env.NEXTAUTH_SECRET, // bắt buộc
});

export { handler as GET, handler as POST };
