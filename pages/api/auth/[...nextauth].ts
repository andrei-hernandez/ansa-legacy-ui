import NextAuth, { NextAuthOptions } from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"

import { ILoginCredentials } from "@/types/Auth"

const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt"
  },
  providers: [
    CredentialsProvider({
      type: "credentials",
      credentials: {},
      async authorize (credentials, req) {
        const { login, password } = credentials as ILoginCredentials

        return { id: "", login: "", password: "" }
      }
    })
  ],
  pages: {
    signIn: "/login"
  }
}

export default NextAuth(authOptions)
