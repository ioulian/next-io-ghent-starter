const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");

/** @type {import('next').NextConfig} */
module.exports = withPWA({
  reactStrictMode: true,
  i18n,
  pwa: {
    dest: "public",
    register: false,
    disable: process.env.NODE_ENV === "development",
  },
});
