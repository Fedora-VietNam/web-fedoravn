import createNextIntPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextIntl = createNextIntPlugin()

console.log(withNextIntl)

export default withNextIntl(nextConfig)
