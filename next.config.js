/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'build',

};
const runtimeCaching = require("next-pwa/cache");
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

const nextTranslate = require('next-translate-plugin');
const withPWA = require('next-pwa')({
  dest: "public",
  register: true,
  skipWaiting: true,
  runtimeCaching
});


module.exports = nextTranslate(withPWA({
  pwa: {
    dest: 'public',
    disable: process.env.NODE_ENV === 'development',
  },
  //distDir: 'build',
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
        port: ''
      }
    ],
  }
}))
 