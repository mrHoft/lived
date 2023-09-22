const DOMAIN = process.env.NEXT_PUBLIC_DOMAIN as string
const SECURE = process.env.NEXT_AUTH_SECURE === '1'

type TSameSite = 'Strict' | 'Lax' | 'None'

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

const sameSite = SECURE ? 'None' : 'Lax'

const template: TCookieOptions = {
  name: `${SECURE ? '__Host-' : ''}next-auth.session-token`,
  options: {
    httpOnly: true,
    sameSite,
    path: '/',
    secure: SECURE,
  },
}

if (sameSite !== 'None') template.options.domain = DOMAIN

const cookiesOptions: TCookies = {
  sessionToken: template,
  csrfToken: template,
  callbackUrl: template,
}

export default cookiesOptions
