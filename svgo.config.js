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
