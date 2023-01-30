module.exports = {
  debug: false, //process.env.NODE_ENV === "development",
  i18n: {
    locales: ["nl-BE", "fr-BE", "en-GB"],
    defaultLocale: "nl-BE",
  },
  reloadOnPrerender: process.env.NODE_ENV === "development",
};
