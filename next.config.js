const { i18n } = require("./next-i18next.config");
const withPWA = require("next-pwa");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    i18n,
    pwa: {
      dest: "public",
      register: false,
      disable: process.env.NODE_ENV === "development",
    },
  })
);
