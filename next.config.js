/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ['en', 'it'],
    defaultLocale: 'it',
  },
  images: {
    domains: ['www.thecocktaildb.com'],
  },
}

module.exports = nextConfig
