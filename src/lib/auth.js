import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import { createUser } from "./action";
import CredentialsProvider from "next-auth/providers/credentials"

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      async authorize(credentials) {
        return { 
          name: credentials.name,
          isAdmin: credentials.isAdmin 
        }
      }
    })
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      if (account.provider === "github") {
        try {
          await createUser(profile)          
        } catch (error) {
          return false;
        }
      }
      return true;
    },
    async jwt({ token, user }){
      return {
        ...token,
        isAdmin: user?.isAdmin
      }
    }
  },
  pages: {
    signIn: "/login",
    signOut: "/login",
    error: "/",
    verifyRequest: "/",
    newUser: "/register"
  }
});
