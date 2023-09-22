import { AuthOptions } from 'next-auth/core/types'
import CredentialsProvider from 'next-auth/providers/credentials'

const useSecureCookies = !process.env.NEXT_AUTH_SECURE

export const authConfig: AuthOptions = {
  session: {
    strategy: 'jwt',
  },

  providers: [
    CredentialsProvider({
      name: 'Credentials',
      type: 'credentials',
      credentials: {
        email: { label: 'Email', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials, req) {
        const { email, password } = credentials as {
          email: string
          password: string
        }

        if (!email || !password) {
          throw new Error('Fields can not be blank')
        }

        const user = { id: '1', name: 'John Doe', email: 'john@email.com', role: 'admin' }

        if (email !== user.email || password !== '1234') {
          throw new Error('Invalid credentials')
        }

        return user
      },
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET as string,

  cookies: {
    sessionToken: {
      name: `${useSecureCookies ? '__Secure-' : ''}next-auth.session-token`,
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        domain: process.env.VERCEL_URL as string,
        secure: useSecureCookies,
      },
    },
  },
}
