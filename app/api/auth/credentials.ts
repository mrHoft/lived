import type { User } from 'next-auth'
import { AuthOptions, CookiesOptions } from 'next-auth/core/types'
import Credentials from 'next-auth/providers/credentials'
// import { randomUUID, randomBytes } from 'crypto'

const cookies: Partial<CookiesOptions> = {
  sessionToken: {
    name: `next-auth.session-token`,
    options: {
      httpOnly: true,
      sameSite: 'none',
      path: '/',
      domain: process.env.NEXTAUTH_URL,
      secure: true,
    },
  },
  callbackUrl: {
    name: `next-auth.callback-url`,
    options: {},
  },
  csrfToken: {
    name: 'next-auth.csrf-token',
    options: {},
  },
}

export const config: AuthOptions = {
  session: {
    strategy: 'jwt',
    // generateSessionToken: () => randomUUID?.() ?? randomBytes(32).toString('hex'),
  },
  providers: [
    Credentials({
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

        if (email !== 'john@email.com' || password !== '1234') {
          throw new Error('Invalid credentials')
        }
        /* 
        const user = await new Promise((resolve, reject) => {
          setTimeout(() => {
            resolve({
              id: "1",
              name: "John Doe",
              email: "john@email.com",
              role: "admin",
            });
          }, 1000);
        });
 */
        const user = { id: '1', name: 'John Doe', email: 'john@email.com', role: 'admin' }

        return user
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      console.log('User signin start:', user)
      return true
    },
  },
  pages: {
    // signIn: "/login",
  },
  secret: process.env.JWT_SECRET,
  // cookies: cookies,
}
