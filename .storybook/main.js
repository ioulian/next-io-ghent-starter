const { resolve } = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
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
    "storybook-addon-styled-component-theme/dist/preset",
    "storybook-react-i18next",
    // https://github.com/lifeiscontent/storybook-addon-next-router/issues/60
    // "storybook-addon-next-router", Breaks storybook
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5",
  },
  webpackFinal: async (config, { configType }) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      "@next/font/google": require.resolve("./nextFontGoogle"),
    };

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

    return config;
  },
};
