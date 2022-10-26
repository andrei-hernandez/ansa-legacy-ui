import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import { AxiosRestService } from '@/services/restService/axiosRestService'
import { AuthService } from '@/services/server/userAuthService'

import { ILoginCredentials } from '@/types/Auth'

const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt'
  },
  providers: [
    CredentialsProvider({
      type: 'credentials',
      credentials: {},
      async authorize (credentials, req) {
        const { login, password } = credentials as ILoginCredentials
        const res = await AuthService(AxiosRestService())
          .authenticateUser({ login, password })

        return { id: `${res.data?.id ?? ''}`, login: res.data?.login ?? '', password: res.data?.password ?? '' }
      }
    })
  ],
  pages: {
    signIn: '/login'
  }
}

export default NextAuth(authOptions)
