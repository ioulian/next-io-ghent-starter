module.exports = {
  debug: process.env.NODE_ENV === "development",
  i18n: {
    locales: ["nl", "fr", "en"],
    defaultLocale: "nl",
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
