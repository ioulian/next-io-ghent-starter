const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa")({
  dest: "public",
  register: false,
  disable: process.env.NODE_ENV === "development",
});

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    i18n,
    compiler: {
      styledComponents: true,
    },
    images: {
      formats: ["image/avif", "image/webp"],
    },
    webpack(config) {
      const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
      );
      fileLoaderRule.exclude = /-sprite\.svg$/;
      config.module.rules.push({
        test: /-sprite\.svg$/,
        use: ["svg-sprite-loader", "svgo-loader"],
      });

      return config;
    },
  })
);
