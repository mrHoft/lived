import { AuthOptions } from 'next-auth/core/types'
import CredentialsProvider from 'next-auth/providers/credentials'
import cookiesOptions from './cookies'
import { getUser } from '../user/getUser'

const SECURE = process.env.NEXT_AUTH_SECURE === '1'

/* TODO: cookiesOptions must be configurated for NexAuth purpoces
console.log('secure:', SECURE)
console.log(cookiesOptions)
*/

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

        const user = await getUser()

        if (email !== user.email || password !== '1234') {
          throw new Error('Invalid credentials')
        }

        return user
      },
    }),
  ],

  /* TODO: cookiesOptions must be configurated for NexAuth purpoces
  secret: SECURE ? (process.env.NEXTAUTH_SECRET as string) : undefined,
  cookies: cookiesOptions,
*/
}
