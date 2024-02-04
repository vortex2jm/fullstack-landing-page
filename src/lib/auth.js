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
      async authorize(user) {
        return user
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
  },
});

