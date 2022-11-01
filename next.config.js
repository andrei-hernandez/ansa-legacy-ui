const withPWA = require("next-pwa")({
  dest: "public",
  disable: process.env.NEXT_PUBLIC_NODE_ENV === "development"
})

module.exports = withPWA({
  reactStrictMode: false,
  swcMinify: true
})
