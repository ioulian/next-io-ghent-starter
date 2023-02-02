// @ts-check

/** @type {import('svgo').Config} */
module.exports = {
  plugins: [
    {
      name: "preset-default",
    },
    {
      name: "removeAttrs",
      params: {
        attrs: "(class)",
      },
    },
  ],
};
