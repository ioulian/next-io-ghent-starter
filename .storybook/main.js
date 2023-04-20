const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    {
      name: "@storybook/addon-essentials",
      options: {
        actions: false,
      },
    },
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  reactOptions: {
    strictMode: false,
  },
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config, { configType }) => {
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

    //config.resolve.fallback.fs = false;
    config.resolve.alias = {
      ...config.resolve.alias,
      "next-i18next": "react-i18next",
    };

    return config;
  },
};
