import NextAuth from 'next-auth/next'
import { authConfig } from './credentials'

export default NextAuth(authConfig)
