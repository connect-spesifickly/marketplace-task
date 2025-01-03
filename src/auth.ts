import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
// import { NextAuthAccount, NextAuthProfile } from "next-auth"; // Import tipe

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
    maxAge: 2 * 60,
  },
  providers: [
    Google,
    // ({
    //   clientId: process.env.AUTH_GOOGLE_ID, // Menggunakan environment variable
    //   clientSecret: process.env.AUTH_GOOGLE_SECRET, // Menggunakan environment variable
    //   authorization: {
    //     params: {
    //       prompt: "consent",
    //       access_type: "offline",
    //       response_type: "code",
    //     },
    //   },
    // }),
    Credentials({
      async authorize(credentials) {
        try {
          const response = await fetch(
            "https://fake-blibli-server.vercel.app/users?email=" +
              credentials.email +
              "&password=" +
              credentials.password,
            {
              method: "GET",
              next: {
                revalidate: 0,
              },
            }
          );
          const data = await response.json();
          if (!data.length) throw new Error("Invalid email or password");
          const user = data[0];
          return user;
        } catch (error) {
          console.error(error);
          return null;
        }
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
  callbacks: {
    async jwt({ token, user, account }) {
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.image = user.image;
      }
      if (account) {
        token.accessToken = account.access_token;
        token.refreshToken = account.refresh_token;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as string;
        session.user.email = token.email as string;
        session.user.image = token.image as string;
      }
      return session;
    },
    // async signIn({
    //   account,
    //   profile,
    // }: {
    //   account: NextAuthAccount | null;
    //   profile: NextAuthProfile | null;
    // }) {
    //   if (account?.provider === "google") {
    //     return (
    //       profile?.email_verified && profile?.email?.endsWith("@example.com")
    //     );
    //   }
    //   return true;
    // },
  },
});
