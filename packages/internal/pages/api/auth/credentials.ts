import { AuthOptions } from 'next-auth/core/types'
import CredentialsProvider from 'next-auth/providers/credentials'
import cookiesOptions from './cookies'
import { getUser } from '../user/getUser'

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

        // Backend api emulation
        const response = await getUser(email, password)
          .then(user => {
            return user
          })
          .catch(err => {
            return err
          })

        if (response instanceof Error) throw response
        return response
      },
    }),
  ],
  cookies: cookiesOptions,
}
