import createNextIntPlugin from 'next-intl/plugin'

/** @type {import('next').NextConfig} */
const nextConfig = {}

const withNextIntl = createNextIntPlugin()



export default withNextIntl(nextConfig)
