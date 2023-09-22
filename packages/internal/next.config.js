/** @type {import("next").NextConfig} */
const nextConfig = {
  webpack(config, { isServer }) {
    config.experiments = { ...config.experiments, topLevelAwait: true }
    config.devServer.open = true

    return config
  },

  experimental: { appDir: true },
  typescript: { ignoreBuildErrors: true },

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig

const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants')

// This uses phases as outlined here: https://nextjs.org/docs/#custom-configuration
module.exports = phase => {
  // when started in development mode `next dev` or `npm run dev` regardless of the value of STAGING environment variable
  const isDev = phase === PHASE_DEVELOPMENT_SERVER
  // when `next build` or `npm run build` is used
  const isProd = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING !== '1'
  // when `next build` or `npm run build` is used
  const isStaging = phase === PHASE_PRODUCTION_BUILD && process.env.STAGING === '1'

  console.log(`isDev:${isDev}  isProd:${isProd}   isStaging:${isStaging}`)
  const env = {
    NEXT_PUBLIC_DOMAIN: (() => {
      if (isDev) return 'test.com'
      if (isProd) return 'vercel.app'
    })(),
    NEXT_DEVELOPMENT_MODE: isDev ? '1' : '0',
    NEXT_AUTH_SECURE: '1', //isProd ? '1' : '0',
  }

  return { env }
}
