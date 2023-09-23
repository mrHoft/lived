const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string
const SECURE = process.env.NEXT_AUTH_SECURE === '1'

console.log('DOMAIN', DOMAIN, 'SECURE', SECURE)

type TSameSite = 'strict' | 'lax' | 'none'

type TCookieAttributes = {
  httpOnly: boolean
  sameSite: TSameSite
  path: string
  domain?: string
  secure: boolean
}

type TCookieOptions = {
  name: string
  options: TCookieAttributes
}

type TCookies = {
  sessionToken?: TCookieOptions
  csrfToken?: TCookieOptions
  callbackUrl?: TCookieOptions
}

const sameSite = SECURE ? 'none' : 'lax'

const template: TCookieAttributes = {
  httpOnly: true,
  sameSite: 'lax',
  /* Unsupported by nex-auth
  get domain(): string | undefined {
    return this.sameSite !== 'none' ? `${DOMAIN}` : undefined
  },
 */
  path: '/',
  secure: SECURE,
}

const cookiesOptions: TCookies = {
  callbackUrl: {
    name: `${SECURE ? '__Secure-' : ''}next-auth.callback-url`,
    options: template,
  },
  csrfToken: {
    name: `${SECURE ? '__Host-' : ''}next-auth.csrf-token`,
    options: template,
  },
  sessionToken: {
    name: `${SECURE ? '__Secure-' : ''}next-auth.session-token`,
    options: { ...template /* domain: '.vercel.app' */ },
  },
}

export default cookiesOptions
