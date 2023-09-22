import { SessionProvider } from 'next-auth/react'
import Head from 'next/head'
import './styles.css'
import favicon from '../public/favicon.ico'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <>
      <Head>
        <link rel="icon" href={favicon.src} />
      </Head>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </>
  )
}
