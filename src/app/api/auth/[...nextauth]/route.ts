import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import axios from "axios";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email hoặc SĐT", type: "text" },
        password: { label: "Mật khẩu", type: "password" }
      },
      async authorize(credentials: any) {
        try {
          const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
            login: credentials.email,
            password: credentials.password
          });

          const user = res.data?.user;
          if (user) return user;
          return null;
        } catch (err) {
          return null;
        }
      }
    }),
  ],
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) token.user = user;
      return token;
    },
    async session({ session, token }) {
      session.user = token.user as any;
      return session;
    }
  },
  pages: {
    signIn: '/login' 
  }
});

export { handler as GET, handler as POST };
