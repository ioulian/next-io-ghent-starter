const { resolve } = require("path");

const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
const withPWA = require("next-pwa")({
  dest: "public",
  register: false,
  disable: process.env.NODE_ENV === "development",
  runtimeCaching: require("./pwa-caching"),
});

const { i18n } = require("./next-i18next.config");

/** @type {import('next').NextConfig} */
module.exports = withBundleAnalyzer(
  withPWA({
    reactStrictMode: true,
    poweredByHeader: false,
    i18n,
    compiler: {
      styledComponents: true,
    },
    images: {
      formats: ["image/avif", "image/webp"],
    },
    webpack: (config) => {
      const fileLoaderRule = config.module.rules.find(
        (rule) => rule.test && rule.test.test(".svg")
      );
      fileLoaderRule.exclude = [/\@tabler\/icons\//, /-sprite\.svg$/];
      config.module.rules.push({
        test: function (path) {
          return (
            path.indexOf("@tabler/icons") !== -1 ||
            path.indexOf("-sprite.svg") !== -1
          );
        },
        use: ["svg-sprite-loader", "svgo-loader"],
        include: [
          resolve("node_modules/@tabler/icons"),
          resolve("src"),
          resolve("public"),
        ],
      });

      config.resolve.alias["react-redux"] =
        process.env.NODE_ENV === "development"
          ? "react-redux/dist/react-redux.js"
          : "react-redux/lib";
      return config;
    },
  })
);
