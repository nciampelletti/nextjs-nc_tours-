/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["ciampelletti-tours.herokuapp.com"],
  },
}

module.exports = nextConfig

